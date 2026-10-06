/**
 * Resources page
 */

import { ContentType } from "types/enums";
import { useState } from "react";
// Core
import Head from "next/head";
// Lib
import { getResources } from "lib/resources/getResources";
import { useMetaDescriptions } from "lib/hooks/useMetaDescriptions";
import { ResourcesHeader } from "components/resources/resources-header";
import { CloudsBackground } from "components/resources/clouds-background";
import { ArticleGrid } from "components/resources/article-grid";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { PostsOrPages } from "@tryghost/content-api";

const IndexPage = (props: { posts: PostsOrPages }) => {
  const [filter, setFilter] = useState<ContentType>(ContentType.FEATURED);

  const filteredPosts = props.posts.filter((post) => {
    if (filter === ContentType.ALL) {
      return true;
    }

    if (filter === ContentType.FEATURED) {
      return post.featured;
    }

    const isOfType = post.tags.some((tag) => tag.name.toLowerCase() === filter.toLowerCase());

    return isOfType;
  });

  const metaDescription = useMetaDescriptions({ route: '/content' });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metaDescription.title}</title>
        <meta name="title" content={metaDescription.title} />
        <link rel="canonical" href={metaDescription.canonical} />
        <meta name="description" content={metaDescription.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/Resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metaDescription.title} />
        <meta property="og:description" content={metaDescription.description} />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:src" content="https://june.so/social.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta property="twitter:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content="https://june.so/" />
        <meta property="twitter:title" content={metaDescription.title} />
        <meta property="twitter:description" content={metaDescription.description} />
      </Head>
      <CloudsBackground />
      <Navbar hideGradient={true} />
      <div className="absolute w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-7xl px-4 xl:px-11 mt-32 mx-auto">
          <ResourcesHeader
            setFilter={setFilter}
            title="Resources"
            description="Our resources to help next-gen SaaS companies understand their users"
          />
          <ArticleGrid posts={filteredPosts} className="mt-0 lg:mt-20" />
        </div>
        <NewFooter hideCTA={true} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getResources();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default IndexPage;
