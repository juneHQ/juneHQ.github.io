import React, { ReactNode } from 'react';
import { Box, BoxProps, Button, ButtonProps, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

interface Props {
  _wrapper?: BoxProps;
  title: string;
  description: string;
  price?: number | React.ReactNode;
  buttonText: string;
  _button?: ButtonProps;
  featuresHeader?: string;
  features: ReactNode[];
  isStartingPrice?: boolean;
  footer: {
    emoji: string;
    title: string;
    link: string;
    linkText: string;
  };
  onButtonPress?: () => void;
}

export const PricingCard = (props: Props) => {
  return (
    <Flex
      direction={'column'}
      justifyContent={'space-between'}
      bg="white"
      borderRadius="md"
      borderWidth={1} // px
      borderColor="landing.borderGray"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
      _hover={{
        borderWidth: 2, // px
        borderColor: 'purple.300',
        bg: 'purple.50',
        shadow: '0px 2px 4px rgba(104, 104, 247, 0.2)',
        m: '-1px',
      }}
      {...props._wrapper}
    >
      <VStack p={6} align="stretch" spacing={6}>
        <VStack align="start" spacing={4}>
          <Heading
            as="h2"
            fontSize={['40px', '40px', '6xl']}
            color="landing.almostBlack.500"
            fontFamily="landingHeading"
          >
            {props.title}
          </Heading>
          <Text color="landing.gray" maxWidth="70%" minHeight="12">
            {props.description}
          </Text>
          {typeof props.price === 'number' ? (
            <HStack align="end" spacing={1}>
              {props.isStartingPrice && (
                <Text fontSize="xs" color="landing.almostBlack.500">
                  Starts at
                </Text>
              )}
              <Text fontSize={27} color="landing.almostBlack.500" fontWeight="bold" lineHeight="none">
                ${props.price}
              </Text>
              <Text fontSize="xs" color="landing.almostBlack.500">
                /
              </Text>
              <Text fontSize="xs" color="landing.almostBlack.500" fontWeight="light">
                month
              </Text>
            </HStack>
          ) : (
            <HStack align="end" spacing={1}>
              <Text fontSize={27} color="landing.almostBlack.500" fontWeight="bold" lineHeight="none">
                {props.price}
              </Text>
            </HStack>
          )}
          <Button width="full" variant="landingSolid" size="landingMd" {...props._button} onClick={props.onButtonPress}>
            {props.buttonText}
          </Button>
        </VStack>
        <VStack align="start" spacing={6}>
          {props.featuresHeader && (
            <Text fontSize="sm" fontWeight="bold" color="landing.almostBlack.500">
              {props.featuresHeader}
            </Text>
          )}
          {props.features.map((feature, i) => (
            <HStack key={i} alignItems="flex-start">
              <CheckIcon mt={1} fontSize={14} />
              <Text fontSize="sm" fontWeight="medium" color="landing.almostBlack.500">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Box bg="linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #666DEE;" px="6" py="3">
        <HStack spacing="3">
          <Box>
            <Flex
              rounded="full"
              bg="linear-gradient(0deg, #FFFFFF, #FFFFFF), #666DEE;"
              align="center"
              justify="center"
              boxSize="44px"
            >
              {props.footer.emoji}
            </Flex>
          </Box>
          <VStack spacing="0" align="start">
            <Text color="#353A3F" fontSize="sm" fontWeight="medium">
              {props.footer.title}
            </Text>
            <Text
              as="a"
              href={props.footer.link}
              target="_blank"
              rel="noreferrer noopener"
              color="primary"
              fontSize="sm"
              fontWeight="medium"
            >
              {props.footer.linkText}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Flex>
  );
};
