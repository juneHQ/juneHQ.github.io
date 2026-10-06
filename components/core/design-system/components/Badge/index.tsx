import { getColor, mode, transparentize } from '@chakra-ui/theme-tools';
import type { SystemStyleFunction } from '@chakra-ui/theme-tools';

const baseStyle = {
  lineHeight: '1.2',
  fontWeight: 'medium',
  fontSize: 'xs',
  px: 2,
  py: 1,
  borderRadius: 'sm',
  bg: 'gray.50',
  color: 'gray.600',
  textTransform: 'none',
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const dark = transparentize(`${c}.500`, 0.6)(theme);
  return {
    bg: mode(`${c}.500`, dark)(props),
    color: mode(`white`, `whiteAlpha.800`)(props),
  };
};

const variantSubtle: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme);
  return {
    bg: mode(`${c}.50`, darkBg)(props),
    color: mode(`${c}.600`, `${c}.200`)(props),
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const darkColor = transparentize(`${c}.200`, 0.8)(theme);
  const lightColor = getColor(theme, `${c}.500`);
  const color = mode(lightColor, darkColor)(props);

  return {
    color,
    boxShadow: `inset 0 0 0px 1px ${color}`,
  };
};

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: 'subtle',
  colorScheme: 'gray',
};

const Badge = {
  baseStyle,
  variants,
  defaultProps,
};

export default Badge;
