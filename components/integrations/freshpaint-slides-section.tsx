import { Container, HStack, Image, VStack } from '@chakra-ui/react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { WindowMockBox } from 'components/core/window-mock-box';
import React, { useState } from 'react';
import { PageSectionProps } from 'types/page-section-props';
import { FreshpaintSlide } from './components/freshpaint-slide';

const SLIDES = [
  {
    subtitle: 'Autotracking',
    title: 'Capture user’s actions without code',
    description:
      "Freshpaint's autotrack features automatically capture and share customer actions with June in real-time without coding - including historical data.",
    screenshotSrc: '/integrations/slide1.png',
  },
  {
    subtitle: 'Instant Analytics',
    title: '.... annnnd you’re done!',
    description:
      'June is instant analytics. It connects to your user behavior data and generates actionable metrics without expertise required.',
    screenshotSrc: '/integrations/slide2.png',
  },
];

interface FreshpaintSlidesSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const FreshpaintSlidesSection = (props: FreshpaintSlidesSectionProps) => {
  const [currentSection, setCurrentSection] = useState(SLIDES[0]);

  function handleSectionEnter(index: number, direction: string) {
    setCurrentSection(SLIDES[index]);
  }

  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <HStack align="start">
        <VStack flex={1} align="start">
          {SLIDES.map((slide, i) => (
            <FreshpaintSlide
              key={i}
              title={slide.title}
              accentColor="primary"
              accentColorScheme="purple"
              subtitle={slide.subtitle}
              description={slide.description}
              imageSrc={slide.screenshotSrc}
              onEnter={(direction) => handleSectionEnter(i, direction)}
            />
          ))}
        </VStack>
        {/* Floating window thingy */}
        {/* TODO: add transition effect -R  */}
        <WindowMockBox
          _wrapper={{
            position: 'sticky',
            top: '25%',
            overflow: 'hidden',
            display: ['none', 'none', 'flex'],
          }}
          accentColorScheme="purple"
        >
          <Image src={currentSection.screenshotSrc} alt={currentSection.title + ' screenshot'} w="full" />
        </WindowMockBox>
      </HStack>
    </Container>
  );
};
