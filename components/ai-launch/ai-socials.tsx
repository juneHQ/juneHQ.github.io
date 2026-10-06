import { Container, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { PageSectionProps } from '../../types/page-section-props';
import { HoverEffect } from '../home/components/hover-effect';

interface AiSocialsProps extends PageSectionProps {
  /** Add more props here */
}

export const AiSocials = (props: AiSocialsProps) => {
  return (
    <Container maxW="landingMax" px={[4, 12, 12, 40]} bg="transparent" {...props._wrapper}>
      <SimpleGrid gap={[4, 4, 10]} columns={[1, 1, 1, 2]} px={0} alignItems={['center']} bg="transparent">
        {[
          {
            key: 'golden-kitty',
            title: 'Stay up to date',
            description: (
              <>
                We’d love to stay connected with you. Follow <strong>@junedotso</strong> on Twitter for the latest news
                and updates.
              </>
            ),
            icon: '/twitter.svg',
            hoverBorderColor: 'rgba(85, 172, 238, 1)',
            hoverGlowColor: 'rgba(85, 172, 238, 0.1)',
            href: 'https://twitter.com/intent/follow?screen_name=JuneDotSo',
          },
          {
            key: 'g2',
            title: 'The June Podcast',
            description: (
              <>
                Short interviews with Product & Growth leaders who share tips to launch and grow your product. Hosted by{' '}
                <strong>@0zne</strong>.
              </>
            ),
            icon: '/spotify.svg',
            hoverBorderColor: 'rgba(30, 215, 96, 1)',
            hoverGlowColor: 'rgba(30, 215, 96, 0.1)',
            href: 'https://spotifyanchor-web.app.link/e/EkfsbM3Zqyb',
          },
        ].map((item) => (
          <HoverEffect
            key={item.key}
            hoverBorderColor={item.hoverBorderColor}
            hoverGlowColor={item.hoverGlowColor}
            staticBorderColor="#2A2A63"
            staticBgColor="#151531"
          >
            <Flex
              as="a"
              gap={[2]}
              direction={'column'}
              p={[6]}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image boxSize={[10]} src={item.icon} alt="Product hunt" position="absolute" right={[6]} top={[6]} />
              <Text
                fontSize={'xl'}
                fontWeight={'bold'}
                bgGradient="linear(to-b, purple.500, purple.700)"
                bgClip="text"
                letterSpacing={'-0.0.2em'}
                lineHeight="1.2"
                color="white"
              >
                {item.title}
              </Text>
              <Text mr={[10]} color="white">
                {item.description}
              </Text>
            </Flex>
          </HoverEffect>
        ))}
      </SimpleGrid>
    </Container>
  );
};
