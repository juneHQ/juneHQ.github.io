import React from 'react';
import { Box, BoxProps, Image, VStack } from '@chakra-ui/react';

type BgType = 'purple' | 'pale' | 'transparent';

const BG_TYPES: { [key in BgType]: string } = {
  purple: 'linear-gradient(129.77deg, #ADABFF 16.97%, #9C88DD 64.88%, #CB8AE8 94.21%)',
  pale: 'linear-gradient(129.77deg, #FEB5A4 16.97%, #F47D83 64.88%, #F987A9 94.21%)',
  transparent: 'transparent',
};

export interface AnimatedCardProps extends BoxProps {
  children: React.ReactNode;
  ctaText?: string;
  bgType?: BgType;
  hideInteractiveIndicator?: boolean;
}

export const AnimatedCard = ({
  children,
  bgType = 'purple',
  hideInteractiveIndicator,
  ...props
}: AnimatedCardProps) => {
  return (
    <VStack spacing={['8']} h="full">
      <Box
        zIndex={'docked'}
        borderRadius={'2xl'}
        w="full"
        h="full"
        overflow="hidden"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ aspectRatio: '1' }}
        {...props}
      >
        {/* Gradient background */}
        <Box pos="absolute" zIndex="hide" top={0} left={0} right={0} bottom={0} bg={BG_TYPES[bgType]} opacity={0.1} />
        {/* Inner content */}
        {children}
        {/* Interactivity indicator */}
        {!hideInteractiveIndicator && (
          <Image
            src="/hand.svg"
            alt="Interactivity indicator"
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            bottom="6"
          />
        )}
      </Box>
    </VStack>
  );
};
