import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';

export const CustomerStoryNavigationalButton = (props: {
  type: 'previous' | 'next';
  title: string;
  boxIcon?: React.ReactNode;
  onClick?: () => void;
}) => {
  function renderBoxIcon() {
    return (
      <Flex
        boxSize={[14, '100px']}
        border="1px solid #E9ECEF"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
        borderRadius="8px"
        flexShrink={0}
        align="center"
        justify="center"
      >
        {props.boxIcon}
      </Flex>
    );
  }

  return (
    <HStack align="start" spacing={[2, 6]} cursor="pointer" onClick={props.onClick}>
      {props.type === 'previous' && renderBoxIcon()}
      <VStack spacing={0} align={props.type === 'previous' ? 'start' : 'end'}>
        <HStack py={[1, 2]}>
          {props.type === 'previous' && <ArrowBackIcon boxSize={[4, 6]} color="primary" />}
          <Text fontSize={[12, 16]} fontWeight="medium" color="primary">
            {props.type === 'previous' ? 'Previous' : 'Next'}
          </Text>
          {props.type === 'next' && <ArrowForwardIcon boxSize={[4, 6]} color="primary" />}
        </HStack>
        <Text
          fontSize={[18, 24]}
          fontWeight="bold"
          color="purple.900"
          textAlign={props.type === 'previous' ? 'left' : 'right'}
        >
          {props.title}
        </Text>
      </VStack>
      {props.type === 'next' && renderBoxIcon()}
    </HStack>
  );
};
