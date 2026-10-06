import { Box, BoxProps, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface SecurityBoxProps {
  /** Path to the icon source. Example: '/home/x/x.png */
  icon: string;
  /** Title of the box. Example: "GDPR Ready" */
  title: string;
  /** Subtitle of the box. Example: "We comply with General Data Protection Regulation..." */
  subtitle: string | React.ReactNode;
  /** Styling of the wrapper component, which is Box */
  _wrapper?: BoxProps;
}

export const SecurityBox = (props: SecurityBoxProps) => {
  return (
    <Box border="1px solid #E2E2E2" borderRadius="6px" p={4} {...props._wrapper}>
      <HStack spacing={6} align="start">
        <Image src={props.icon} alt="security icon" width={50} height={50} htmlWidth={50} htmlHeight={50} />
        <VStack align="start" spacing={3}>
          <Heading as="h3" size="2xl" color="landing.black">
            {props.title}
          </Heading>
          <Text color="landing.gray">{props.subtitle}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
