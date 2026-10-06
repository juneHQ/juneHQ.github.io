import { useEffect, useState } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import NextImage from 'next/image';
import { NextResponsiveImage } from '../next-responsive-image';
import { useVariables } from 'lib/hooks/useVariables';

interface NavbarProps {
  hideGradient?: boolean;
  mode?: 'light' | 'dark';
}

export function NoCtaNavbar(props: NavbarProps) {
  const logoAltTag = useVariables('website_logo_alt_tag');

  return (
    <>
      {props.mode !== 'dark' && !props.hideGradient && (
        <>
          <div className="absolute hidden w-full h-8 bg-white lg:block opacity-90"></div>
          <div className="absolute hidden w-full h-16 pointer-events-none lg:block top-8 opacity-90 bg-gradient-to-b from-white"></div>
        </>
      )}
      <Container
        position="absolute"
        maxW="1192px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={15}
        overflow="visible"
        px={0}
        mt={[4]}
      >
        <Flex className="relative h-16" direction="row" alignItems="center" justifyContent="start">
          <Box>
            <NextResponsiveImage
              display={['none', 'none', 'block']}
              src="/june-logo-black.svg"
              alt={logoAltTag}
              width={['100px']}
              height={['32px']}
              cursor="default"
              {...(props.mode === 'dark' && {
                filter: 'invert(1) brightness(10000%)',
              })}
            />
            <Box display={['block', 'block', 'none']} p={4}>
              <NextImage
                height={48}
                width={48}
                src={props.mode === 'dark' ? '/june-logo-symbol-only-white.svg' : '/june-logo-symbol-only.svg'}
                alt={logoAltTag}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
