export interface PersonaConfig {
  /** Example: Founder */
  name: string;
  /** Text displayed on the footer */
  footerTitle: string;
  /** Example: Make sure you move the needle */
  title: string;
  /** Example: Understand how your business is doing. Get the relevant high level metrics for your business (Active Users, User Retention, etc) in two-click. */
  subtitle: string;
  /** Example: founder */
  route: string;
  /** Example: landing.founderAccent */
  accentColorScheme: string;
  /** Example: landing.founderAccent.500 */
  accentColor: string;
  /** Example: linear-gradient(129.77deg, #FEB5A4 16.97%, #F47D83 64.88%, #F987A9 94.21%) */
  gradient: string;
  /** Example: /home/personas/founders.mp4 */
  videoSrc: string | string[] | { src: string; type: string }[];
  /** Whether or not to hide this persona on the home page */
  isHiddenOnHome?: boolean;
  /** Holds the copy for individual persona page */
  pageCopy: {
    /** Example: For founders */
    subheader: string;
    /** Example: Build a fast-growing business */
    tagline: { value: string; highlighted?: boolean }[];
    /** Example: Get instant access to actionable metrics in 2-clicks. Engage your team around them.  */
    subtitle: string;
    /** Example: /personas/hero.png */
    heroScreenshotSrc: string;
    /** Example: ['/home/logo-wall/logo.png'] */
    companyLogoSrcs: string[];
    quote: {
      /** Example: "Thanks to June..." */
      text: string;
      /** Example: James Baker */
      author: string;
      /** Example: Head of Marketing at Qonto */
      authorTitle: string;
    };
    valuePropositions: {
      /** Example: Reach product-market fit */
      title: string;
      /** Example: Find out what makes your product sticky, focus on the right initiatives to grow your business . */
      subtitle: string;
      /** Example: /personas/screenshot.png */
      screenshotSrc: string;
    }[];
  };
}

export type PersonaPageCopy = PersonaConfig['pageCopy'];
