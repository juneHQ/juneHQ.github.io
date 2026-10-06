import React, { ReactNode } from 'react';
import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';

export interface MetricDefinitionProps {
  title: string;
  description: ReactNode;
  methodDescription: ReactNode;
  icon: ReactNode;
  onCreateReportButtonPress?: () => void;
}

export const MetricDefinition = (props: MetricDefinitionProps) => {
  return (
    <HStack alignItems="start" spacing="6">
      <Flex
        flexShrink="0"
        boxSize={[12, 12, 24]}
        bg="purple.50"
        rounded={['10px', '10px', '20px']}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={[16, 16, 32]}>{props.icon}</Text>
      </Flex>
      <VStack alignItems="start" spacing="6">
        <VStack alignItems="start" spacing="2">
          <Text fontWeight="bold" fontSize="32" color="landing.black">
            {props.title}
          </Text>
          <Text fontSize="sm" color="landing.gray">
            {props.description}
          </Text>
        </VStack>
        <VStack p={4} w="full" bg="orange.50" border="2px solid" borderColor="orange.100" borderRadius="md">
          <Flex gap={2} w="full" direction={'column'} justify="flex-start">
            <Text fontWeight={'medium'}>Method used</Text>
            <Text fontSize={'sm'}>{props.methodDescription}</Text>
          </Flex>
        </VStack>
        <VStack alignItems="start" spacing="4">
          <Text fontSize="sm" color="landing.black">
            Connect your product usage data to June and get your {props.title.toLowerCase()} out of the box:
          </Text>
          <Button as="a" variant="landingSolid" size="landingMd" href={`${process.env.JUNE_APP_HOST}/start`}>
            Sign up for free
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
};
