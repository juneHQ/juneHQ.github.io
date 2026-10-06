// One-time archival tool: rebuild the Ghost CMS content (posts + tags) from the page data
// captured by `capture-live-site.mjs`, and write it to `content/ghost/`.
//
// Every Ghost-backed page passed raw Ghost API objects through getStaticProps, so the union
// of all captured page props contains every post the site ever rendered. Posts appear in
// several places with different field subsets (e.g. customer stories were fetched without
// tags/authors on their own page), so the versions are merged field by field and any
// disagreement between two captures is reported as a conflict.
//
// `--archived <dir>` adds older captures (see `capture-wayback-pages.mjs`). They only
// contribute posts the live capture does not have, preferring full posts over listing entries.
//
// Usage: node bin/archive/build-ghost-snapshot.mjs <capture-dir> [--archived <dir>]
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', '..', 'content', 'ghost');

// Some pages rewrote Ghost image URLs to the S3 mirror before rendering; undo that so the
// snapshot only contains what Ghost itself returned.
const S3_MIRROR = 'https://webassets.june.so/';
const GHOST_CONTENT = 'https://june.ghost.io/content/';

function canonicalize(value) {
  if (typeof value === 'string') return value.split(S3_MIRROR).join(GHOST_CONTENT);
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, canonicalize(v)]));
  }
  return value;
}

const isPost = (value) => value && typeof value === 'object' && typeof value.uuid === 'string' && 'slug' in value;
const isTag = (value) => value && typeof value === 'object' && typeof value.slug === 'string' && 'visibility' in value && !('uuid' in value);

function readItems(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'manifest.json');
  return files.flatMap((file) => {
    const pageProps = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8')).pageProps ?? {};
    return Object.values(pageProps)
      .flatMap((value) => (Array.isArray(value) ? value : [value]))
      .map((item) => ({ item, file }));
  });
}

function main() {
  const args = process.argv.slice(2);
  const archivedIdx = args.indexOf('--archived');
  const archivedDir = archivedIdx >= 0 ? args.splice(archivedIdx, 2)[1] : null;
  const captureDir = args[0];
  if (!captureDir) throw new Error('Usage: build-ghost-snapshot.mjs <capture-dir> [--archived <dir>]');

  const posts = new Map();
  const tags = new Map();
  const conflicts = [];

  const mergeInto = (store, key, incoming, source) => {
    const existing = store.get(key);
    if (!existing) {
      store.set(key, { ...incoming });
      return;
    }
    for (const [field, value] of Object.entries(incoming)) {
      if (!(field in existing)) {
        existing[field] = value;
      } else if (JSON.stringify(existing[field]) !== JSON.stringify(value)) {
        conflicts.push({ key, field, source });
      }
    }
  };

  for (const { item, file } of readItems(captureDir)) {
    if (isPost(item)) {
      const post = canonicalize(item);
      mergeInto(posts, post.id, post, file);
      for (const tag of post.tags ?? []) mergeInto(tags, tag.id, tag, file);
    } else if (isTag(item)) {
      mergeInto(tags, item.id, canonicalize(item), file);
    }
  }

  if (archivedDir) {
    const live = new Set(posts.keys());
    const liveConflicts = conflicts.length;
    const recovered = new Map();
    const archived = readItems(archivedDir)
      .filter(({ item }) => isPost(item) && !live.has(item.id))
      .sort((a, b) => Number('html' in b.item) - Number('html' in a.item));
    for (const { item, file } of archived) {
      const post = canonicalize(item);
      mergeInto(recovered, post.id, post, file);
    }
    // Older captures legitimately differ in details such as updated_at; keep the full post.
    conflicts.length = liveConflicts;
    for (const post of recovered.values()) {
      posts.set(post.id, post);
      for (const tag of post.tags ?? []) if (!tags.has(tag.id)) tags.set(tag.id, tag);
    }
    console.log(`Recovered ${recovered.size} posts from ${archivedDir}: ${[...recovered.values()].map((p) => p.slug).join(', ')}`);
  }

  // Ghost's default order for posts is `published_at DESC`.
  const sortedPosts = [...posts.values()].sort(
    (a, b) => (b.published_at ?? '').localeCompare(a.published_at ?? '') || b.id.localeCompare(a.id)
  );
  const sortedTags = [...tags.values()].sort((a, b) => a.slug.localeCompare(b.slug));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'posts.json'), JSON.stringify(sortedPosts, null, 1) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'tags.json'), JSON.stringify(sortedTags, null, 1) + '\n');

  console.log(`Wrote ${sortedPosts.length} posts and ${sortedTags.length} tags to ${OUT_DIR}`);
  if (conflicts.length) {
    console.warn(`${conflicts.length} field conflicts between captures (first version kept):`);
    for (const c of conflicts.slice(0, 50)) console.warn(`  ${c.key}.${c.field} (${c.source})`);
    process.exitCode = 1;
  }
}

main();
