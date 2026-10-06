// One-time archival tool: recover pages the last Vercel deployment no longer had from the
// Wayback Machine, in the same format as `capture-live-site.mjs` (`{ pageProps }` per route).
//
// Five customer stories (airbank, crew, hera, multis, xchange) were still in Ghost but had
// dropped off the site: the stories query had a page size (Ghost's default 15, later 18) that
// cut off the oldest ones. Their archived pages embed the full Ghost post in __NEXT_DATA__,
// and archived /customer-stories listings carry their tags. `build-ghost-snapshot.mjs` merges
// this capture in, for posts the live capture does not have.
//
// Usage: node bin/archive/capture-wayback-pages.mjs <out-dir>
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh) june-archive/1.0' };

// [Wayback timestamp, original URL]: the latest good capture of each page.
const CAPTURES = [
  ['20231206143729', 'https://www.june.so/customer-stories/airbank'],
  ['20230924162431', 'https://www.june.so/customer-stories/crew'],
  ['20230608211730', 'https://www.june.so/customer-stories/hera'],
  ['20230608224711', 'https://www.june.so/customer-stories/multis'],
  ['20240419210822', 'https://www.june.so/customer-stories/xchange'],
  // Listings with the stories' tags (the story pages fetched them without tags).
  ['20230608223608', 'https://www.june.so/customer-stories'],
  ['20240302140143', 'https://www.june.so/customer-stories'],
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchCapture(timestamp, url) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(`https://web.archive.org/web/${timestamp}id_/${url}`, { headers: UA });
    if (res.ok) {
      let body = Buffer.from(await res.arrayBuffer());
      if (body[0] === 0x1f && body[1] === 0x8b) body = zlib.gunzipSync(body);
      return body.toString('utf-8');
    }
    await sleep(5_000 * attempt);
  }
  throw new Error(`Could not fetch ${timestamp} ${url}`);
}

async function main() {
  const outDir = process.argv[2];
  if (!outDir) throw new Error('Usage: capture-wayback-pages.mjs <out-dir>');
  fs.mkdirSync(outDir, { recursive: true });

  for (const [timestamp, url] of CAPTURES) {
    const html = await fetchCapture(timestamp, url);
    const nextData = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s);
    if (!nextData) throw new Error(`No __NEXT_DATA__ in ${timestamp} ${url}`);
    const { props } = JSON.parse(nextData[1]);
    const route = new URL(url).pathname.replace(/^\/|\/$/g, '').replace(/\//g, '__');
    fs.writeFileSync(path.join(outDir, `${route}@${timestamp}.json`), JSON.stringify({ pageProps: props.pageProps }));
    console.log(`Captured ${url} @ ${timestamp}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
