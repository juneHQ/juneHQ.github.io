// One-time archival tool: download every image the frozen blog content references, recover
// the ones that are gone from Ghost via the Wayback Machine, optimize them for the web, and
// store them under `public/blog-assets/`. Writes `content/ghost/assets.json`, the map from
// original URL to local path that `blog/lib/assets.ts` uses to rewrite the content.
//
// Sources, in order:
//   1. https://webassets.june.so (the S3 mirror of Ghost images the site used to serve)
//   2. the original URL (Ghost itself is gone, but third-party hosts may still be up)
//   3. the latest HTTP 200 capture of the original URL in the Wayback Machine
// Ghost's resized variants (`/content/images/size/w600/...`) collapse onto the original.
//
// Images are resized to at most 1600px wide. Images in post bodies are re-encoded as WebP
// (animated WebP for GIFs), which keeps the site well under GitHub Pages' 1 GB limit.
// Images used for social cards and avatars (feature_image, og_image, ...) keep their
// original format, since not every link-preview crawler accepts WebP.
//
// Usage: node bin/archive/mirror-images.mjs [--cache <dir>] [--concurrency <n>] [extra-urls.txt...]
// (lower the concurrency when the Wayback Machine starts refusing connections)
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const CONTENT_DIR = path.join(ROOT, 'content', 'ghost');
const PUBLIC_DIR = path.join(ROOT, 'public');
const LOCAL_PREFIX = '/blog-assets';

const GHOST_CONTENT = 'https://june.ghost.io/content/';
const S3_MIRROR = 'https://webassets.june.so/';
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh) june-archive/1.0' };
const DEFAULT_CONCURRENCY = 16;

// Blog images are shown in a ~720px column; 1600px covers 2x displays (Ghost's own srcset
// tops out at w1600 for that column).
const MAX_WIDTH = 1600;

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif)$/i;
// Anything an <img>, <source> or <video> loads is an asset, with or without a file extension
// (images pasted from Google Docs live on googleusercontent.com without one); links only
// count when they point at an image file.
const MEDIA_TAG = /<(?:img|source|video)\b[^>]*>/g;
const MEDIA_ATTR = /\s(?:src|data-src|poster)="(https?:\/\/[^"]+)"/g;
const LINK_ATTR = /\shref="(https?:\/\/[^"]+)"/g;
const SRCSET_ATTR = /srcset="([^"]+)"/g;
const CSS_URL = /url\((?:&quot;|["'])?(https?:\/\/[^)"'&]+)(?:&quot;|["'])?\)/g;
// Anything on Ghost's content path is an asset, wherever it appears (e.g. JSON-LD blocks).
const GHOST_ASSET_URL = /https?:\/\/(?:june\.ghost\.io\/content|webassets\.june\.so)\/[^\s"'<>()\\]+/g;
const IMAGE_FIELDS = new Set(['feature_image', 'og_image', 'twitter_image', 'profile_image', 'cover_image']);
const WAYBACK_ATTEMPTS = 4;

// Images that cannot be found anywhere, resolved to the image they stand for:
// - hand-written JSON-LD in four posts points at images that never existed (wrong folder or
//   name); each meant the post's feature image.
// - the airbank story's 2023/05/image-1.png was never archived; it replaced (May 2023) a
//   screenshot pasted from Google Docs in the same spot, which still exists.
const ALIASES = {
  'https://june.ghost.io/content/images/2023/05/image-1.png':
    'https://lh3.googleusercontent.com/tZJtEV6rEjvnBekfhs6Bunp6HW_DNB9iIoojYGqukDrbxwFXHWnJf-rCeUa1ZLjmZMZMLSG50xDcItKbrvioibsKmaUY5cbUB42p9CVcaEF0-yczAHrIZb8JYzfLSHbdSHjz-FLGK04ksEZRc50fhxU',
  'https://june.ghost.io/content/images/size/w600/2023/05/image-1.png':
    'https://lh3.googleusercontent.com/tZJtEV6rEjvnBekfhs6Bunp6HW_DNB9iIoojYGqukDrbxwFXHWnJf-rCeUa1ZLjmZMZMLSG50xDcItKbrvioibsKmaUY5cbUB42p9CVcaEF0-yczAHrIZb8JYzfLSHbdSHjz-FLGK04ksEZRc50fhxU',
  'https://june.ghost.io/content/images/size/w1000/2023/05/image-1.png':
    'https://lh3.googleusercontent.com/tZJtEV6rEjvnBekfhs6Bunp6HW_DNB9iIoojYGqukDrbxwFXHWnJf-rCeUa1ZLjmZMZMLSG50xDcItKbrvioibsKmaUY5cbUB42p9CVcaEF0-yczAHrIZb8JYzfLSHbdSHjz-FLGK04ksEZRc50fhxU',
  'https://june.ghost.io/content/images/2024/12/crm-customer-success-software.png':
    'https://june.ghost.io/content/images/2025/01/crm-customer-success-software.png',
  'https://june.ghost.io/content/images/2025/02/embedded-crm-dashboards.png':
    'https://june.ghost.io/content/images/2025/02/crm-embedded-dashboards.png',
  'https://june.ghost.io/content/images/2025/04/tech-touch-customer-success.png':
    'https://june.ghost.io/content/images/2025/03/tech-touch-customer-success.png',
  'https://june.ghost.io/content/images/2025/02/customer-success-operations.png':
    'https://june.ghost.io/content/images/2025/01/customer-success-operations.png',
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** `https://june.ghost.io/content/images/size/w600/2022/01/a.png` -> `images/2022/01/a.png` */
function ghostPath(url) {
  for (const prefix of [GHOST_CONTENT, S3_MIRROR]) {
    if (url.startsWith(prefix)) {
      return decodeURI(url.slice(prefix.length).split(/[?#]/)[0]).replace(/^images\/size\/w\d+(?:h\d+)?\//, 'images/');
    }
  }
  return null;
}

function isImageUrl(url) {
  if (ghostPath(url)) return true;
  try {
    const { hostname, pathname } = new URL(url);
    return IMAGE_EXT.test(pathname) || hostname === 'images.unsplash.com';
  } catch {
    return false;
  }
}

function collectUrls(value, found, social, field = '') {
  if (typeof value === 'string') {
    if (IMAGE_FIELDS.has(field) && /^https?:\/\//.test(value)) {
      found.add(value);
      social.add(value);
    }
    if (field === 'html' || value.includes('<')) {
      for (const [tag] of value.matchAll(MEDIA_TAG)) {
        for (const [, url] of tag.matchAll(MEDIA_ATTR)) found.add(url.replace(/&amp;/g, '&'));
      }
      for (const [, url] of value.matchAll(LINK_ATTR)) if (isImageUrl(url.replace(/&amp;/g, '&'))) found.add(url.replace(/&amp;/g, '&'));
      for (const [, srcset] of value.matchAll(SRCSET_ATTR)) {
        for (const candidate of srcset.split(',')) {
          const url = candidate.trim().split(/\s+/)[0];
          if (/^https?:\/\//.test(url)) found.add(url.replace(/&amp;/g, '&'));
        }
      }
      for (const [, url] of value.matchAll(CSS_URL)) found.add(url);
    }
    for (const [url] of value.matchAll(GHOST_ASSET_URL)) found.add(url.replace(/[.,;:]+$/, ''));
  } else if (Array.isArray(value)) {
    value.forEach((v) => collectUrls(v, found, social, field));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) collectUrls(v, found, social, k);
  }
  return found;
}

/** Stable local path for an asset. */
function localPathFor(url) {
  const ghost = ghostPath(url);
  if (ghost) return `${LOCAL_PREFIX}/${ghost}`;
  const { hostname, pathname, search } = new URL(url);
  const ext = (pathname.match(IMAGE_EXT)?.[0] ?? (new URLSearchParams(search).get('fm') ? `.${new URLSearchParams(search).get('fm')}` : '')).toLowerCase();
  const base = decodeURIComponent(pathname).replace(IMAGE_EXT, '').replace(/[^A-Za-z0-9._/-]+/g, '-').replace(/^\/+/, '').replace(/\/+/g, '_').slice(-80);
  // Without a file extension the path is an opaque token; hash the URL to keep names unique.
  const hashed = search || !ext ? url : null;
  const hash = hashed ? `-${crypto.createHash('sha1').update(hashed).digest('hex').slice(0, 8)}` : '';
  return `${LOCAL_PREFIX}/external/${hostname}/${base}${hash}${ext}`;
}

async function fetchImage(url) {
  try {
    const res = await fetch(url, { headers: UA, redirect: 'follow', signal: AbortSignal.timeout(60_000) });
    if (!res.ok) return null;
    const body = Buffer.from(await res.arrayBuffer());
    const type = res.headers.get('content-type') ?? '';
    if (type.startsWith('text/html')) return null;
    if (/svg/.test(type) || /<svg[\s>]/.test(body.subarray(0, 1024).toString())) return body;
    await sharp(body, { animated: true, limitInputPixels: false }).metadata(); // throws on anything that is not an image
    return body;
  } catch {
    return null;
  }
}

async function waybackCaptures(url) {
  const cdx = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(url)}&filter=statuscode:200&output=json&fl=timestamp,original`;
  for (let attempt = 1; attempt <= WAYBACK_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(cdx, { headers: UA, signal: AbortSignal.timeout(60_000) });
      if (res.ok) return (await res.json()).slice(1).reverse();
    } catch {
      // retry below
    }
    await sleep(5_000 * attempt);
  }
  return [];
}

async function fetchFromWayback(url) {
  for (const [timestamp, original] of (await waybackCaptures(url)).slice(0, 5)) {
    for (let attempt = 1; attempt <= WAYBACK_ATTEMPTS; attempt++) {
      const body = await fetchImage(`https://web.archive.org/web/${timestamp}id_/${original}`);
      if (body) return body;
      await sleep(5_000 * attempt);
    }
  }
  return null;
}

/** All the places an asset may still be found, best first. */
function candidateSources(urls) {
  const ghost = ghostPath(urls[0]);
  const sources = [];
  if (ghost) {
    const sized = urls.filter((u) => /\/images\/size\/w\d+/.test(u)).sort((a, b) => parseInt(b.match(/w(\d+)/)[1]) - parseInt(a.match(/w(\d+)/)[1]));
    sources.push(['s3', `${S3_MIRROR}${encodeURI(ghost)}`]);
    sources.push(['ghost', `${GHOST_CONTENT}${encodeURI(ghost)}`]);
    sources.push(['wayback', `${GHOST_CONTENT}${encodeURI(ghost)}`]);
    sources.push(['wayback', `${S3_MIRROR}${encodeURI(ghost)}`]);
    for (const u of sized) {
      sources.push(['s3', u.replace(GHOST_CONTENT, S3_MIRROR)]);
      sources.push(['wayback', u.replace(S3_MIRROR, GHOST_CONTENT)]);
    }
  } else {
    sources.push(['origin', urls[0]]);
    sources.push(['wayback', urls[0]]);
  }
  return sources;
}

/** Re-encode an image in its own format, at most MAX_WIDTH wide. */
async function optimizeInPlace(body, ext) {
  const image = sharp(body, { animated: ext === '.gif', limitInputPixels: false });
  const { width } = await image.metadata();
  if (ext === '.gif' && width <= MAX_WIDTH) return body;
  const resized = width > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;
  if (ext === '.png') return resized.png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 }).toBuffer();
  if (ext === '.jpg' || ext === '.jpeg') return resized.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  if (ext === '.webp') return resized.webp({ quality: 90 }).toBuffer();
  if (ext === '.gif') return resized.gif().toBuffer();
  return body;
}

async function toWebp(body, ext) {
  const image = sharp(body, { animated: ext === '.gif', limitInputPixels: false });
  const { width } = await image.metadata();
  const resized = width > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;
  return resized.webp({ quality: ext === '.gif' ? 85 : 90, effort: 4 }).toBuffer();
}

/** Returns [bytes, local path] for the smallest acceptable encoding of an asset. */
async function optimize(body, localPath, webpPath) {
  const ext = path.extname(localPath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) return [body, localPath];
  try {
    const sameFormat = await optimizeInPlace(body, ext);
    const best = sameFormat.length < body.length ? sameFormat : body;
    if (!webpPath) return [best, localPath];
    const webp = await toWebp(body, ext);
    return webp.length < best.length ? [webp, webpPath] : [best, localPath];
  } catch {
    return [body, localPath];
  }
}

async function main() {
  const args = process.argv.slice(2);
  const cacheIdx = args.indexOf('--cache');
  const cacheDir = cacheIdx >= 0 ? args.splice(cacheIdx, 2)[1] : null;
  const concurrencyIdx = args.indexOf('--concurrency');
  const concurrency = concurrencyIdx >= 0 ? Number(args.splice(concurrencyIdx, 2)[1]) : DEFAULT_CONCURRENCY;
  if (cacheDir) fs.mkdirSync(cacheDir, { recursive: true });

  const found = new Set();
  const social = new Set();
  for (const file of ['posts.json', 'tags.json']) {
    collectUrls(JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')), found, social);
  }
  for (const extra of args) {
    fs.readFileSync(extra, 'utf-8').split('\n').map((l) => l.trim()).filter(Boolean).forEach((u) => found.add(u));
  }

  for (const [alias, url] of Object.entries(ALIASES)) if (found.has(alias)) found.add(url);

  // Group every referenced URL by the local file it maps to.
  const groups = new Map();
  for (const url of found) {
    if (ALIASES[url]) continue;
    const local = localPathFor(url);
    if (!groups.has(local)) groups.set(local, []);
    groups.get(local).push(url);
  }
  console.log(`${found.size} referenced URLs -> ${groups.size} files`);

  // Where each non-social image goes if it is converted to WebP (a.png -> a.webp, or
  // a.png.webp when a.webp is already taken).
  const taken = new Set(groups.keys());
  const webpPaths = new Map();
  for (const [local, urls] of [...groups.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    if (urls.some((u) => social.has(u)) || !/\.(png|jpe?g|gif|webp)$/i.test(local) || /\.webp$/i.test(local)) continue;
    let webp = local.replace(/\.[a-z]+$/i, '.webp');
    if (taken.has(webp)) webp = `${local}.webp`;
    taken.add(webp);
    webpPaths.set(local, webp);
  }

  // Reuse the files of a previous run, so re-running only processes new images.
  const manifestPath = path.join(CONTENT_DIR, 'assets.json');
  const previous = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) : {};
  const manifest = {};
  const report = { s3: 0, ghost: 0, origin: 0, wayback: 0, cached: 0, reused: 0, missing: [] };
  let bytesIn = 0;
  let bytesOut = 0;
  const queue = [...groups.entries()];

  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (queue.length) {
        const [local, urls] = queue.shift();
        const done = urls.map((u) => previous[u]).find((p) => p && fs.existsSync(path.join(PUBLIC_DIR, p)));
        if (done) {
          report.reused++;
          for (const url of urls) manifest[url] = done;
          continue;
        }
        const cacheFile = cacheDir && path.join(cacheDir, local);
        let body = cacheFile && fs.existsSync(cacheFile) ? fs.readFileSync(cacheFile) : null;
        if (body) report.cached++;
        for (const [kind, source] of body ? [] : candidateSources(urls)) {
          body = kind === 'wayback' ? await fetchFromWayback(source) : await fetchImage(source);
          if (body) {
            report[kind]++;
            if (cacheFile) {
              fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
              fs.writeFileSync(cacheFile, body);
            }
            break;
          }
        }
        if (!body) {
          report.missing.push(urls[0]);
          continue;
        }
        // Name extension-less downloads after their actual format.
        let named = local;
        let webpPath = webpPaths.get(local);
        if (!IMAGE_EXT.test(local)) {
          const format = /<svg[\s>]/.test(body.subarray(0, 1024).toString())
            ? 'svg'
            : (await sharp(body, { animated: true, limitInputPixels: false }).metadata()).format;
          named = `${local}.${format === 'jpeg' ? 'jpg' : format}`;
          if (!urls.some((u) => social.has(u)) && format !== 'svg') webpPath = `${local}.webp`;
        }
        const [optimized, finalPath] = await optimize(body, named, webpPath);
        const target = path.join(PUBLIC_DIR, finalPath);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, optimized);
        bytesIn += body.length;
        bytesOut += optimized.length;
        for (const url of urls) manifest[url] = finalPath;
      }
    })
  );

  for (const [alias, url] of Object.entries(ALIASES)) {
    if (found.has(alias) && manifest[url]) manifest[alias] = manifest[url];
  }

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(manifestPath, JSON.stringify(sorted, null, 1) + '\n');
  console.log(`Sources: s3=${report.s3} ghost=${report.ghost} origin=${report.origin} wayback=${report.wayback} (cached=${report.cached}, reused=${report.reused})`);
  console.log(`Size: ${(bytesIn / 1e6).toFixed(1)} MB downloaded -> ${(bytesOut / 1e6).toFixed(1)} MB written`);
  if (report.missing.length) {
    console.warn(`${report.missing.length} images could not be recovered:`);
    report.missing.forEach((u) => console.warn(`  ${u}`));
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
