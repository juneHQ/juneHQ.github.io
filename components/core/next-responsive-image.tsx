import React, { forwardRef } from "react";
import NextImage, { ImageProps } from "next/image";
import { Box, BoxProps } from "@chakra-ui/react";

export interface NextResponsiveImageProps extends BoxProps {
  src: ImageProps['src'];
  alt: ImageProps['alt'];
  fit?: ImageProps['objectFit'];
  _nextImage?: Omit<ImageProps, 'src' | 'alt' | 'objectFit'>;
}

export const NextResponsiveImage = forwardRef<HTMLDivElement, NextResponsiveImageProps>(
  ({ src, alt, fit, _nextImage, ...boxProps }, ref) => {
    return (
      <Box {...boxProps} position="relative" ref={ref}>
        <NextImage src={src} alt={alt} layout="fill" objectFit={fit || 'contain'} {..._nextImage} />
      </Box>
    );
  }
);

NextResponsiveImage.displayName = 'NextResponsiveImage';
