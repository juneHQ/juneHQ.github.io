import { Box, Container, Flex, GridItem, Link, SimpleGrid } from '@chakra-ui/react';
import { Highlight } from 'components/core/highlight';
import { LandingSection } from 'components/core/landing-section';
import { NextResponsiveImage } from 'components/core/next-responsive-image';
import { defaultPx } from 'components/core/utils/default-container-px';

export default function TeamTrees() {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} my={[12, 12, 0]}>
      <Box backgroundImage="url(/feature-milestones/confetti.png)" py={12}>
        <SimpleGrid columns={[1, 1, 2]} border="4px solid rgba(104, 104, 247, 0.1)" rounded="2xl" background="white">
          <GridItem p={[6, 6, 10]}>
            <LandingSection
              subheading={{ icon: '/mouse-click-icon.svg', text: 'Rewards' }}
              heading={
                <>
                  Add branches to your product, <Highlight>we plant real trees on Earth.</Highlight>
                </>
              }
              description={
                <>
                  When you unlock your user and usage goals, we plant a real tree for you with our partner,{' '}
                  <Link color="purple.500" href="https://teamtrees.org/">
                    Team Trees
                  </Link>
                  .
                </>
              }
            />
          </GridItem>
          <GridItem p={[6, 6, 10]} pt={[0, 0, 10]}>
            <Flex h="full">
              <NextResponsiveImage
                minH="48"
                rounded="2xl"
                overflow="hidden"
                fit="cover"
                w="full"
                h="full"
                alt="Team Trees"
                src="/feature-milestones/teamtrees.png"
              />
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
