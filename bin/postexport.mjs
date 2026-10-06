// Post-processing of the static export (`out/`) for GitHub Pages. Runs as part of `yarn build`.
//
// 1. Redirects: GitHub Pages cannot redirect, so every entry in redirects.js becomes a small
//    HTML page at the source path that forwards to the destination (meta refresh + script,
//    with a canonical link so search engines consolidate on the destination).
//    - Entries are matched first-wins, like Next.js did; later duplicates are ignored.
//    - Unconditional redirects take precedence over exported pages, as they did on Vercel.
//    - Query-conditional redirects (`has`) cannot be expressed statically: they are emitted
//      unconditionally when nothing else lives at the source path, and skipped otherwise.
// 2. Page/directory collisions: `out/blog.html` and `out/blog/` both exist. GitHub Pages may
//    answer `/blog` by redirecting to `/blog/`, so `blog/index.html` gets a copy of the page.
// 3. Guard: fail if any page still references the old Ghost/S3 image hosts.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'out');
const SITE_URL = 'https://www.june.so';
const DEAD_ASSET_HOSTS = /https?:\/\/(?:june\.ghost\.io\/content\/|webassets\.june\.so\/)/;

const pagePath = (route) => path.join(OUT, `${route.replace(/\/$/, '') || '/index'}.html`);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function redirectPage(destination) {
  const absolute = destination.startsWith('/') ? `${SITE_URL}${destination}` : destination;
  const href = escapeHtml(destination);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${escapeHtml(absolute)}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${href}">
<script>location.replace(${JSON.stringify(destination)} + location.search + location.hash);</script>
</head>
<body><p>This page has moved to <a href="${href}">${href}</a>.</p></body>
</html>
`;
}

function writeRedirects() {
  const redirects = require('../redirects.js');
  const seen = new Set();
  let written = 0;
  for (const { source, destination, has } of redirects) {
    if (seen.has(source)) continue;
    seen.add(source);
    if (path.extname(source)) {
      console.warn(`  skipped ${source}: a redirect page cannot live at a file path`);
      continue;
    }
    const target = pagePath(source);
    if (has && fs.existsSync(target)) {
      console.warn(`  skipped ${source}: query-conditional redirect over an existing page`);
      continue;
    }
    if (destination.startsWith('/') && !fs.existsSync(pagePath(destination)) && !redirects.some((r) => r.source === destination)) {
      console.warn(`  note: ${source} -> ${destination}, which is not a page on this site`);
    }
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, redirectPage(destination));
    written++;
  }
  console.log(`Wrote ${written} redirect pages`);
}

function fixPageDirectoryCollisions() {
  let copied = 0;
  for (const file of walk(OUT)) {
    if (!file.endsWith('.html')) continue;
    const dir = file.slice(0, -'.html'.length);
    const index = path.join(dir, 'index.html');
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() && !fs.existsSync(index)) {
      fs.copyFileSync(file, index);
      copied++;
    }
  }
  console.log(`Copied ${copied} pages that share their path with a directory to <dir>/index.html`);
}

function checkOutput() {
  const problems = [];
  for (const required of ['index.html', '404.html', 'CNAME', '.nojekyll', 'sitemap.xml', 'robots.txt']) {
    if (!fs.existsSync(path.join(OUT, required))) problems.push(`missing out/${required}`);
  }
  for (const file of walk(OUT)) {
    if (!/\.(html|json)$/.test(file)) continue;
    if (DEAD_ASSET_HOSTS.test(fs.readFileSync(file, 'utf-8'))) {
      problems.push(`${path.relative(OUT, file)} references an image on Ghost/S3 instead of /blog-assets`);
    }
  }
  if (problems.length) {
    problems.forEach((p) => console.error(`  ${p}`));
    throw new Error(`Static export check failed (${problems.length} problems)`);
  }
}

writeRedirects();
fixPageDirectoryCollisions();
checkOutput();
