import tocbot from 'tocbot';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type TocProps = {
  selector?: string
  /**
   * CSS selectors of TOC elements on page. This is required if there is mobile and desktop TOC
   * elements on the page, because we can only initialize one instance of tocbot, and so we must know
   * for which TOC element to initialize tocbot
   */
  elements?: string[]
}

const isElementVisible = (el) => {
  if (!el) return false;
  
  const style = window.getComputedStyle(el);
  if (style?.display === 'flex' || style?.display === 'block') {
    return true;
  }

  return false;
};

export const Toc = ( { selector = '.toc', elements = [] }: TocProps) => {

  const router = useRouter();

  useEffect(() => {
    elements.map((tocElementSelector) => {
      const tocElement = document.querySelector(tocElementSelector);
      const isVisible = isElementVisible(tocElement);
      if(isVisible) {
        tocbot.init({
          tocSelector: tocElementSelector,
          contentSelector: '.post-body',
          headingSelector: 'h1, h2, h3, h4',
        });
      }
    });
  
    return () => { tocbot.destroy() };
  }, []);

  useEffect(() => {
    tocbot.refresh();
  }, [router])

  return null;  
};
