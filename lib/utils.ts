/**Helper function to string together classnames */
export function classNames(...classes: Array<string | undefined | false>) {
  return classes.filter((cn) => !!cn).join(' ');
}

export const SITE_URL = 'https://www.june.so';

/** Social cards (og:image etc.) need absolute URLs; site-relative paths get the site origin. */
export function absoluteUrl(url?: string | null) {
  return url && url.startsWith('/') ? `${SITE_URL}${url}` : url;
}
