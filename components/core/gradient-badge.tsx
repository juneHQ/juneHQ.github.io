import { Box, BoxProps, Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  /** Custom styling for the wrapping component, which is Box */
  _wrapper?: BoxProps;
  /** Custom styling for the text component, which is Text */
  _text?: TextProps;
}

export function GradientBadge(props: Props) {
  return (
    <Box
      bg="linear-gradient(113.99deg, #D1D4FF 15.75%, #A7ACFC 57.98%, #8588E5 83.82%);"
      borderRadius="lg"
      p={1}
      {...props._wrapper}
    >
      <Text fontSize="10px" fontWeight="bold" color="white" whiteSpace="nowrap" {...props._text}>
        {props.title}
      </Text>
    </Box>
  );
}
