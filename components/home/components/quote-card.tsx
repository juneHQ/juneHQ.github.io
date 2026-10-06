import { Avatar, Box, Flex, FlexProps, Text, VStack } from '@chakra-ui/react';
import { NextResponsiveImage } from '../../core/next-responsive-image';

export type QuoteCardProps =
  | {
      type: 'titled';
      color: string;
      title: string;
      desc: string;
      logo: React.ReactNode;
    }
  | {
      type: 'person';
      desc: string;
      avatar: string;
      author: string;
      role: string;
      logo: React.ReactNode;
    };

function getColor(color: string) {
  switch (color) {
    case 'dark':
      return 'landing.almostBlack.500';
    case 'primary':
      return 'primary';
    default:
      return 'white';
  }
}

export const QuoteCard = (props: QuoteCardProps & { style?: FlexProps }) => {
  return (
    <Flex
      w={[330]}
      h="auto"
      sx={{ aspectRatio: '1' }}
      flexDir="column"
      align="center"
      justify="center"
      p={[6]}
      bg={props.type === 'person' ? 'white' : getColor(props.color)}
      borderRadius={['16px']}
      boxShadow=" 0px 0px 4px rgba(0, 0, 0, 0.2)"
      {...props.style}
    >
      {props.type === 'titled' ? (
        <Flex flexDir="column" align="center" justify="space-between" flex="1">
          <VStack spacing={1}>
            <Text lineHeight="shorter" fontSize="7xl" fontWeight="bold" fontFamily="landingHeading" color="white">
              {props.title}
            </Text>
            <Text textAlign="center" fontStyle="italic" color="white">
              {props.desc}
            </Text>
          </VStack>
          {props.logo}
        </Flex>
      ) : (
        <>
          <Text textAlign="center" fontStyle="italic" color="#000">
            {props.desc}
          </Text>
          <Box mt="6" />
          <Avatar src={props.avatar} boxSize={['80px']} />
          <Box mt="4" />
          <Text color="#000">
            {props.author}, {props.role} at
          </Text>
          {props.logo}
        </>
      )}
    </Flex>
  );
};
