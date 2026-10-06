import React from 'react';

import { Box, Flex, keyframes } from '@chakra-ui/react';

export const Ping = ({ color = 'green.300' }: { color?: string }) => {
  const ping = keyframes({
    '75%,100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  });

  return (
    <Flex data-testid="ping">
      <Box
        animation={`${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`}
        h="3"
        w="3"
        bg={color}
        borderRadius={10}
        display="inline-flex"
        position="absolute"
        opacity="0.75"
      ></Box>
      <Box display="inline-flex" h="3" w="3" bg={color} borderRadius={10}></Box>
    </Flex>
  );
};
