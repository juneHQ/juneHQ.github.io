import { PageSectionProps } from 'types/page-section-props';
import Link from 'next/link';
import NextImage from 'next/image';
import { defaultPx } from 'components/core/utils/default-container-px';
import { SectionHeader } from 'components/core/section-header';
import { Box, Container, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { NextResponsiveImage } from '../core/next-responsive-image';

const securityFeatures = [
  {
    icon: '/home/security/ccpa.svg',
    title: 'Yearly pentests',
    subtitle: 'We undergo yearly penetration testing by an external CREST accredited security firm.',
  },
  {
    icon: '/home/security/gdpr.svg',
    title: 'GDPR & CCPA',
    subtitle: 'Comply with the CCPA, GDPR and sign a Data Processing Agreement (DPA).',
  },
  {
    icon: '/home/security/secure-servers.svg',
    title: 'Secure servers',
    subtitle: 'Our infrastructure is managed by AWS guaranteeing the most comprehensive security and reliability.',
  },
];

export function SecuritySection(props: PageSectionProps) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 6]}>
        <Box alignSelf="center">
          <SectionHeader
            subtitle="Our commitment"
            title={
              <>
                <h1>
                  Your user
                  <br /> data is safe
                </h1>
              </>
            }
            description={<>We take your security seriously and take measures to ensure your data stays safe</>}
            _wrapper={{ mb: [4, 4, 8] }}
            _description={{ maxW: '85%' }}
          />
          <HStack spacing={6}>
            <NextResponsiveImage src="/soc.png" alt="soc" boxSize="20" />
            <Text color="landing.gray">SOC 2 Type II</Text>
          </HStack>
        </Box>
        <VStack align="start" spacing={6}>
          {securityFeatures.map((feature) => (
            <Box key={feature.title} p={4}>
              <HStack spacing={6} align="start">
                <Box flexShrink={0}>
                  <NextImage src={feature.icon} alt="security icon" width={50} height={50} />
                </Box>
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="2xl" color="landing.black">
                    {feature.title}
                  </Heading>
                  <Text color="landing.gray">{feature.subtitle}</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
