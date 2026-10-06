import { Box, Flex, Popover, PopoverArrow, PopoverContent, PopoverTrigger, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface HeroPopoverProps {
  trigger: React.ReactNode;
  action: React.ReactNode;
  title: string;
  description: string;
}

export const HeroPopover = (props: HeroPopoverProps) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>{props.trigger}</PopoverTrigger>
      <PopoverContent bg="gray.900" borderRadius="lg">
        <PopoverArrow bg="gray.900" />
        <Box p="4" w="full">
          <VStack align="stretch" spacing={4}>
            <Flex align="center" justify="center" bg="white" borderRadius="lg" minH="120px">
              {props.action}
            </Flex>
            <VStack align="stretch" textAlign="left">
              <Text color="white" fontWeight="medium" fontSize="md">
                {props.title}
              </Text>
              <Text color="gray.500" fontSize="sm" fontWeight="normal">
                {props.description}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </PopoverContent>
    </Popover>
  );
};
