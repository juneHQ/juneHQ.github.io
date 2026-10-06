export const openExternalUrl = (url: string, options?: { newTab?: boolean }) => {
  window.open(url, options?.newTab ? '_blank' : '_self', 'noopener,noreferrer');
};
