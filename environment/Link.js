import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';

export const Link = ({ to, onClick, children }) => {
  if (onClick) {
    return <NextLink onClick={onClick}>{children}</NextLink>;
  }
  return (
    <Box cursor="pointer">
      <NextLink href={to}>{children}</NextLink>
    </Box>
  );
};
