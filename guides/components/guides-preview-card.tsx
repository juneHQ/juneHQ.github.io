import Link from 'next/link';
import { Box, Image, HStack, Text, VStack, Heading, Avatar } from '@chakra-ui/react';
import moment from 'moment';

export const POST_CARD_WIDTH_PX = 384;
export const MEDIUM_POST_CARD_WIDTH_PX = 342;
export const SMALL_POST_CARD_WIDTH_PX = 310;

export const GuidePreviewCard = ({ post }) => {
  const publishedAt = moment.utc(post.published_at).format('MMM DD, YYYY');
  const author = post.authors[0];
  return (
    <Link href={`/guides/${post.slug}`} key={post.id}>
      <a>
        <VStack
          w={[
            'full',
            'full',
            'full',
            SMALL_POST_CARD_WIDTH_PX + 'px',
            MEDIUM_POST_CARD_WIDTH_PX + 'px',
            POST_CARD_WIDTH_PX + 'px',
          ]}
          borderRadius="md"
          borderWidth={1} // px
          borderColor="landing.borderGray"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05);"
          p={6}
          spacing={3}
          align="flex-start"
          _hover={{
            borderWidth: 2, // px
            borderColor: 'purple.300',
            bg: 'purple.50',
            // 1.5rem === original p, 1px === gained borderWidth
            p: 'calc(1.5rem - 1px)',
            shadow: '0px 2px 4px rgba(104, 104, 247, 0.2)',
          }}
          role="group"
        >
          <Image borderRadius={'md'} src={post.feature_image} />
          <Heading as="h3" size="2xl" color="landing.black" fontFamily="hero">
            {post.title}
          </Heading>
          <HStack spacing={2}></HStack>
        </VStack>
      </a>
    </Link>
  );
};
