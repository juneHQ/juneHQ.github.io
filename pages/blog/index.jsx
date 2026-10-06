import { Box, SimpleGrid, Container, Divider } from '@chakra-ui/react';
import { NewFooter } from 'components/core/footer/new-footer';
import { CloudsBackground } from "components/resources/clouds-background";
import { Navbar } from 'components/core/navbar/navbar';
import Head from 'next/head';
import { getPosts } from 'blog/lib/getPosts';
import { ArticlePreviewCard } from 'components/resources/article-preview-card';
import { defaultPx } from 'components/core/utils/default-container-px';
import { Hero } from 'components/content/hero';

const IndexPage = (props) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>June - Blog</title>
      <meta name="title" content="June - Blog" />
      <link rel="canonical" href="https://www.june.so/blog" />
      <meta name="description" content="Helping you build products that people love." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://june.so/blog" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="June - Blog" />
      <meta property="og:description" content="Helping you build products that people love." />
      <meta property="og:image" content="https://june.so/social.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image:src" content="https://june.so/social.png" />
      <meta name="twitter:creator" content="@JuneDotSo" />
      <meta property="twitter:image" content="https://june.so/social.png" />
      <meta property="twitter:url" content="https://june.so/" />
      <meta property="twitter:title" content="June - Blog" />
      <meta property="twitter:description" content="Helping you build products that people love." />
    </Head>
    <CloudsBackground />
    <Navbar activeHref="/blog" />
    <Box position="absolute" zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
      <Container maxW="landingMax" px={defaultPx(32)} mt={[86, 86, 140]} {...props._wrapper}>
        <Hero title="June Blog" subtitle="Updates from the June team" />
        <Divider my={16} />
        <SimpleGrid columns={[1, 1, 2, 3, 3]} gap={[2, 2, 2, 2, 4]}>
          {props.posts.map((post) => (
            <ArticlePreviewCard post={post} key={post.id} />
          ))}
        </SimpleGrid>
      </Container>
      <NewFooter />
    </Box>
  </>
);

export async function getStaticProps(context) {
  const posts = await getPosts();

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
