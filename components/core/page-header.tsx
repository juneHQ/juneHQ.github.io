import React from 'react';
import { SectionHeader, SectionHeaderProps } from './section-header';

interface Props extends SectionHeaderProps {}

export const PageHeader = (props: Props) => {
  return (
    <SectionHeader
      {...props}
      _wrapper={{
        spacing: 4,
        align: ['center', 'center', 'start'],
        ...props._wrapper,
      }}
      _title={{
        as: 'h1',
        color: 'gray.900',
        textAlign: ['center', 'center', 'left'],
        fontSize: [54, 54, 64],
        ...props._title,
      }}
      _description={{
        textAlign: ['center', 'center', 'left'],
        fontSize: [22, 22, 'md'],
        ...props._description,
      }}
    />
  );
};
