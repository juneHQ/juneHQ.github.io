import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { JAnchor } from '../core/j-anchor';

export interface DataCollectionAdvisoryProps {}

export const DataCollectionAdvisory = (props: DataCollectionAdvisoryProps) => {
  return (
    <Box p="4" bg="white" border="1px solid #EEEEEE" rounded="lg">
      <HStack spacing="4" alignItems="start">
        <Flex flexShrink="0" boxSize="44px" bg="purple.50" rounded="lg" alignItems="center" justifyContent="center">
          <Text fontSize="xl">🔒</Text>
        </Flex>
        <Text fontSize="sm" color="landing.gray">
          This data is anonymized and comes from 357 users that opted-in in our in-product survey.
          <br />
          Last update: November 2023
        </Text>
      </HStack>
    </Box>
  );
};
