/**
 * Take June's web app (analytics.june.so, and its old host app.june.so, which redirects there),
 * which has been shut down, out of the frozen Ghost content without touching the archived data:
 *
 * - Live report embeds (an `<iframe>` on the app, alone in a Ghost html card) are replaced by a
 *   short note. Back-to-back embeds share one note.
 * - Sign-up calls to action are removed whole: Ghost button cards, image cards whose image (a
 *   "Sign up to June" button) links to the app, and headings that link to the app.
 * - Any other link to the app is unwrapped: its text stays, the link goes.
 * - Links elsewhere that only mention the app in a query parameter drop that parameter.
 *
 * A reference this misses fails the build rather than shipping a link to the dead app.
 */

const APP_HOST = 'analytics.june.so';
// The app's old host, which redirects to APP_HOST. It also appears as sample data in a code
// block, which is not a link and stays.
const OLD_APP_HOST = 'app.june.so';
/** An `href` / `src` value on the app, e.g. `https://analytics.june.so/start` or `https://app.june.so/start`. */
const APP_URL = String.raw`https?://(?:analytics|app)\.june\.so(?:[/?#][^"]*)?`;
const APP_REFERENCE = new RegExp(String.raw`(?:href|src)="${APP_URL}"`);

const EMBED_NOTE = '<p><em>This post embedded a live June report, which is no longer available.</em></p>';

const EMBED_CARD = String.raw`(?:<!--kg-card-begin: html-->\s*)?<iframe\b[^>]*\ssrc="${APP_URL}"[^>]*>\s*</iframe>(?:\s*<!--kg-card-end: html-->)?`;
const EMBEDS = new RegExp(String.raw`${EMBED_CARD}(?:\s*${EMBED_CARD})*`, 'g');
const APP_LINK_OPEN = String.raw`<a\b[^>]*\shref="${APP_URL}"[^>]*>`;
const BUTTON_CARD = new RegExp(
  String.raw`<div class="kg-card kg-button-card[^"]*">\s*${APP_LINK_OPEN}[^<]*</a>\s*</div>`,
  'g',
);
const IMAGE_CARD = new RegExp(
  String.raw`<figure class="kg-card kg-image-card[^"]*">\s*${APP_LINK_OPEN}\s*<img\b[^>]*>\s*</a>\s*</figure>`,
  'g',
);
const HEADING = new RegExp(String.raw`<h([1-6])\b[^>]*>(?:(?!</h\1>)[\s\S])*?${APP_LINK_OPEN}[\s\S]*?</h\1>`, 'g');
const LINK = new RegExp(String.raw`${APP_LINK_OPEN}([\s\S]*?)</a>`, 'g');
// e.g. `&amp;utm_referrer=https://analytics.june.so/...` in an Intercom link.
const QUERY_PARAM = /(\?|&amp;|&)[\w.-]+=https?:\/\/analytics\.june\.so[^&"'\s<>]*(&amp;|&)?/g;

function removeFromString(value: string) {
  if (!value.includes(APP_HOST) && !value.includes(OLD_APP_HOST)) return value;
  const result = value
    .replace(EMBEDS, EMBED_NOTE)
    .replace(BUTTON_CARD, '')
    .replace(IMAGE_CARD, '')
    .replace(HEADING, '')
    .replace(LINK, '$1')
    .replace(QUERY_PARAM, (_, before: string, after?: string) => (before === '?' ? (after ? '?' : '') : after ?? ''));
  const missed = result.includes(APP_HOST) ? result.indexOf(APP_HOST) : result.search(APP_REFERENCE);
  if (missed !== -1) {
    throw new Error(`Unhandled reference to the June app: "${result.slice(Math.max(0, missed - 100), missed + 100)}"`);
  }
  return result;
}

/** Deep-remove the app from every string in `value`. */
export function removeAppLinks<T>(value: T): T {
  if (typeof value === 'string') return removeFromString(value) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => removeAppLinks(v)) as unknown as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, removeAppLinks(v)])) as T;
  }
  return value;
}
