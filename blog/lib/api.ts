import fs from 'fs';
import path from 'path';
import type { PostOrPage, Tag } from '@tryghost/content-api';
import { localizeGhostContent } from './assets';

/**
 * Local, read-only stand-in for the Ghost Content API client.
 *
 * Ghost (june.ghost.io) has been shut down and the blog is frozen, so all posts and tags
 * live in `content/ghost/*.json` (see `bin/archive/`). This implements the subset of the
 * `@tryghost/content-api` interface the site uses, with Ghost's semantics: NQL filters on
 * `tag` / `id` joined with `+`, `published_at DESC` default order, a default limit of 15,
 * `fields` projection, and `tags` / `authors` only present when included.
 *
 * Image URLs and links to the old Ghost domain are rewritten on load (see `./assets`), and
 * `content/ghost/overrides.json` applies deliberate changes to individual posts (by slug)
 * without touching the archived data.
 */

type Include = string | string[];

interface BrowseOptions {
  filter?: string;
  include?: Include;
  fields?: string | string[];
  limit?: number | 'all';
  order?: string;
}

interface ReadOptions {
  include?: Include;
  fields?: string | string[];
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'ghost');
const DEFAULT_LIMIT = 15;

let cache: { posts: PostOrPage[]; tags: Tag[] } | null = null;

const hasTag = (post: PostOrPage, slug: string) => (post.tags ?? []).some((tag) => tag.slug === slug);

/** The june.so page a post is published at, if it has one (videos and podcasts link out). */
function routeForPost(post?: PostOrPage) {
  if (!post || hasTag(post, 'video') || hasTag(post, 'podcast')) return undefined;
  if (hasTag(post, 'user-story')) return `/customer-stories/${post.slug}`;
  if (hasTag(post, 'guide')) return `/guides/${post.slug}`;
  return `/blog/${post.slug}`;
}

function load() {
  if (!cache) {
    const archived: PostOrPage[] = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'posts.json'), 'utf-8'));
    const overrides: Record<string, Partial<PostOrPage>> = JSON.parse(
      fs.readFileSync(path.join(CONTENT_DIR, 'overrides.json'), 'utf-8')
    );
    const posts = archived.map((post) => ({ ...post, ...overrides[post.slug] }));
    const tags: Tag[] = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'tags.json'), 'utf-8'));
    const routeForSlug = (slug: string) => routeForPost(posts.find((post) => post.slug === slug));
    cache = {
      posts: localizeGhostContent(posts, routeForSlug),
      tags: localizeGhostContent(tags, routeForSlug),
    };
  }
  return cache;
}

const toList = (value?: string | string[]) =>
  (Array.isArray(value) ? value : (value ?? '').split(',')).map((v) => v.trim()).filter(Boolean);

/** Parse the NQL subset used by the site, e.g. `tag:-user-story+tag:-guide` or `tag:x+id:-y`. */
function matchesFilter(post: PostOrPage, filter?: string) {
  if (!filter) return true;
  return filter.split('+').every((clause) => {
    const match = clause.trim().match(/^(tag|tags|id|slug):(-?)(.+)$/);
    if (!match) throw new Error(`Unsupported Ghost filter clause "${clause}" in "${filter}"`);
    const [, key, negate, rawValue] = match;
    const value = rawValue.toLowerCase();
    const hit =
      key === 'tag' || key === 'tags'
        ? (post.tags ?? []).some((tag) => tag.slug.toLowerCase() === value)
        : String(post[key]).toLowerCase() === value;
    return negate ? !hit : hit;
  });
}

function compareBy(order: string) {
  const [field, direction = 'asc'] = order.trim().split(/\s+/);
  const sign = direction.toLowerCase() === 'desc' ? -1 : 1;
  return (a: PostOrPage, b: PostOrPage) => sign * String(a[field] ?? '').localeCompare(String(b[field] ?? ''));
}

/** Shape a post like the Ghost API would for the given `include` / `fields`. */
function present(post: PostOrPage, options: ReadOptions): PostOrPage {
  const include = toList(options.include);
  const result = { ...post };

  for (const [relation, primary] of [
    ['tags', 'primary_tag'],
    ['authors', 'primary_author'],
  ] as const) {
    if (include.includes(relation)) {
      if (!(relation in post)) {
        throw new Error(`The Ghost snapshot has no ${relation} for post "${post.slug}"`);
      }
    } else {
      delete result[relation];
      delete result[primary];
    }
  }

  const fields = toList(options.fields);
  if (!fields.length) return result;
  return Object.fromEntries(
    Object.entries(result).filter(([key]) => fields.includes(key) || include.includes(key))
  ) as PostOrPage;
}

export const api = {
  posts: {
    async browse(options: BrowseOptions = {}): Promise<PostOrPage[]> {
      const { posts } = load();
      const matching = posts.filter((post) => matchesFilter(post, options.filter));
      const ordered = options.order ? [...matching].sort(compareBy(options.order)) : matching;
      const limited = options.limit === 'all' ? ordered : ordered.slice(0, options.limit ?? DEFAULT_LIMIT);
      return limited.map((post) => present(post, options));
    },

    async read(data: ReadOptions & { slug?: string; id?: string }, options: ReadOptions = {}): Promise<PostOrPage> {
      const { posts } = load();
      const post = posts.find((p) => (data.id ? p.id === data.id : p.slug === data.slug));
      if (!post) throw new Error(`Post not found: ${data.slug ?? data.id}`);
      return present(post, { ...data, ...options });
    },
  },

  tags: {
    async browse(options: { limit?: number | 'all' } = {}): Promise<Tag[]> {
      const { tags } = load();
      return options.limit === 'all' ? tags : tags.slice(0, options.limit ?? DEFAULT_LIMIT);
    },
  },
};
