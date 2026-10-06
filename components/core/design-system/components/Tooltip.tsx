import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  size: 'md',
  bg: 'red.500',
};

const sizes = {
  sm: defineStyle({
    fontSize: 'sm',
    px: 1,
    py: 0.5,
    borderRadius: 'lg',
    bg: 'red.500',
  }),
  md: defineStyle({
    px: 1,
    py: 0.5,
    borderRadius: 'lg',
    fontSize: 'md',
  }),
};



const Tooltip = defineStyleConfig({ baseStyle, sizes })


export default Tooltip;

