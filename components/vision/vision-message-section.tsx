import { chakra, Container, HStack, Image, VStack } from '@chakra-ui/react';
import { PageHeader } from 'components/core/page-header';
import { defaultPx } from 'components/core/utils/default-container-px';
import React from 'react';
import { PageSectionProps } from 'types/page-section-props';

const H2 = chakra('h2', {
  baseStyle: {
    fontSize: ['32px'],
    lineHeight: ['44px', '44px', '80px'],
    fontFamily: 'landingHeading',
    fontWeight: 'bold',
    color: 'white',
  },
});

const Paragraph = chakra('p', {
  baseStyle: {
    fontSize: ['lg'],
    lineHeight: ['32px'],
    color: 'white',
  },
});

interface VisionMessageSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const VisionMessageSection = (props: VisionMessageSectionProps) => {
  return (
    <Container pos="relative" maxW="landingMax" pl={defaultPx(453)} pr={defaultPx(443)} {...props._wrapper}>
      <Image
        src="/vitre.svg"
        alt="no-alt"
        maxW="unset"
        maxH="unset"
        pos="absolute"
        mixBlendMode="hard-light"
        top="-316px"
        left="678px"
        display={['none', 'none', 'block']}
      />
      <PageHeader
        title="Make products people love"
        _wrapper={{ mb: 4, align: 'start' }}
        _title={{ color: 'white', textAlign: 'left' }}
      />
      <VStack align="start" spacing={[4, 4, 10]}>
        <H2>The rules have changed</H2>
        <VStack align="start" spacing={[4, 4, 8]}>
          <Paragraph>
            Today’s buyers are also the end-users, and when evaluating new software they much prefer to experience the
            magic of a product first hand.
          </Paragraph>
          <Paragraph>
            The best products allow prospects to try before they buy, making the user experience an essential investment
            that pays dividends well beyond acquisition - by playing a key role in customer retention and expansion
            also.
          </Paragraph>
        </VStack>
        <H2>Introducing Product-Led Analytics</H2>
        <VStack align="start" spacing={[4, 4, 8]}>
          <Paragraph>
            When so much depends on the product usage, everyone on the team needs to know how the users actually
            experience the product.
          </Paragraph>
          <Paragraph>
            Everyone, not only product managers, should be empowered to understand how the product is actually being
            used. Engineers, designers, marketers, success, and sales all want and need to know that they are working on
            what really matters. The playing field evolves so rapidly that it is impossible to steer the ship without a
            shared compass.
          </Paragraph>
          <Paragraph>
            But Analytics tools are not working for you. Existing software offers a few experts all kinds of customized
            charts for advanced use cases, yet this flexibility comes at the cost of needing deep domain expertise to
            get things going.
          </Paragraph>
          <Paragraph>
            Analytics gets a bad rap, opening legacy products is a cold and intimidating experience. June makes
            measuring your user behavior a warm and welcoming experience.
          </Paragraph>
          <Paragraph>
            June is a plug-and-run solution compatible with how we build products today. June is a redo, a rethink, a
            reintroduction of Analytics. A fresh start, the way it should be.
          </Paragraph>
          <Paragraph>
            After connecting your data source, June crunches, and benchmarks user behavior in a few clicks - no
            expertise required.
          </Paragraph>
          <Paragraph>
            <chakra.span textDecor="underline">June</chakra.span> brings back the magic to Analytics.
          </Paragraph>
        </VStack>
        <VStack align="start" spacing={4}>
          <Paragraph>— Enzo & Ferruccio ❤️</Paragraph>
          <HStack spacing={4}>
            <Image boxSize="64px" src="/enzo.png" alt="Enzo's avatar" />
            <Image boxSize="64px" src="/feru.png" alt="Feru's avatar" />
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};
