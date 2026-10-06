import twitter from 'twitter-text';
import React from 'react';
import NextImage from 'next/image';
import moment from 'moment';
import parse from 'html-react-parser';
import { Box, BoxProps, Flex, HStack, Text, VStack } from '@chakra-ui/react';

interface Props {
  avatarSrc?: string;
  name: string;
  username: string;
  tweet: string;
  tweetId?: string;
  tweetDate: string;
  hasVerifiedBadge: boolean;
  link?: string;
  _wrapper?: BoxProps;
}

const getLinkToTweet = (args: { username: string; tweetId: string }) => {
  return `https://twitter.com/${args.username}/status/${args.tweetId}`;
};

const getParsedTweet = (tweet: string) => {
  const replaced = tweet.replace(/\n/g, '<br />');
  const linked = twitter.autoLink(replaced, { usernameIncludeSymbol: true });

  return parse(linked);
};

const styles = {
  avatar: {
    borderRadius: 24,
  },
};

export function TweetCard(props: Props) {
  const tweet = getParsedTweet(props.tweet);

  return (
    <Box
      href={props.link ? props.link : getLinkToTweet({ username: props.username, tweetId: props.tweetId })}
      p={[6]}
      as="a"
      target="_blank"
      bg="white"
      borderWidth="1px"
      borderColor="landing.borderGray"
      borderRadius="lg"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.1)"
      cursor="pointer"
      _hover={{
        borderWidth: 2, // px
        borderColor: 'purple.300',
        bg: 'purple.50',
        p: 'calc(24px - 1px)',
        shadow: '0px 2px 4px rgba(104, 104, 247, 0.2)',
      }}
      {...props._wrapper}
    >
      {/* VStack has no spacing here because <Spacer /> is included in it,
          and we don't want more space where <Spacer /> is
      */}
      <VStack align="start">
        <HStack spacing={4}>
          <NextImage src={props.avatarSrc} alt={props.name} width={48} height={48} style={styles.avatar} />
          <Box>
            <Flex align={'center'} gap={1}>
              <Text fontSize={'md'} color="landing.black" fontWeight="semibold" lineHeight={1.2}>
                {props.name}
              </Text>
              {props.hasVerifiedBadge && (
                <Flex align={'center'}>
                  <NextImage src="/icons/verified-badge.svg" alt="verified badge" width={16} height={16} />
                </Flex>
              )}
            </Flex>
            <Text pt={1} fontSize={'md'} color="#8E8E8E" lineHeight={1.2}>
              @{props.username}
            </Text>
          </Box>
        </HStack>
        <Text
          pt={2}
          fontSize={'md'}
          color="landing.black"
          lineHeight={1.5}
          overflowY="clip"
          sx={{ a: { color: '#1d9bf0' } }}
        >
          {tweet}
        </Text>
        <Text color="#8E8E8E" fontSize="sm" fontWeight="medium" lineHeight={1.185}>
          {moment(props.tweetDate).format('HH:MM A • MMMM DD, YYYY')}
        </Text>
      </VStack>
    </Box>
  );
}
