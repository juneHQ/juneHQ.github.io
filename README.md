The june.so marketing website: a [Next.js](https://nextjs.org/) site exported as static HTML and hosted on GitHub Pages.

## Getting Started

Install dependencies (Node version in `.nvmrc`):

```bash
yarn
```

Run the development server on [http://localhost:3002](http://localhost:3002):

```bash
yarn dev
```

## Building and deploying

```bash
yarn build
```

builds the whole site into `out/`:

1. `next build && next export`: every page is pre-rendered to HTML. There is no server at runtime, so pages can't use `getServerSideProps`, API routes, or Next.js image optimization (`images.unoptimized` is on).
2. `next-sitemap` writes `sitemap.xml` and `robots.txt` into `out/`.
3. `bin/postexport.mjs` turns every entry of `redirects.js` into a static redirect page. It also makes paths that are both a page and a directory (`blog.html` + `blog/`) work on GitHub Pages. Finally, it fails the build if a page still references images on Ghost or its S3 mirror.

Preview the export with `yarn start`, which serves `out/` and resolves `/foo` to `foo.html` like GitHub Pages does.

Pushing to `main` deploys through `.github/workflows/pages.yml`. The site must be served from a domain root (this repository is the organization's `juneHQ.github.io` site, or a custom domain), not from `<org>.github.io/<repo>/`, because assets use root-relative paths.

### Moving www.june.so to GitHub Pages

1. Verify `june.so` for the organization (Organization settings → Pages → Add a domain → TXT record), so no other account can claim it.
2. Repository Settings → Pages: set Source to "GitHub Actions", run the workflow once, then set the custom domain to `www.june.so`. Actions deployments take the domain from this setting; `public/CNAME` is only used by branch-based deployments.
3. In Cloudflare (DNS only, not proxied), lower the TTL ahead of time, then point `www` (CNAME → `junehq.github.io`) and the `june.so` apex (A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; AAAA: `2606:50c0:8000::153` to `2606:50c0:8003::153`) at GitHub Pages. With both pointed there, Pages redirects `june.so` to `www.june.so`.
4. When the certificate is issued (Settings → Pages), enable "Enforce HTTPS". june.so has sent a two-year HSTS header, so returning visitors can't fall back to HTTP until then; keep this window short.
5. Disconnect the Vercel project.

## Blog, guides and customer stories

These were written in Ghost (june.ghost.io), which has been shut down. The content is frozen in the repo:

- `content/ghost/posts.json` and `tags.json` hold every post and tag the site ever rendered. `blog/lib/api.ts` serves them through the same interface as the Ghost Content API client the pages used to call.
- `public/blog-assets/` has a local copy of every image those posts use. `content/ghost/assets.json` maps each original URL to its copy, and `blog/lib/assets.ts` rewrites the content to use them at build time.
- `bin/archive/` holds the one-time tools that produced the above: capturing the last Vercel deployment, rebuilding the Ghost data from it, and downloading images from the S3 mirror or the Wayback Machine. They are kept for reference and don't need to run again.

## Documentation Pages

The documentation pages are a sub-website within the website codebase, written in MDX under `pages/docs`.

### Search

Search runs entirely in the browser over `public/docs/search-index.json`, using the InstantSearch UI with a local search client (`components/docs/search/searchClient.js`). The docs are frozen, so the index is committed. Regenerate it with `node bin/build-search.mjs` if a docs page changes.

### Components

All components for the SDK docs are inside `components/Docs` .

- `search/`: the search modal and its local search client.
- `widgets/Widget.js & adjacent files`: contains provided components for every included widget, like the state generator.
- `Blocks.js`: standardized design system for the docs pages.
- `CodeBlock.js`: specialized codeblock with lightweight highlighting, customized June theme.
- `Layout.js`: Layout, SEO for the Docs subpage.
- `icons.js`: svg icons

### Updating the Documentation

The documentation pages are written in MDX, which is a superset of Markdown. This should be familiar to edit.

The only special bit would be the ScriptGenerator code block, which works differently.

### Documentation Skeleton

This is a basic MDX page for the documentation.

```jsx
import MdxLayout from '../../components/docs/MdxLayout';

export const meta = {
  heading: 'License',
  subheading: 'Legal information related to the June SDK',
};

The June SDK is a fork of Segment's Analytics.js, which is licensed under MIT.

export default ({ children }) => <MdxLayout {...meta}>{children}</MdxLayout>;
```
