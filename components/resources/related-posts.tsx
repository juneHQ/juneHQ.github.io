import { useMetaDescriptions } from "lib/hooks/useMetaDescriptions";
// Core
import { PostOrPage } from "@tryghost/content-api";
import { ContinueReadingAccordion } from "./continue-reading-accordion";
import { BlogAccordion } from "./blog-accordion";

type RelatedPostsProps = {
  /**
   * Posts to display
   */
  posts: PostOrPage[];
  className?: string;
  slug: string;
};

/**
 * Related posts component. Should be used to display related posts for a given post
 */
export const RelatedPosts = ({ slug, posts, className = '' }: RelatedPostsProps) => {
  const metaDescription = useMetaDescriptions({ route: `/blog/${slug}` });
  return (
    <section className={className}>
      <ContinueReadingAccordion posts={posts} />
      {metaDescription && metaDescription.hasAccordion && (
        <BlogAccordion title={metaDescription.accordionTitle} body={metaDescription.accordionBody} />
      )}
    </section>
  );
};
