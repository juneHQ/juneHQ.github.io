import { Box, Flex, FlexProps, HStack } from '@chakra-ui/react';
import React from 'react';

interface WindowMockBoxProps {
  _wrapper?: FlexProps;
  children?: React.ReactNode;
}

export const WindowMockBox = (props: WindowMockBoxProps) => {
  return (
    <Flex
      direction="column"
      borderRadius="10px"
      overflow="hidden"
      bg="white"
      border="1px solid #F2F2F2"
      filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.05))"
      {...props._wrapper}
    >
      <HStack spacing={[2]} borderBottom="1px solid #F2F2F2" px={4} w="full" h={[10]}>
        <Box borderRadius="full" boxSize={2} border="1px solid" borderColor="#ED6A5E" background="#ED6A5E" />
        <Box borderRadius="full" boxSize={2} border="1px solid" borderColor="#F4BF50" background="#F4BF50" />
        <Box borderRadius="full" boxSize={2} border="1px solid" borderColor="#61C554" background="#61C554" />
      </HStack>
      {props.children}
    </Flex>
  );
};
