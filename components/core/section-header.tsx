import { Heading, StackProps, Text, TextProps, VStack } from '@chakra-ui/react';
import React from 'react';

export interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  accentColor?: string;
  _wrapper?: StackProps;
  _headingsWrapper?: StackProps;
  _subtitle?: TextProps;
  _title?: TextProps;
  _description?: TextProps;
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <VStack align="start" spacing={[4, 4, 8]} {...props._wrapper}>
      <VStack align="start" spacing={4} {...props._headingsWrapper}>
        {props.subtitle && (
          <Text
            fontSize={['md', 'md', 'lg']}
            fontWeight="bold"
            color={props.accentColor ? props.accentColor : 'primary'}
            {...props._subtitle}
          >
            {props.subtitle}
          </Text>
        )}
        <Heading
          as="h2"
          fontSize={['40px', '40px', '6xl']}
          color="purple.900"
          lineHeight={1.25}
          letterSpacing={['-0.02em']}
          {...props._title}
        >
          {props.title}
        </Heading>
      </VStack>
      {props.description && (
        <Text color="landing.gray" {...props._description}>
          {props.description}
        </Text>
      )}
    </VStack>
  );
}
