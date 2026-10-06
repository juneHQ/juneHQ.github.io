import Head from "next/head";
import { absoluteUrl } from "lib/utils";
import moment from "moment";
import { getSingleGuides } from "guides/lib/getSingleGuides";
import { getGuides } from "guides/lib/getGuides";
import { TryJuneBanner } from "components/core/try-june-banner";
import { pageStyles } from "components/core/page-styles";
import { Navbar } from "components/core/navbar/navbar";
import { Footer } from "components/core/footer/footer";
import { Toc } from "components/core/design-system/components/Toc";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { generateTableOfContents } from "blog/lib/toc";

const GuidePage = (props) => {
  const { post, toc } = props;
  const publishedAt = moment.utc(post.published_at).format('MMM DD, YYYY');
  const author = post.authors[0];
  const canonical = `https://www.june.so/guides/${post.slug}`;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        <title>{post.meta_title ? post.meta_title : post.title}</title>
        <meta name="title" content={post.meta_title ? post.meta_title : post.title} />
        <meta name="description" content={post.meta_description ? post.meta_description : post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://june.so/guides/${post.slug}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description ? post.meta_description : post.excerpt} />
        <meta property="og:image" content={absoluteUrl(post.og_image ? post.og_image : post.feature_image)} />
        <meta property="article:published_time" content={post.published_at}></meta>
        <meta property="article:modified_time" content={post.updated_at}></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:src" content={absoluteUrl(post.og_image ? post.og_image : post.feature_image)} />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta property="twitter:image" content={absoluteUrl(post.og_image ? post.og_image : post.feature_image)} />
        <meta property="twitter:url" content={`https://june.so/guides/${post.slug}`} />
        <meta property="twitter:title" content={post.meta_title ? post.meta_title : post.title} />
        <meta property="twitter:description" content={post.meta_description ? post.meta_description : post.excerpt} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={author.name} />
      </Head>
      <Navbar />
      <Box>
        {/* A sticky green box at the top of the page */}
        <Flex justify="center">
          <>
            <Box>
              <article>
                <Grid mt={[86, 86, 116]} gridTemplateColumns={['1fr', '1fr', '1fr', '250px minmax(10px, 1fr) 250px']}>
                  <Box></Box>
                  <Container maxW="2xl">
                    <Box my="6" />
                    <Heading as="h1" fontSize={'4xl'} fontWeight="black" color="gray.900">
                      {post.title}
                    </Heading>
                    <Box my="8" />
                    <HStack spacing={4}>
                      <Avatar size={'md'} name={author.name} src={author.profile_image} />
                      <VStack spacing={0} align="flex-start">
                        <Text fontSize={'lg'} color="gray.800" key={author.id}>
                          {author.name}
                        </Text>
                        <Text fontSize={['sm']} color="gray.800">
                          {publishedAt}
                        </Text>
                      </VStack>
                    </HStack>
                  </Container>
                  <Box></Box>
                </Grid>
                <Grid gridTemplateColumns={['1fr', '1fr', '1fr', '250px minmax(10px, 1fr) 250px']} gridGap={32}>
                  <Box
                    mt={6}
                    display={['none', 'none', 'none', 'block']}
                    alignSelf={'start'}
                    position="sticky"
                    top="5%"
                    left="0"
                    w={'250px'}
                    maxW="100vw"
                    overflow="hidden"
                  >
                    <Box px={2} fontSize="sm">
                      <Text mx={3} borderBottom={'1px solid'} borderColor="gray.400" mb={4} fontWeight={'bold'}>
                        Contents
                      </Text>
                      <div className="toc px-3" id="toc"></div>
                      <div className="hidden">
                        <nav>
                          <ol>
                            {toc.map((item) => (
                              <li key={item.id}>
                                <a href={`#${item.id}`}>{item.title}</a>
                              </li>
                            ))}
                          </ol>
                        </nav>
                      </div>
                       <Box 
                        mt={6}
                        borderRadius="md"
                        textAlign="center"
                        px={2}
                      >
                        <a 
                          href="https://cal.com/alberto-incisa/demo" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', width: '100%', display: 'block' }}
                        >
                          <Button 
                            bg="#151531"
                            color="white"
                            _hover={{ bg: "#1e1e45" }}
                            size="md"
                            width="100%"
                            py={5}
                            fontWeight="bold"
                          >
                            Book a call
                          </Button>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                  <Container maxW="2xl">
                    <div className="post-body lg:pt-8" dangerouslySetInnerHTML={{ __html: post.html }} />
                  </Container>
                </Grid>
              </article>
            </Box>
          </>
        </Flex>
        <TryJuneBanner _wrapper={pageStyles.middleSection} />
        <Footer _wrapper={pageStyles.lastSection} />
        <Toc elements={['#toc']} />
      </Box>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getGuides();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSingleGuides(context.params.slug) as any;
  const toc = generateTableOfContents(post.html);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, toc },
  };
}

export default GuidePage;
