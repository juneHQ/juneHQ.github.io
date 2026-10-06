// Searches the docs in the browser, in place of Algolia. It implements the part of the Algolia
// client contract that <InstantSearch> uses: search(requests) resolves to { results }, with one
// Algolia-shaped response per request.
//
// The index is public/docs/search-index.json (built by bin/build-search.mjs), one record per
// paragraph: { objectID, absoluteUrl, location, heading, text }. It is fetched on the first query.

const INDEX_URL = '/docs/search-index.json';
// react-instantsearch-core's HIGHLIGHT_TAGS, which it sends with every request.
const HIGHLIGHT_PRE_TAG = '<ais-highlight-0000000000>';
const HIGHLIGHT_POST_TAG = '</ais-highlight-0000000000>';
const SEARCHABLE_ATTRIBUTES = ['heading', 'text'];

let recordsPromise = null;

function loadRecords() {
  if (!recordsPromise) {
    recordsPromise = fetch(INDEX_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Could not load the docs search index (HTTP ${response.status}).`);
        return response.json();
      })
      .catch((error) => {
        // Try again on the next query.
        recordsPromise = null;
        throw error;
      });
  }
  return recordsPromise;
}

// Query words are matched case-insensitively, anywhere in a word (so partial words match too).
function queryWords(query) {
  return [...new Set(query.toLowerCase().split(/[^a-z0-9_]+/).filter(Boolean))];
}

// Words only contain [a-z0-9_], so they need no escaping.
const wholeWord = (word) => new RegExp(`(^|[^a-z0-9_])${word}($|[^a-z0-9_])`, 'i');

function highlight(value, words, preTag, postTag) {
  const ranges = [];
  const matchedWords = words.filter((word) => {
    const before = ranges.length;
    for (const match of value.matchAll(new RegExp(word, 'gi'))) {
      ranges.push([match.index, match.index + match[0].length]);
    }
    return ranges.length > before;
  });

  const merged = [];
  ranges
    .sort((a, b) => a[0] - b[0])
    .forEach(([start, end]) => {
      const last = merged[merged.length - 1];
      if (last && start <= last[1]) last[1] = Math.max(last[1], end);
      else merged.push([start, end]);
    });

  let highlighted = '';
  let position = 0;
  merged.forEach(([start, end]) => {
    highlighted += `${value.slice(position, start)}${preTag}${value.slice(start, end)}${postTag}`;
    position = end;
  });
  highlighted += value.slice(position);

  return {
    value: highlighted,
    matchLevel: matchedWords.length === 0 ? 'none' : matchedWords.length === words.length ? 'full' : 'partial',
    matchedWords,
    fullyHighlighted: merged.length === 1 && merged[0][0] === 0 && merged[0][1] === value.length,
  };
}

// Every query word must appear in the heading or the text. Returns a ranking, compared in order:
// words found in the heading (so heading matches rank above text matches), words found in the
// page part of the heading ('Page > Section'), whether the query appears as typed, words matching
// a whole word, and words also found in the text.
function rank(record, query, words) {
  const heading = record.heading.toLowerCase();
  const page = heading.split(' > ')[0];
  const text = record.text.toLowerCase();
  let inHeading = 0;
  let inPage = 0;
  let inText = 0;
  let exact = 0;
  for (const word of words) {
    const isInHeading = heading.includes(word);
    const isInText = text.includes(word);
    if (!isInHeading && !isInText) return null;
    inHeading += Number(isInHeading);
    inPage += Number(page.includes(word));
    inText += Number(isInText);
    exact += Number(wholeWord(word).test(heading) || wholeWord(word).test(text));
  }
  const phrase = words.length > 1 && (heading.includes(query) || text.includes(query));
  return [inHeading, inPage, Number(phrase), exact, inText];
}

function compareRanks(a, b) {
  for (let i = 0; i < a.rank.length; i++) {
    if (a.rank[i] !== b.rank[i]) return b.rank[i] - a.rank[i];
  }
  return a.position - b.position;
}

function serializeParams(params) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(typeof value === 'string' ? value : JSON.stringify(value))}`)
    .join('&');
}

export function searchRecords(records, { indexName, params = {} }) {
  const startedAt = Date.now();
  const {
    query = '',
    page = 0,
    hitsPerPage = 20,
    highlightPreTag = HIGHLIGHT_PRE_TAG,
    highlightPostTag = HIGHLIGHT_POST_TAG,
  } = params;
  const normalizedQuery = query.toLowerCase().trim().replace(/\s+/g, ' ');
  const words = queryWords(query);

  const matches = words.length
    ? records
        .map((record, position) => ({ record, position, rank: rank(record, normalizedQuery, words) }))
        .filter((match) => match.rank !== null)
        .sort(compareRanks)
    : [];

  // A section has several paragraphs: keep its best match only, like Algolia's `distinct`.
  const sections = new Set();
  const hits = [];
  matches.forEach(({ record }) => {
    const section = `${record.absoluteUrl}${record.location} ${record.heading}`;
    if (sections.has(section)) return;
    sections.add(section);
    hits.push({
      ...record,
      _highlightResult: Object.fromEntries(
        SEARCHABLE_ATTRIBUTES.map((attribute) => [
          attribute,
          highlight(record[attribute], words, highlightPreTag, highlightPostTag),
        ]),
      ),
    });
  });

  return {
    hits: hits.slice(page * hitsPerPage, (page + 1) * hitsPerPage),
    nbHits: hits.length,
    page,
    nbPages: Math.ceil(hits.length / hitsPerPage),
    hitsPerPage,
    processingTimeMS: Date.now() - startedAt,
    exhaustiveNbHits: true,
    query,
    params: serializeParams(params),
    index: indexName,
  };
}

const searchClient = {
  search(requests) {
    const hasQuery = requests.some(({ params }) => queryWords(params?.query ?? '').length > 0);
    // Empty queries (InstantSearch runs one on mount) get no hits, without loading the index.
    return (hasQuery ? loadRecords() : Promise.resolve([])).then((records) => ({
      results: requests.map((request) => searchRecords(records, request)),
    }));
  },
};

export default searchClient;
