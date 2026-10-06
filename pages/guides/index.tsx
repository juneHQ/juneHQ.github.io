import Head from "next/head";
import { getGuides } from "guides/lib/getGuides";
import { CloudsBackground } from "components/resources/clouds-background";
import { ArticlePreviewCard } from "components/resources/article-preview-card";
import { defaultPx } from "components/core/utils/default-container-px";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { Hero } from "components/content/hero";
import { Box, Container, Divider, SimpleGrid } from "@chakra-ui/react";

const IndexPage = (props) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>June - Guides</title>
      <meta name="title" content="June - Guides" />
      <link rel="canonical" href="https://www.june.so/guides" />
      <meta name="description" content="Helping you leverage your product usage data." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://june.so/guides" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="June - Guides" />
      <meta property="og:description" content="Helping you leverage your product usage data." />
      <meta property="og:image" content="https://june.so/social.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image:src" content="https://june.so/social.png" />
      <meta name="twitter:creator" content="@JuneDotSo" />
      <meta property="twitter:image" content="https://june.so/social.png" />
      <meta property="twitter:url" content="https://june.so/" />
      <meta property="twitter:title" content="June - Guides" />
      <meta property="twitter:description" content="Helping you leverage your product usage data." />
    </Head>
    <CloudsBackground />
    <Navbar activeHref="/guides" />
    <Box position="absolute" zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
      <Container maxW="landingMax" px={defaultPx(32)} mt={[86, 86, 140]} {...props._wrapper}>
        <Hero title="June Guides" subtitle="How to best use your product data" /> 
        <Divider my={16} />
        <SimpleGrid columns={[1, 1, 2, 3, 3]} gap={[2, 2, 2, 2, 4]}>
          {props.posts.map((post) => (
            <ArticlePreviewCard post={post} key={post.id} />
          ))}
        </SimpleGrid>
      </Container>
      <NewFooter hideCTA={true} />
    </Box>
  </>
);

export async function getStaticProps(context) {
  const posts = await getGuides();
  console.log(posts);
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
