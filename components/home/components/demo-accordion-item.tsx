import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title: string | React.ReactNode;
  _wrapper?: BoxProps;
}

/** The teeny-weeny button inside the DemoAccordion */
export function DemoAccordionItem(props: Props) {
  return (
    <Box p={2} bg="white" borderRadius="5px" {...props._wrapper}>
      <HStack align="center" justify="center">
        {props.leftIcon}
        {typeof props.title === 'string' ? (
          <Text fontSize="sm" color="purple.700">
            {props.title}
          </Text>
        ) : (
          props.title
        )}
        {props.rightIcon}
      </HStack>
    </Box>
  );
}
