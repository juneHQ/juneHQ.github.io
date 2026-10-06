// Builds the docs search index, public/docs/search-index.json, from pages/docs/**/*.mdx.
//
// The search modal (components/docs/search) used to query Algolia; it now loads this file and
// searches it in the browser (components/docs/search/searchClient.js). The docs are frozen, so
// the generated file is committed. After editing a docs page, regenerate it with:
//
//   cd website && node bin/build-search.mjs
//
// Every paragraph that sits under a heading becomes one record:
//   { objectID, absoluteUrl, location, heading: 'Page heading > Section heading', text }
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import mdx from 'remark-mdx';
import searchable from 'remark-mdx-searchable';

const OUTPUT = path.join(path.resolve(), 'public/docs/search-index.json');

function slugify(s, separator = '-') {
  return s
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .trim()
    .replace(/\s+/g, separator);
}

// The id the rendered heading gets. MdxLayout renders `#` and `##` with Title and Subtitle from
// components/docs/Blocks.js, which set `id={slugify(children)}` (children being the heading's
// MDX children: a string for a plain-text heading). Deeper headings get no id.
function headingId(node) {
  if (node.depth > 2) return null;
  const children = node.children.map((child) => (child.type === 'text' ? child.value : {}));
  return slugify(children.length === 1 ? children[0] : children);
}

// Runs after remark-mdx-searchable and gives each of its records (one per paragraph, in document
// order) the anchor of the closest heading above it that has an id.
function anchors() {
  return (tree, file) => {
    const locations = [];
    let anchor = '';
    const walk = (node) => {
      if (node.type === 'heading') anchor = headingId(node) ?? anchor;
      if (node.type === 'paragraph') locations.push(anchor ? `#${anchor}` : '');
      (node.children ?? []).forEach(walk);
    };
    walk(tree);
    if (locations.length !== file.data.length) throw new Error(`${file.path}: paragraphs out of sync.`);
    file.data.forEach((record, i) => {
      record.location = locations[i];
    });
  };
}

async function walkDir(directory) {
  let result = [];
  const files = (await fs.promises.readdir(directory)).sort();
  for (const file of files) {
    const absolutePath = path.join(directory, file);
    const stats = await fs.promises.stat(absolutePath);
    if (stats.isDirectory()) {
      result = [...result, ...(await walkDir(absolutePath))];
    } else if (absolutePath.endsWith('.mdx')) {
      const data = await fs.promises.readFile(absolutePath, 'utf-8');
      const metaMatch = data.match(/export const meta = \{(.*?)\};/s);
      const metaString = metaMatch && metaMatch[1];
      const meta = {};
      if (metaString) {
        const metaKeyValueMatch = metaString.match(/(.*?): '(.*?)'/g);
        metaKeyValueMatch.forEach((kv) => {
          const [key, value] = kv.split(': ').map((v) => v.replace(/['"]/g, '').trim());
          meta[key] = value;
        });
      }
      const { data: parsed } = remark()
        .use(mdx)
        .use(searchable)
        .use(anchors)
        .processSync({ path: absolutePath, value: data });
      const absoluteUrl = absolutePath.split('pages/')[1].replace('.mdx', '');
      result = [
        ...result,
        ...parsed.map((p) => ({
          ...p,
          absoluteUrl,
          heading: p.heading !== null ? `${meta.heading} > ${p.heading}` : null,
        })),
      ];
    }
  }
  return result;
}

// Docs page URLs in the order of the docs menu, so that equally relevant results follow it.
async function getMenuOrder() {
  const menu = await fs.promises.readFile(path.join(path.resolve(), 'components/docs/Menu.js'), 'utf-8');
  return [...menu.matchAll(/path: '\/(docs\/[^']*)'/g)].map((match) => match[1]);
}

async function getIndexables() {
  const directory = path.join(path.resolve(), 'pages/docs');
  const result = await walkDir(directory);
  const menuOrder = await getMenuOrder();
  const menuPosition = (url) => (menuOrder.includes(url) ? menuOrder.indexOf(url) : menuOrder.length);

  return (
    result
      // Sort pages like the menu (the sort is stable: paragraphs stay in document order).
      .sort((a, b) => menuPosition(a.absoluteUrl) - menuPosition(b.absoluteUrl))
      // Filter out indexables without a parent heading, and empty paragraphs.
      .filter((obj) => obj.heading !== null && obj.text.trim() !== '')
      // Add unique IDs: a section usually has several paragraphs.
      .map(({ absoluteUrl, location, heading, text }, i) => ({
        objectID: `${absoluteUrl}${location}-${i}`,
        absoluteUrl,
        location,
        heading,
        text: text.trim(),
      }))
  );
}

async function main() {
  const indexables = await getIndexables();

  await fs.promises.writeFile(OUTPUT, `${JSON.stringify(indexables, null, 2)}\n`);

  console.log(`🎉 Indexed ${indexables.length} items in ${path.relative(path.resolve(), OUTPUT)}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
