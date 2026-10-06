import { PageSectionProps } from 'types/page-section-props';
import { defaultPx } from 'components/core/utils/default-container-px';
import { NextResponsiveImage } from 'components/core/next-responsive-image';
import { LandingSection } from 'components/core/landing-section';
import { GradientHighlight, Highlight } from 'components/core/highlight';
import { Box, Container, Grid, GridItem, chakra } from '@chakra-ui/react';

interface AiDataSourceProps extends PageSectionProps {
  /** Add more props here */
}

export const AiDataSource = (props: AiDataSourceProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(40)} position="relative" {...props._wrapper}>
      <Box
        pos="absolute"
        bg="purple.500"
        opacity={0.5}
        filter="blur(200px)"
        top="58px"
        bottom="58px"
        left="-28px"
        right="-28px"
      />
      <Grid
        templateColumns="repeat(2, 1fr)"
        bg="purple.900"
        rounded="2xl"
        border="2px solid"
        borderColor="purple.800"
        borderRadius="2xl"
        filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.2))"
      >
        <GridItem colSpan={[2, 2, 1]} py={[6, 6, 10]} pl={[6, 6, 10]} pr={[0, 0, '50px']}>
          <LandingSection
            subheading={{ icon: '/mouse-click-bare.svg', text: 'Setup' }}
            _heading={{ color: 'white' }}
            heading={
              <>
                <GradientHighlight variant="lightest">Connect a data source</GradientHighlight> and see your metrics
              </>
            }
            _description={{ color: 'white' }}
            description={
              <>
                Easily start sending your data and integrate with the products you and your team already use.{' '}
                <Highlight as="a" href="https://june.so/docs">
                  View our docs
                </Highlight>
              </>
            }
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1]} pl={[6, 6, '94px']}>
          <NextResponsiveImage
            src="/data-sources-w-bg-dark.svg"
            alt="Connect a data source and see your metrics"
            sx={{ aspectRatio: '1.36' }}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};
