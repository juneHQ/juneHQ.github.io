import Link from "next/link";
import { absoluteUrl } from "lib/utils";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCustomerStories, getCustomerStory } from "lib/customer-story";
import { CustomerStoryNavigationalButton } from "components/customer-stories/customer-story-navigation-button";
import { defaultPx } from "components/core/utils/default-container-px";
import { TryJuneBanner } from "components/core/try-june-banner";
import { pageStyles } from "components/core/page-styles";
import { Navbar } from "components/core/navbar/navbar";
import { Footer } from "components/core/footer/footer";
import { PostOrPage } from "@tryghost/content-api";
import { Box, Container, Heading, HStack, Image } from "@chakra-ui/react";

interface Props {
  currentStory: PostOrPage;
  previousStory: PostOrPage;
  nextStory: PostOrPage;
}

/**
 * This component is using CSS styling for the story's content.
 * It is imported in `_app.js`: `import 'styles/customer-story.css';`
 */
const CustomerStory = (props: Props) => {
  const canonical = `https://www.june.so/customer-stories/${props.currentStory.slug}`;


  return (
    <>
      <Head>
        <title>{props.currentStory.meta_title ? props.currentStory.meta_title : `Customer Story - ${props.currentStory.title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://www.june.so/customer-stories/${props.currentStory.slug}`} />
        <meta name="title" content={`Customer Story - ${props.currentStory.title}`} />
        <meta
          name="description"
          content={
            props.currentStory.meta_description
              ? props.currentStory.meta_description
              : ` ${props.currentStory.title}. Learn about ${props.currentStory.slug}'s challenges and how June helped to get to a solution`
          }
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://june.so/customer-stories/${props.currentStory.slug}`} />
        <meta property="og:title" content={`Customer Story: ${props.currentStory.title}`} />
        <meta
          property="og:description"
          content={
            props.currentStory.meta_description
              ? props.currentStory.meta_description
              : `${props.currentStory.title}. Insights into their strategy and results.`
          }
        />
        <meta
          property="og:image"
          content={absoluteUrl(props.currentStory.og_image ? props.currentStory.og_image : props.currentStory.feature_image)}
        />
        <meta property="twitter:url" content={`https://june.so/customer-stories/${props.currentStory.slug}`} />
        <meta property="twitter:title" content={`Customer Story: ${props.currentStory.title}`} />
        <meta property="article:published_time" content={props.currentStory.published_at} />
        <meta property="article:modified_time" content={props.currentStory.updated_at} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content={absoluteUrl(props.currentStory.og_image ? props.currentStory.og_image : props.currentStory.feature_image)}
        />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta
          property="twitter:description"
          content={
            props.currentStory.meta_description
              ? props.currentStory.meta_description
              : `${props.currentStory.title}. More about their challenges and results.`
          }
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={props.currentStory.authors ? props.currentStory.author : 'June Team'} />
      </Head>

      <Navbar />
      <Box position="absolute" w="100%" maxW="100vw" zIndex="docked">
        <Container maxW="5xl" pl={defaultPx(36)} pr={defaultPx('132px')}>
          <Box mt={[86, 86, 116]}>
            <article>
              <Heading as="h1" fontSize={['4xl', '3xl', '3xl']} fontWeight="bold" color="landing.black">
                {props.currentStory.title}
              </Heading>
              <Box maxW="2xl">
                <div
                  className="post-body customer-story-body"
                  dangerouslySetInnerHTML={{ __html: props.currentStory.html }}
                />
              </Box>
              {/* Footer with navigation between customer stories */}
              <Box my={12} w="full" h="1px" background="gray.100" />
              <HStack align="start" justify="space-between">
                {/* Navigational button (Back) */}
                {props.previousStory ? (
                  <Link href={`/customer-stories/${props.previousStory.slug}`} passHref>
                    <CustomerStoryNavigationalButton
                      type="previous"
                      title={props.previousStory.title}
                      boxIcon={<Image src={props.previousStory.feature_image} alt={props.previousStory.title} />}
                    />
                  </Link>
                ) : (
                  <Box />
                )}

                {/* Navigational button (Next) */}
                {props.nextStory && (
                  <Link href={`/customer-stories/${props.nextStory.slug}`} passHref>
                    <CustomerStoryNavigationalButton
                      type="next"
                      title={props.nextStory.title}
                      boxIcon={<Image src={props.nextStory.feature_image} alt={props.nextStory.title} />}
                    />
                  </Link>
                )}
              </HStack>
            </article>
          </Box>
        </Container>
        <TryJuneBanner _wrapper={{ pb: 4, mb: -4, overflow: 'hidden', ...pageStyles.middleSection }} />
        <Footer _wrapper={pageStyles.lastSection} />
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await getCustomerStories();

  return {
    paths: stories.map((story) => ({ params: { slug: story.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const stories = await getCustomerStories();
  const currentStory = await getCustomerStory(params.slug as string);
  const currentStoryIndex = stories.findIndex(({ slug }) => slug === currentStory.slug);
  const previousStory = stories[currentStoryIndex - 1] || null;
  const nextStory = stories[currentStoryIndex + 1] || null;

  return {
    props: { currentStory, previousStory, nextStory },
  };
};

export default CustomerStory;
