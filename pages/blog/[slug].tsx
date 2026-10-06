import Head from "next/head";
import { absoluteUrl } from "lib/utils";
import { getRelatedRecentPosts } from "lib/get-related-recent-posts";
import { getRelatedPosts } from "lib/get-related-posts";
import { getRecentPosts } from "lib/get-recent-posts";
import { RelatedPosts } from "components/resources/related-posts";
import { DateDisplay } from "components/resources/date-display";
import { CloudsBackground } from "components/resources/clouds-background";
import { ArticleSidebar } from "components/resources/article-sidebar";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { Toc } from "components/core/design-system/components/Toc";
import { generateTableOfContents, TOCItem } from "blog/lib/toc";
import { getSinglePost } from "blog/lib/getSinglePost";
import { getPosts } from "blog/lib/getPosts";
import { formatPostHtml } from "blog/lib/formatPostHtml";
import { PostOrPage } from "@tryghost/content-api";
import { Box } from "@chakra-ui/react";

const PostPage = (props: {
  postHtml: string;
  post: PostOrPage;
  relatedPosts: PostOrPage[];
  toc: TOCItem[];
  recentPosts: PostOrPage[];
  recentRelatedPosts: PostOrPage[];
}) => {

  const { post, relatedPosts, postHtml, toc, recentPosts, recentRelatedPosts } = props;

  const author = post.authors[0];
  const canonical = `https://www.june.so/blog/${post.slug}`;
  const hideFeatureImage = Boolean(post.tags.some((tag) => tag.name === 'hide-featured-image'));
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        <title>{post.meta_title ? post.meta_title : post.title}</title>
        <meta name="title" content={post.meta_title ? post.meta_title : post.title} />
        <meta name="description" content={post.meta_description ? post.meta_description : post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://june.so/blog/${post.slug}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={post.meta_title ? post.meta_title : post.title} />
        <meta property="og:description" content={post.meta_description ? post.meta_description : post.excerpt} />
        <meta property="og:image" content={absoluteUrl(post.og_image ? post.og_image : post.feature_image)} />
        <meta property="article:published_time" content={post.published_at}></meta>
        <meta property="article:modified_time" content={post.updated_at}></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:src" content={absoluteUrl(post.og_image ? post.og_image : post.feature_image)} />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta property="twitter:image" content={absoluteUrl(post.og_image ? post.og_image : post.feature_image)} />
        <meta property="twitter:url" content={`https://june.so/blog/${post.slug}`} />
        <meta property="twitter:title" content={post.meta_title ? post.meta_title : post.title} />
        <meta property="twitter:description" content={post.meta_description ? post.meta_description : post.excerpt} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={author.name} />
      </Head>
      <CloudsBackground />
      <Navbar hideGradient={true} />
      <div className="absolute w-full max-w-[100vw]">
        {/* A sticky green box at the top of the page */}
        <main className="w-full px-6 box-border font-hero">
          <>
            <Box>
              <div>
                <div className="flex justify-center w-full max-w-[100vw]">
                  <div className="grid xl:grid-cols-[2fr_1fr] xl:grid-rows-[auto_auto] md:gap-x-[54px] md:gap-y-10 mt-24">
                    <div className="w-full col-span-1 row-span-1 gap xl:max-w-3xl">
                      {!hideFeatureImage && post.feature_image ? (
                        /* eslint-disable */
                        <img src={post.feature_image} alt={post.feature_image_alt} />
                      ) : /* eslint-enable */
                      null}
                      <ArticleSidebar
                        post={post}
                        className="xl:hidden"
                        sticky={false}
                        toc={toc}
                        tocId="toc-mobile"
                        recentPosts={recentPosts}
                        recentRelatedPosts={recentRelatedPosts}
                      />

                      <article>
                        <DateDisplay date={post.published_at} color="gray-900" className="mt-12" />
                        <h1 className="font-black text-4xl md:text-6xl text-primary mb-8 mt-6">{post.title}</h1>
                        <div className="post-body" dangerouslySetInnerHTML={{ __html: postHtml }} />
                      </article>
                    </div>
                    <div className="hidden xl:block xl:relative w-full h-full">
                      <ArticleSidebar
                        post={post}
                        className="hidden xl:block w-full col-span-1 row-span-1"
                        toc={toc}
                        tocId="toc-desktop"
                        recentPosts={recentPosts}
                        recentRelatedPosts={recentRelatedPosts}
                      />
                    </div>
                    <RelatedPosts slug={post.slug} posts={relatedPosts} className="col-span-1 xl:col-span-1 row-span-1" />
                    <div className="hidden xl:block col-span-1 row-span-1"></div>
                  </div>
                </div>
              </div>
            </Box>
          </>
        </main>
        <NewFooter className="overflow-y-hidden" />
        {/* 
          Need to create 2 Tocbot components because there are 2 tables - 1 for
          mobile and 1 for desktop. Tocbot can only manage 1 toc per instance.
         */}
        <Toc elements={['#toc-mobile', '#toc-desktop']} />
        {/* <Toc selector='#toc-mobile'/> */}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts
    ? posts.map((post) => ({
        params: { slug: post.slug },
      }))
    : [];

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const relatedPosts = await getRelatedPosts(post, 5);
  const recentPosts = await getRecentPosts();
  const recentRelatedPosts = await getRelatedRecentPosts(post);
  const postHtml = post.html ? formatPostHtml(post.html) : '';
  const toc = generateTableOfContents(postHtml);
  return {
    props: { post, relatedPosts, postHtml, toc, recentPosts, recentRelatedPosts },
  };
}

export default PostPage;
