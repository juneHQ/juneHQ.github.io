import { Box, BoxProps, Container, SimpleGrid } from '@chakra-ui/react';
import { SectionHeader } from 'components/core/section-header';
import { defaultPx } from 'components/core/utils/default-container-px';
import NextImage from 'next/image';
import React from 'react';
import { NextResponsiveImage } from '../core/next-responsive-image';
import { PlugAndRunCard, PlugAndRunCardProps } from '../core/plug-and-run-card';

interface Props {
  _wrapper?: BoxProps;
  walkthroughComponents: Omit<PlugAndRunCardProps, 'order'>[];
}

export function PlugAndRunSection(props: Props) {
  return (
    <Box bg="linear-gradient(129.77deg, #ADABFF 16.97%, #9C88DD 64.88%, #CB8AE8 94.21%)" {...props._wrapper}>
      <Container maxW="landingMax" px={defaultPx(20)} pt={[50, 50, 100]} pb={[10, 10, 120]}>
        <SectionHeader
          subtitle="No expertise required"
          title="Ready to go"
          _wrapper={{ mb: [4, 4, 10], mx: [0, 0, 12] }}
          _subtitle={{ color: 'white' }}
          _title={{ color: 'white' }}
        />
        <Box position="relative">
          <Box pos="absolute" w="full" h={`calc(100% + 136px)`} top="-76px">
            <NextImage src="/home/walkthrough/road-path.svg" alt="road path" layout="fill" />
          </Box>
          <SimpleGrid columns={[1, 1, 3]} spacing={[6, 6, 9]}>
            {props.walkthroughComponents.map((walkthrough, i) => (
              <PlugAndRunCard key={walkthrough.title} {...walkthrough} order={i + 1} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
