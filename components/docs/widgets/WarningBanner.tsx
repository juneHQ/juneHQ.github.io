import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export default function WarningBanner({
  title,
  description,
}: {
  title: string;
  description: string | React.ReactNode;
}) {
  return (
    <Flex w="100%" p={4} mb={3} align="center" bg="#FEE9C2" borderRadius="lg">
      <Flex w="100%" align="center">
        <InfoOutlineIcon ml={4} mr={8} w={5} h={5} color="yellow.500" />
        <Flex direction="column" w="90%">
          <Text mb={1} fontWeight="bold" fontSize="md">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.700">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
