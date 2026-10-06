import React from 'react';
import { Box, Flex, HStack, Image, keyframes, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { JTooltip } from '../core/j-tooltip';

function getSampleSizeRemark(sampleSize: number | string) {
  let prefix = '👍';
  if (typeof sampleSize === 'number') {
    if (sampleSize >= 50) {
      prefix = '✨';
    } else if (sampleSize >= 30) {
      prefix = '⭐️';
    }
  }
  return `${prefix} Relevant sample size`;
}

interface SummaryDataPointsProps {
  dataPoints: Array<{ value: string | number; suffix?: string; title: string; description?: string }>;
  sampleSize: number | string;
  summary: string;
}

export function SummaryDataPoints(props: SummaryDataPointsProps) {
  const ping = keyframes({
    '75%,100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  });
  return (
    <VStack w="full" spacing="4">
      <HStack alignItems="center" spacing={[1, 1, 2]}>
        <Flex data-testid="ping">
          <Box
            animation={`${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`}
            h="3"
            w="3"
            bg="green.300"
            borderRadius={10}
            display="inline-flex"
            position="absolute"
            opacity="0.75"
          ></Box>
          <Box display="inline-flex" h="3" w="3" bg="green.300" borderRadius={10}></Box>
        </Flex>
        <Text fontWeight="semibold" fontSize={['md', 'md', 'xl']} color="landing.black">
          {props.summary}
        </Text>
      </HStack>
      <Box
        bg="purple.50"
        border="1px"
        borderColor="primary"
        rounded="2xl"
        backdropFilter="blur(2px)"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05);"
        w="full"
        pos="relative"
      >
        <SimpleGrid columns={[1, 1, 3]} gap={[8, 8, 0]} py="8">
          {props.dataPoints.map((point, i) => (
            <VStack key={i} spacing={[0, 0, 2]} borderRight="1px solid #DDDDDD">
              <Text fontWeight="medium" fontSize="5xl" color="primary">
                {point.value}
                {point.suffix}
              </Text>
              <HStack spacing="1">
                <Text fontSize="sm" color="landing.almostBlack.500">
                  {point.title}
                </Text>
                {!!point.description && (
                  <JTooltip label={point.description}>
                    <Image boxSize="17px" src="/info-trigger.svg" alt="info trigger" />
                  </JTooltip>
                )}
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
        <Box
          px="2.5"
          py="2"
          bg="white"
          border="1px solid #EEEEEE"
          rounded="base"
          pos="absolute"
          bottom="0"
          left="50%"
          transform="translate(-50%, 50%)"
        >
          <Text whiteSpace="nowrap" fontWeight="medium" fontSize="xs" color="landing.almostBlack.500">
            {getSampleSizeRemark(props.sampleSize)}
          </Text>
        </Box>
      </Box>
    </VStack>
  );
}
