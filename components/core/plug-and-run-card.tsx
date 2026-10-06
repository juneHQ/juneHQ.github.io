import { TimeIcon } from '@chakra-ui/icons';
import { Box, chakra, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';

const colors = {
  sectionPrimary: '#4C459E',
  lightGray: '#F7F8FA',
};

export interface PlugAndRunCardProps {
  /** Order of the current card, e.i. 1, 2, 3 */
  order: number;
  title: string;
  durationText: string;
  serviceLogo?: string;
  description: string;
  content: React.ReactNode;
}

export function PlugAndRunCard(props: PlugAndRunCardProps) {
  return (
    <Flex
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2);"
      borderRadius="md"
      overflow="hidden"
      flexDir="column"
      zIndex="base"
      maxH="430px"
      bg="white"
      pl={4}
      pt={4}
      pr={4}
    >
      <VStack align="flex-start" spacing={4} w="full">
        <HStack w="full">
          <Text color={colors.sectionPrimary} fontSize="xs" fontWeight="bold">
            <chakra.span fontSize="10px">{props.order}.</chakra.span> {props.title}
          </Text>
          <Spacer />
          <HStack>
            <TimeIcon color={colors.sectionPrimary} boxSize="12px" />
            <Text color={colors.sectionPrimary} fontSize="xs" fontWeight="light" whiteSpace="nowrap">
              {props.durationText}
            </Text>
          </HStack>
        </HStack>
        {!!props.serviceLogo && (
          <Box position="relative" sx={{ aspectRatio: '4.875' }} h={12} w="auto">
            <NextImage src={props.serviceLogo} alt={props.title + 'Logo'} layout="fill" />
          </Box>
        )}
        <Text color={colors.sectionPrimary}>{props.description}</Text>
      </VStack>
      <Box h="full" w="full" borderRadius="md" overflow="hidden" mt={8}>
        {props.content}
      </Box>
    </Flex>
  );
}
