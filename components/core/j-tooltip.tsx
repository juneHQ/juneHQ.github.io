import React from 'react';
import { Tooltip, TooltipProps } from '@chakra-ui/react';

export interface JTooltipProps extends TooltipProps {
  children: React.ReactNode;
}

export const JTooltip = ({ children, ...rest }: JTooltipProps) => {
  return (
    <Tooltip p="2" hasArrow placement="top" bg="purple.900" textAlign="center" {...rest}>
      {children}
    </Tooltip>
  );
};
