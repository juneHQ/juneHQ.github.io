import { JSDOM } from 'jsdom';

/**
 * Generate a Table of Contents from the HTML content
 * @param htmlContent HTML content of the blog post
 * @returns Array of {id, title} of the headings
 */

export interface TOCItem {
  id: string;
  title: string;
}

export function generateTableOfContents(htmlContent: string): TOCItem[] {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  const toc = Array.from(headings).map((heading, index) => {
    const element = heading as HTMLElement;
    const id = element.id || `heading-${index}`;
    element.id = id;
    return {
      id,
      title: element.textContent,
    };
  });

  return toc;
}