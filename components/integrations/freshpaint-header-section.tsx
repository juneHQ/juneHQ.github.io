import { Box, Button, Container, Flex, Grid, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from 'components/core/page-header';
import { defaultPx } from 'components/core/utils/default-container-px';
import { renderTagline } from 'components/personas/components/render-tagline';
import React from 'react';
import { PageSectionProps } from 'types/page-section-props';
import NextImage from 'next/image';
import Image from 'next/image';

interface FreshpaintHeaderSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const FreshpaintHeaderSection = (props: FreshpaintHeaderSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid templateColumns={['1fr', '1fr', '3fr 2fr']} gap={[6, 6, 0]}>
        <VStack align="start" spacing={4} mr={[0, 0, '60px']}>
          <PageHeader
            subtitle="June x Freshpaint"
            title={renderTagline(
              [
                { value: 'Auto ' },
                { value: 'capture and ', highlighted: true },
                { value: 'measure', highlighted: true },
                { value: ' user behavior' },
              ],
              'primary',
            )}
            description="Use Freshpaint and June to auto-capture and analyze user behaviour, no engineering resources required."
            accentColor="primary"
            _description={{ lineHeight: '32px', fontSize: 'lg' }}
            _headingsWrapper={{ align: ['center', 'center', 'start'] }}
          />
          <Button
            as="a"
            href="https://analytics.june.so/start"
            variant="landingSolid"
            size="landingMd"
            width={['full', 'full', 'unset']}
            colorScheme="purple"
          >
            Sign up
          </Button>
        </VStack>
        <VStack spacing={6} justify="center">
          <HStack spacing={7}>
            <Box>
              <NextImage src="/integrations/freshpaint.png" width={165} height={163} />
            </Box>
            <Box>
              <NextImage src="/integrations/arrow.png" width={52} height={35} />
            </Box>
            <Box>
              <NextImage src="/integrations/june.png" width={165} height={165} />
            </Box>
          </HStack>
          <Box bg="gray.50" px={4} py="5px" borderRadius="lg">
            <Text fontSize="lg" fontWeight="medium" color="gray.600">
              10 minutes · no-code
            </Text>
          </Box>
        </VStack>
      </Grid>
      <VStack spacing={8} mt={['50px', '50px', 24]}>
        <Text fontSize={['md', 'md', 'lg']} fontWeight="bold" color="primary">
          Powering next-gen companies
        </Text>
        <Flex justify="center">
          <SimpleGrid columns={[2, 4]} gap={10} alignItems="center" justifyItems="center">
            <Image objectFit="contain" width={156} height={35} src="/home/logo-wall/sigmaos.svg" alt="sigmaos" />
            <Image objectFit="contain" width={156} height={35} src="/home/logo-wall/causal.svg" alt="causal" />
            <Image objectFit="contain" width={156} height={35} src="/home/logo-wall/copyai.svg" alt="copyai" />
            <Image objectFit="contain" width={156} height={35} src="/home/logo-wall/arrows.svg" alt="arrows" />
          </SimpleGrid>
        </Flex>
      </VStack>
    </Container>
  );
};
