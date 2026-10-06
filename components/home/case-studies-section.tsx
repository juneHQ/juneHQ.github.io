import { Box, chakra, Container, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { PageSectionProps } from '../../types/page-section-props';
import { NextResponsiveImage } from '../core/next-responsive-image';

const CASE_STUDIES = [
  {
    type: 'Analysis',
    title: 'Measure things the right way',
    thumbnail: '/case_study-1.svg',
    description: (
      <>
        We standardised how to visualize and measure metrics for subscription businesses. So you can focus on improving
        your numbers, instead of thinking about how you should visualise them.
      </>
    ),
  },
  {
    type: 'Analysis',
    title: 'Made for B2B SaaS companies',
    thumbnail: '/case_study-2.svg',
    description: (
      <>
        Most analytics tools are built for the needs of mobile apps.
        <br />
        Tracking companies in them is just an afterthought available through expensive add-ons. June was built for B2B
        companies from the ground up.
      </>
    ),
  },
  {
    type: 'Team alignment',
    title: 'Let your metrics come to you and your team',
    thumbnail: '/case_study-3.png',
    description: (
      <>
        June integrates with how you already work. Pick the right cadence for your team and receive updates where you
        already are like in <chakra.span fontWeight="semibold">Slack</chakra.span>. Or share your metrics in your{' '}
        <chakra.span fontWeight="semibold">Notion</chakra.span> investor updates.
      </>
    ),
  },
  {
    type: 'Action',
    title: 'Take actions on your data',
    thumbnail: '/case_study-4.svg',
    description: (
      <>
        See key information about your users, like names and emails. use that information to identify your persona, and
        take follow up actions.
      </>
    ),
  },
];

export const CaseStudiesSection = (props: PageSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <SimpleGrid columns={[1, 1, 2]} gap={[12]} rowGap={[12, 12, '120px']}>
        {CASE_STUDIES.map((caseStudy, i) => (
          <Box key={i}>
            <VStack spacing={[6]}>
              <NextResponsiveImage
                src={caseStudy.thumbnail}
                alt="Case Study 1"
                w="full"
                h="full"
                sx={{ aspectRatio: '592/294' }}
              />
              <Flex flexDir="column">
                <Text color="primary" fontWeight="bold" fontSize="lg" fontFamily="landingHeading">
                  {caseStudy.type}
                </Text>
                <Box mt="2" />
                <Text color="landing.black" fontWeight="bold" fontSize="2xl" as="h2" fontFamily="landingHeading">
                  {caseStudy.title}
                </Text>
                <Box mt="4" />
                <Text color="#353A3F">{caseStudy.description}</Text>
              </Flex>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
