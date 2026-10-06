import { Box, Button, Container, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { defaultPx } from 'components/core/utils/default-container-px';
import React from 'react';
import { PageSectionProps } from 'types/page-section-props';

interface JuneSecurityCtaSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const JuneSecurityCtaSection = (props: JuneSecurityCtaSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Box
        bg="linear-gradient(113.99deg, #D1D4FF 15.75%, #A7ACFC 57.98%, #8588E5 83.82%);"
        borderRadius="md"
        pos="relative"
        p={[8, 8, 16, 16, 120]}
      >
        <picture>
          <source type="image/webp" srcSet="/lock.webp" />
          <source type="image/png" srcSet="/lock.png" />
          <Image
            src="/lock.png"
            alt="lock"
            pos="absolute"
            w={['450px']}
            h={['450px']}
            display={['none', 'none', 'block']}
            right={[0, 0, 0, 0, '46px']}
            top="50%"
            transform="translateY(-50%)"
          />
        </picture>
        <VStack pos="relative" align="start" spacing={8} w={['full', 'full', '60%']}>
          <Heading
            as="h2"
            fontFamily="landingHeading"
            fontSize={[54, 54, 80]}
            lineHeight={[1.2, 1.2, '83.5px']}
            color="landing.almostBlack.500"
          >
            Security questions?
          </Heading>
          <Text fontSize={22} fontWeight="medium" color="landing.gray">
            If you think you have found a security vulnerability, please get in touch with our security team at
            security@june.so
          </Text>
          <Button
            as="a"
            href="mailto:security@june.so"
            rel="noopener noreferrer"
            size="landingMd"
            variant="landingSolid"
            fontFamily="landingHeading"
          >
            Contact our security team
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};
