import { ColorProps, IconProps, Image, ImageProps, Box } from '@chakra-ui/react';
import { BadgeShape } from './BadgeShape';
import { motion } from 'framer-motion';

export type BadgeProps = {
  width?: IconProps['width'];
  color?: ColorProps['color'];
  icon?: string;
  empty?: boolean;
  shimmer?: boolean;
};

export const Badge: React.FC<BadgeProps> = ({ width, color, icon, empty, shimmer }) => {
  const iconProps = {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    margin: '0 auto',
    height: '45%',
  };

  return (
    <motion.div
      style={{
        display: 'inline-flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {icon && !empty ? <Image alt={icon} {...(iconProps as ImageProps)} src={icon} /> : null}
      {!empty && shimmer && <Box className="badge-shimmer"></Box>}
      <BadgeShape empty={empty} color={color} width={width} />
    </motion.div>
  );
};

export default Badge;
