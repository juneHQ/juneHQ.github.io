import { Box, Button, Container, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { PageSectionProps } from 'types/page-section-props';

interface VisionJoinBannerProps extends PageSectionProps {
  /** Add more props here */
}

export const VisionJoinBanner = (props: VisionJoinBannerProps) => {
  return (
    <Container pos="relative" maxW="landingMax" px={[0, 0, 32]} {...props._wrapper}>
      <Image
        src="/banner-vitre.svg"
        alt="no-alt"
        maxW="unset"
        maxH="unset"
        pos="absolute"
        mixBlendMode="color-dodge"
        top="-128px"
        right="82px"
        display={['none', 'none', 'block']}
      />
      <Box border="1px solid rgba(255, 255, 255, 0.2)" borderRadius="6px" p={[8, 8, '120px']}>
        <VStack align="start" spacing={4}>
          <Text
            fontSize={['20px']}
            lineHeight={['26px']}
            fontWeight="semibold"
            fontFamily="landingHeading"
            color="primary"
          >
            This vision speaks to you?
          </Text>
          <Text
            fontSize={[54, 54, 80]}
            lineHeight={['64px', '64px', '83px']}
            fontWeight="bold"
            fontFamily="landingHeading"
            color="white"
          >
            Join the team
          </Text>
          <Text fontSize={['24px']} lineHeight={['36px', '36px', '30px']} fontWeight="medium" color="white">
            Help us provide companies with outstanding templates
          </Text>
        </VStack>
        <Button
          as="a"
          mt={[4, 4, 8]}
          variant="landingSolid"
          size="landingLg"
          href="https://www.notion.so/projectanalytics/Work-at-June-ba2ff41d03cb4a1ba230eda21daccada"
          rel="noopener noreferrer"
        >
          Careers
        </Button>
      </Box>
    </Container>
  );
};
