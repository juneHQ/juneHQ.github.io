import React from 'react';
import { TextProps, Text } from '@chakra-ui/react';

export interface JAnchorProps extends TextProps {
  href: string;
}

export const JAnchor = (props: JAnchorProps) => {
  return (
    <Text
      as="a"
      color="primary"
      _hover={{ textDecoration: 'underline' }}
      target="_blank"
      rel="noreferrer noopener"
      cursor="pointer"
      {...props}
    />
  );
};
