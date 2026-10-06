import Head from "next/head";
import { getTopicTags } from "lib/get-topic-tags";
import { CloudsBackground } from "components/resources/clouds-background";
import { ArticlePreviewCard } from "components/resources/article-preview-card";
import { defaultPx } from "components/core/utils/default-container-px";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { Hero } from "components/content/hero";
import { getPosts } from "blog/lib/getPosts";
import { Tag } from "@tryghost/content-api";
import { Box, Container, Divider, SimpleGrid } from "@chakra-ui/react";

interface TopicPageProps {
  topic: Tag;
  posts: any[]; // Replace 'any' with your Post type if available
}

const TopicPage: React.FC<TopicPageProps> = ({ topic, posts }) => {
  const topicSlug = topic.slug ? topic.slug.replace('topic_', '') : '';
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>June - {topic.name}</title>
        <meta name="title" content={topic.meta_title || `June - ${topic.name}`} />
        <link rel="canonical" href={`https://www.june.so/blog/topic/${topicSlug}`} />
        <meta name="description" content={topic.meta_description || topic.description || `Everything you need to know about ${topic.name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.june.so/blog/topic/${topicSlug}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={topic.meta_title || `June - ${topic.name}`} />
        <meta property="og:description" content={topic.meta_description || topic.description || `Everything you need to know about ${topic.name}`} />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:src" content="https://june.so/social.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta property="twitter:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content="https://june.so/" />
        <meta property="twitter:title" content={topic.meta_title || `June - ${topic.name}`} />
        <meta property="twitter:description" content={topic.meta_description || topic.description || `Everything you need to know about ${topic.name}`} />
      </Head>
      <CloudsBackground />
      <Navbar activeHref="/blog" />
    <Box position="absolute" zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
      <Container maxW="landingMax" px={defaultPx(32)} mt={[86, 86, 140]}>
        <Hero 
          title={topic.name} 
          subtitle={topic.description || `Everything you need to know about ${topic.name}`} 
        />
        <Divider my={16} />
        <SimpleGrid columns={[1, 1, 2, 3, 3]} gap={[2, 2, 2, 2, 4]}>
          {posts.map((post) => (
            <ArticlePreviewCard post={post} key={post.id} />
          ))}
        </SimpleGrid>
      </Container>
      <NewFooter />
      </Box>
    </>
  );
};

export async function getStaticProps({ params }) {
  const tags = await getTopicTags();
  const topic = tags.find(tag => tag.slug === `topic_${params.slug}`);

  if (!topic) {
    return {
      notFound: true,
    };
  }

  const posts = await getPosts({
    filter: `tag:${topic.slug}`,
    include: ['tags', 'authors']
  });

  if (!posts || posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { 
      topic,
      posts 
    },
  };
}

export async function getStaticPaths() {
  const tags = await getTopicTags();
  
  const topicSlugs = tags
    .filter(tag => tag.slug.startsWith('topic_'))
    .map(tag => tag.slug.replace('topic_', ''));

  const paths = topicSlugs.map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export default TopicPage;
