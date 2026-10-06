import { VStack, Image } from '@chakra-ui/react';
import { SectionHeader } from 'components/core/section-header';
import { WindowMockBox } from 'components/core/window-mock-box';
import React from 'react';
import useInView from 'react-cool-inview';

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
  accentColor?: string;
  accentColorScheme?: string;
  description: string;
  onEnter: (direction: string) => void;
}

export const FreshpaintSlide = (props: Props) => {
  const { observe } = useInView<HTMLDivElement>({
    threshold: 1,
    onEnter: ({ scrollDirection }) => {
      props.onEnter(scrollDirection.vertical || '');
    },
  });

  return (
    <VStack ref={observe} align="start" py={[6, 6, 28]} pr={[0, 0, '60px']} spacing={4}>
      <SectionHeader
        subtitle={props.subtitle}
        title={props.title}
        description={props.description}
        accentColor={props.accentColor}
        _wrapper={{ spacing: 4 }}
        _description={{ lineHeight: '32px', fontSize: 'lg' }}
      />
      <WindowMockBox _wrapper={{ display: ['flex', 'flex', 'none'] }} accentColorScheme={props.accentColorScheme}>
        <Image src={props.imageSrc} alt={props.title} w="full" />
      </WindowMockBox>
    </VStack>
  );
};
