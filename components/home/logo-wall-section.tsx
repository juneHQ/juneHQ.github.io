import { PageSectionProps } from 'types/page-section-props';
import { ReactNode } from 'react';
import { HoverEffect, HoverEffectProps } from 'components/home/components/hover-effect';
import { Box, Container, Flex, Image, SimpleGrid, Text, TextProps } from '@chakra-ui/react';
import { defaultPx } from '../core/utils/default-container-px';
import { SectionHeader } from '../core/section-header';
import { NextResponsiveImage, NextResponsiveImageProps } from '../core/next-responsive-image';

interface LogoWallSectionProps extends PageSectionProps {
  title?: ReactNode;
  _icons?: NextResponsiveImageProps['_nextImage'];
  _hoverEffect?: Pick<HoverEffectProps, 'staticBorderColor' | 'staticBgColor'>;
  _hoverTitle?: TextProps;
  _hoverDescription?: TextProps;
}

export const LogoWallSection = (props: LogoWallSectionProps) => {
  return (
    <Box bg="landing.almostBlack.500" {...props._wrapper}>
      <Container maxW="landingMax" px={defaultPx('170px')}>
        <Flex flexDir="column" align="center">
          <SectionHeader
            title={props.title ?? 'These B2B SaaS startups get it'}
            _title={{ color: 'white', textAlign: 'center', fontSize: ['32px', '32px', '44px'] }}
          />
          <Box mt={[10, 10, 16]} />
          <Box w="full" display={['none', 'none', 'block']}>
            <SimpleGrid columns={[2, 2, 5]} px={[0, 0, 20]} alignItems={['center']}>
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/nylas_white.svg"
                alt="nylas"
                h="9"
                w="full"
              />
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/causal_white.svg"
                alt="causal"
                h="9"
                w="full"
              />
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/tuple_white.svg"
                alt="tuple"
                h="10"
                w="full"
              />
              <NextResponsiveImage _nextImage={props._icons} src="/logos-q3/reveal.svg" alt="reveal" h="9" w="full" />
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/rattle_white.svg"
                alt="rattle"
                h="9"
                w="full"
              />
            </SimpleGrid>
            <Box mt={[10, 10, 16]} />
            <SimpleGrid gap={4} columns={[1, 1, 1, 3]} px={0} alignItems={['center']}>
              {[
                {
                  key: 'golden-kitty',
                  title: 'Golden Kitty winner',
                  description: '#1 in 2022 for Data & Analytics in the Product Hunt Award',
                  icon: '/ph.svg',
                  hoverBorderColor: 'rgb(255, 97, 84)',
                  hoverGlowColor: 'rgba(255, 98, 84, 0.1)',
                },
                {
                  key: 'twilio-segment',
                  title: 'Fastest growing app',
                  description: 'Officially the fastest growing app on Twilio Segment in 2022',
                  icon: '/segment-seeklogo.svg',
                  hoverBorderColor: 'rgb(0, 198, 88)',
                  hoverGlowColor: 'rgb(0, 198, 88, 0.1)',
                },
                {
                  key: 'g2',
                  title: '4.9 out of 5',
                  description: 'Trusted by the next-gen B2B SaaS with an average score of 4.9 on G2',
                  icon: '/g2-logo.svg',
                  hoverBorderColor: 'rgb(255, 47, 8)',
                  hoverGlowColor: 'rgba(255, 45, 8, 0.1)',
                },
              ].map((item) => (
                <HoverEffect
                  key={item.key}
                  hoverBorderColor={item.hoverBorderColor}
                  hoverGlowColor={item.hoverGlowColor}
                  {...props._hoverEffect}
                >
                  <Flex gap={[2]} direction={'column'} p={[6]}>
                    <Image
                      boxSize={[10]}
                      src={item.icon}
                      alt="Product hunt"
                      position="absolute"
                      right={[6]}
                      top={[6]}
                    />
                    <Text
                      fontSize={'xl'}
                      fontWeight={'bold'}
                      bgGradient="linear(to-b, purple.500, purple.700)"
                      bgClip="text"
                      letterSpacing={'-0.0.2em'}
                      lineHeight="1.2"
                      {...props._hoverTitle}
                    >
                      {item.title}
                    </Text>
                    <Text mr={[10]} {...props._hoverDescription}>
                      {item.description}
                    </Text>
                  </Flex>
                </HoverEffect>
              ))}
            </SimpleGrid>
          </Box>
          <Box w="full" display={['block', 'block', 'none']}>
            <SimpleGrid columns={2} gap={6} alignItems="start">
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/nylas_white.svg"
                alt="nylas"
                h="9"
                w="full"
              />
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/causal_white.svg"
                alt="causal"
                h="9"
                w="full"
              />
              <NextResponsiveImage
                _nextImage={props._icons}
                src="/logos-q3/tuple_white.svg"
                alt="tuple"
                h="10"
                w="full"
              />
              <NextResponsiveImage _nextImage={props._icons} src="/logos-q3/reveal.svg" alt="reveal" h="9" w="full" />
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
