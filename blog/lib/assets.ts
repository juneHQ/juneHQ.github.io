import fs from 'fs';
import path from 'path';
import { SITE_URL } from 'lib/utils';

/**
 * Point the frozen Ghost content at assets and pages that still exist.
 *
 * - Images: every image URL in the snapshot (Ghost, its S3 mirror, third-party hosts) has a
 *   local copy under `public/blog-assets/`, listed in `content/ghost/assets.json`
 *   (see `bin/archive/mirror-images.mjs`). Ghost's responsive variants all map to the same
 *   local file, so `srcset`/`sizes` are dropped when they no longer offer a choice. Inside
 *   JSON-LD blocks, assets get absolute URLs, as structured data requires.
 * - Links: post links on the dead `june.ghost.io` domain point at the post on june.so.
 */

const CONTENT_DIR = path.join(process.cwd(), 'content', 'ghost');
const URL_PATTERN = /https?:\/\/[^\s"'<>()]+/g;
const GHOST_POST_LINK = /^https?:\/\/june\.ghost\.io\/([a-z0-9-]+)\/?$/;
const JSON_LD_BLOCK = /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g;

type Route = (slug: string) => string | undefined;

let manifest: Record<string, string> | null = null;

function loadManifest() {
  if (!manifest) {
    manifest = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'assets.json'), 'utf-8'));
  }
  return manifest;
}

function localUrl(url: string, routeForSlug: Route): string | undefined {
  const assets = loadManifest();
  const decoded = url.replace(/&amp;/g, '&');
  const asset = assets[url] ?? assets[decoded];
  if (asset) return encodeURI(asset);
  const postLink = decoded.match(GHOST_POST_LINK);
  return postLink ? routeForSlug(postLink[1]) : undefined;
}

/** Drop `srcset`/`sizes` from tags whose candidates all resolve to the same file. */
function collapseSrcsets(html: string) {
  return html.replace(/<(img|source)\b[^>]*>/g, (tag) => {
    const srcset = tag.match(/\ssrcset="([^"]*)"/);
    if (!srcset) return tag;
    const candidates = new Set(srcset[1].split(',').map((c) => c.trim().split(/\s+/)[0]));
    if (candidates.size > 1) return tag;
    return tag.replace(/\ssrcset="[^"]*"/, '').replace(/\ssizes="[^"]*"/, '');
  });
}

function rewriteUrls(value: string, routeForSlug: Route, origin = '') {
  return value.replace(URL_PATTERN, (match) => {
    // The pattern can run into an HTML entity or punctuation that follows the URL.
    const [, url, tail] = match.match(/^(.*?)((?:&quot;|&#39;|&#x27;|[.,;:])*)$/);
    const local = localUrl(url, routeForSlug);
    return (local ? `${origin}${local}` : url) + tail;
  });
}

function rewriteString(value: string, routeForSlug: Route) {
  if (!value.includes('http')) return value;
  const withJsonLd = value.replace(JSON_LD_BLOCK, (block) => rewriteUrls(block, routeForSlug, SITE_URL));
  const rewritten = rewriteUrls(withJsonLd, routeForSlug);
  return rewritten.includes('srcset="') ? collapseSrcsets(rewritten) : rewritten;
}

/** Deep-rewrite every string in `value` to local assets and live post URLs. */
export function localizeGhostContent<T>(value: T, routeForSlug: Route): T {
  if (typeof value === 'string') return rewriteString(value, routeForSlug) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => localizeGhostContent(v, routeForSlug)) as unknown as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localizeGhostContent(v, routeForSlug)])
    ) as T;
  }
  return value;
}
