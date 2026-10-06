import { Box, HStack, Text, useToken } from '@chakra-ui/react';
import React, { SVGProps } from 'react';
import Link from 'next/link';
import { PERSONA_CONFIG_LIBRARY } from '../constants/persona-configs';

interface Props {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  href: string;
  onClick?: () => void;
}

export const PopoverMenuItem = (props: Props) => {
  const route = props.href.split('/')[2];

  const colorScheme = PERSONA_CONFIG_LIBRARY[route].accentColorScheme;

  const [activeColor] = useToken('colors', [`${colorScheme || 'purple'}.500`]);

  // Hover color appended by alpha value.
  // Reference: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
  const hoverColor = `${activeColor}1A`;

  return (
    <Link href={props.href} passHref>
      <HStack
        p={2}
        cursor="pointer"
        borderRadius="6px"
        role="group"
        _hover={{
          bg: hoverColor,
        }}
        sx={{
          ':hover svg': {
            color: activeColor,
          },
        }}
        onClick={props.onClick}
      >
        <props.icon color="#ADB5BD" />
        <Text
          fontWeight="medium"
          color="#030334"
          _groupHover={{
            color: activeColor,
          }}
        >
          {props.text}
        </Text>
      </HStack>
    </Link>
  );
};
