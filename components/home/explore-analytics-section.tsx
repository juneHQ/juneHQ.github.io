import { PageSectionProps } from 'types/page-section-props';
import ReactPlayer from 'react-player';
import { defaultPx } from 'components/core/utils/default-container-px';
import { NextResponsiveImage } from 'components/core/next-responsive-image';
import { GradientHighlight } from 'components/core/highlight';
import { Box, Container, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { LandingSection } from '../core/landing-section';
import { gradients } from '../core/gradients';

interface ExploreAnalyticsSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const ExploreAnalyticsSection = (props: ExploreAnalyticsSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(40)} {...props._wrapper}>
      <VStack spacing={[4]}>
        <Flex
          boxSize={8}
          bgGradient={gradients.PRIMARY_LIGHTER}
          alignItems="center"
          justifyContent="center"
          rounded="lg"
        >
          <NextResponsiveImage src="/j-bare.svg" alt="Landing section icon" boxSize={3} />
        </Flex>
        <Text
          as="h2"
          fontFamily="landingHeading"
          fontWeight="bold"
          fontSize={[32, 32, 44]}
          lineHeight={1.2}
          color="white"
          letterSpacing="tight"
          textAlign="center"
        >
          A
          <GradientHighlight variant="lightest" glow>
            I
          </GradientHighlight>{' '}
          new way to <br />
          <GradientHighlight variant="lightest">answer product questions</GradientHighlight>
        </Text>
      </VStack>
      <Box mt={[16]} />
      <VStack align="stretch" spacing={[6]}>
        <Grid templateColumns="repeat(2, 1fr)" gap={[6]}>
          <GridItem colSpan={[2, 2, 2, 1]}>
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              bg="purple.900"
              border="2px solid"
              borderColor="purple.800"
              borderRadius="2xl"
            >
              <Box w="full" p={[6, 6, 10]}>
                <LandingSection
                  subheading={{ icon: '/sparkles-bare.svg', text: 'DEEPER ANALYSIS', _text: { color: 'white' } }}
                  _heading={{ color: 'white' }}
                  heading={
                    <>
                      Get answers <br />
                      <GradientHighlight variant="lightest">to specific questions</GradientHighlight>
                    </>
                  }
                  _description={{ color: 'white' }}
                  description={
                    <>
                      When you have an ad-hoc question that needs a quick answer, skip asking your data analyst and ask
                      June AI.
                    </>
                  }
                />
              </Box>
              <Box pl={[6, 6, 10]}>
                <NextResponsiveImage
                  src="/depper-analysis.svg"
                  alt="Auto-generated reports"
                  sx={{ aspectRatio: '1.6011904762' }}
                />
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={[2, 2, 2, 1]}>
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              bg="purple.900"
              border="2px solid"
              borderColor="purple.800"
              borderRadius="2xl"
            >
              <Box w="full" p={[6, 6, 10]}>
                <LandingSection
                  subheading={{ icon: '/sparkles-bare.svg', text: 'SAVE TIME', _text: { color: 'white' } }}
                  _heading={{ color: 'white' }}
                  heading={
                    <>
                      Share insights with <br />
                      <GradientHighlight variant="lightest">saved queries</GradientHighlight>
                    </>
                  }
                  _description={{ color: 'white' }}
                  description={
                    <>
                      Anybody can save a query they found useful. This way your entire team can discover helpful
                      insights together.
                    </>
                  }
                />
              </Box>
              <Box pl={[6, 6, 10]}>
                <NextResponsiveImage
                  src="/save-time.svg"
                  alt="Auto-generated reports"
                  sx={{ aspectRatio: '1.6011904762' }}
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};
