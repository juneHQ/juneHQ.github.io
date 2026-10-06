import { motion } from 'framer-motion';
import Badge from './Badge';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 1, y: -10 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export const BadgeProgression: React.FC<{
  badgeProps: React.ComponentProps<typeof Badge>[];
  isReversed?: boolean;
  isSlanted?: boolean;
  isStackFlipped?: boolean;
}> = ({ badgeProps, isReversed, isSlanted, isStackFlipped }) => {
  return (
    <motion.div
      style={{ display: 'flex', flexDirection: isReversed ? 'row-reverse' : 'row', gap: 8 }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {badgeProps.map((badge, index: number) => {
        return (
          <motion.div
            style={{
              marginLeft: isSlanted ? (isReversed ? '-45px' : '0px') : '0px',
              marginRight: isSlanted ? (isReversed ? '0px' : '-45px') : '0px',
              zIndex: isStackFlipped ? -index : 0,
              position: 'relative',
              top: isSlanted ? `-${index * 6}px` : '0px',
            }}
            key={index + 1}
            variants={item}
          >
            <Badge {...badge} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default BadgeProgression;
