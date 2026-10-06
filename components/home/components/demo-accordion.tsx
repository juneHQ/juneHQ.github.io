import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, BoxProps, HStack, Progress, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const hoverStyle: BoxProps = {
  boxShadow: '0px 2px 4px rgba(104, 104, 247, 0.2);',
  borderWidth: 2, // px
  borderColor: 'purple.300',
  bg: 'purple.50',
  // 1rem === original p, 1px === gained borderWidth
  p: 'calc(1rem - 1px)',
  shadow: '0px 2px 4px rgba(104, 104, 247, 0.2)',
};

interface Props {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  isOptional?: boolean;
  /** Whether or not to occupy available width */
  block?: boolean;
  /** Override component on the upper-right corner of the accordion card */
  titleAction?: React.ReactNode;
  _wrapper?: BoxProps;
  onToggle?: () => void;
}

export const DemoAccordion = (props: Props) => {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderColor="landing.borderGray"
      borderRadius="md"
      w={props.block ? 'full' : 'unset'}
      onClick={props.onToggle}
      role="group"
      cursor="pointer"
      _hover={hoverStyle}
      _active={{
        bg: 'purple.100',
      }}
      {...(props.isOpen && hoverStyle)}
      {...props._wrapper}
    >
      <HStack>
        <HStack>
          {props.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          <Text fontWeight="bold" color="landing.almostBlack.500">
            {props.title}
          </Text>
        </HStack>
        <Spacer />
        {props.isOptional ? (
          <Text fontWeight="light" fontSize="xs" color="landing.almostBlack.500">
            Optional
          </Text>
        ) : (
          props.titleAction
        )}
      </HStack>
      {props.isOpen && <Box mt={2}>{props.children}</Box>}
    </Box>
  );
};
