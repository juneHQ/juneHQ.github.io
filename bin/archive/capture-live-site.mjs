// One-time archival tool: capture the Next.js page data (`/_next/data/<buildId>/<route>.json`)
// and rendered HTML for every route of the last Vercel deployment of www.june.so.
//
// Ghost (june.ghost.io) is gone, so the last Vercel build is the only complete copy of the
// blog, guides and customer stories. `build-ghost-snapshot.mjs` turns this capture into
// `content/ghost/*.json`, which the site now builds from.
//
// Usage: node bin/archive/capture-live-site.mjs <out-dir> [extra routes...]
import fs from 'fs';
import path from 'path';

const BASE = process.env.LIVE_SITE_URL ?? 'https://www.june.so';
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh) june-archive/1.0' };
const CONCURRENCY = 12;

// Routes that exist but are not listed in the sitemap.
const DEFAULT_EXTRA_ROUTES = [
  '/content',
  '/blog/topic/crm',
  '/blog/topic/customer-success',
  '/blog/topic/engagement',
  '/blog/topic/growth',
  '/blog/topic/measurement',
  '/blog/topic/playbooks',
  '/blog/topic/product_announcements',
  '/blog/topic/retention',
  '/coupon/howtheygrow',
  '/coupon/aakash',
  '/coupon/strategybreakdowns',
];

async function get(url) {
  const res = await fetch(url, { headers: UA });
  return { status: res.status, body: Buffer.from(await res.arrayBuffer()) };
}

function fileStem(route) {
  return route === '/' ? 'index' : route.replace(/^\/|\/$/g, '').replace(/\//g, '__');
}

async function main() {
  const [outDir, ...extra] = process.argv.slice(2);
  if (!outDir) throw new Error('Usage: capture-live-site.mjs <out-dir> [extra routes...]');
  fs.mkdirSync(outDir, { recursive: true });

  const home = (await get(`${BASE}/`)).body.toString();
  const buildId = home.match(/"buildId":"([^"]+)"/)[1];

  const sitemapIndex = (await get(`${BASE}/sitemap.xml`)).body.toString();
  const routes = new Set([...DEFAULT_EXTRA_ROUTES, ...extra]);
  for (const [, sitemapUrl] of sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const sitemap = (await get(sitemapUrl)).body.toString();
    for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      routes.add(loc.replace(/^https?:\/\/[^/]+/, '') || '/');
    }
  }

  const queue = [...routes].sort();
  const results = [];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) {
        const route = queue.shift();
        const dataRoute = route === '/' ? '/index' : route;
        const data = await get(`${BASE}/_next/data/${buildId}${dataRoute}.json`);
        const html = await get(`${BASE}${route}`);
        if (data.status === 200) fs.writeFileSync(path.join(outDir, `${fileStem(route)}.json`), data.body);
        if (html.status === 200) fs.writeFileSync(path.join(outDir, `${fileStem(route)}.html`), html.body);
        results.push({ route, dataStatus: data.status, htmlStatus: html.status });
      }
    })
  );

  results.sort((a, b) => a.route.localeCompare(b.route));
  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({ base: BASE, buildId, results }, null, 1));
  console.log(`Captured ${results.length} routes from ${BASE} (build ${buildId}) into ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
