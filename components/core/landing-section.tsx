import { ReactNode } from 'react';
import { NextResponsiveImage } from 'components/core/next-responsive-image';
import { Flex, HStack, StackProps, Text, TextProps, VStack } from '@chakra-ui/react';
import { gradients } from 'components/core/gradients';

interface Props extends StackProps {
  subheading?: { icon: string; text: ReactNode; _text?: TextProps };
  heading: ReactNode;
  description?: ReactNode;
  _heading?: TextProps;
  _description?: TextProps;
}

export function LandingSection({ subheading, heading, description, ...props }: Props) {
  return (
    <VStack align="start" spacing={[6, 6, 8]} {...props}>
      <VStack align="start" spacing={4}>
        {!!subheading && (
          <HStack spacing={4} alignItems="center">
            <Flex
              boxSize={8}
              bgGradient={gradients.PRIMARY_LIGHTER}
              alignItems="center"
              justifyContent="center"
              rounded="lg"
            >
              <NextResponsiveImage src={subheading.icon} alt="Landing section icon" boxSize={5} />
            </Flex>
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              color="purple.900"
              {...subheading._text}
            >
              {subheading.text}
            </Text>
          </HStack>
        )}
        <Text
          as="h2"
          fontFamily="landingHeading"
          fontWeight="bold"
          fontSize={[32, 32, 44]}
          lineHeight={1.2}
          color="landing.almostBlack.500"
          letterSpacing="tight"
          {...props._heading}
        >
          {heading}
        </Text>
        {!!description && (
          <Text
            as="p"
            fontFamily="landingHeading"
            fontSize="md"
            lineHeight="7"
            color="gray.900"
            {...props._description}
          >
            {description}
          </Text>
        )}
      </VStack>
    </VStack>
  );
}
