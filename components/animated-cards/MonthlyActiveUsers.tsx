import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '../core/utils/hooks/use-is-mobile';
import { AnimatedCard } from './AnimatedCard';

const TOP_IMG_SRC = '/use-case-cards/monthly-active-users-chart.svg';
const BOTTOM_IMG_SRC = '/use-case-cards/monthly-active-users-list.svg';

export function MonthlyActiveUsers() {
  const isMobile = useIsMobile();

  const [currentAnimation, setCurrentAnimation] = useState<'init' | 'hov'>('init');

  function handleFrameClick() {
    if (!isMobile) return;
    setCurrentAnimation((prev) => (prev === 'init' ? 'hov' : 'init'));
  }

  return (
    <AnimatedCard onClick={handleFrameClick} ctaText="See your active audit" p={[10]}>
      <motion.div style={{ position: 'relative' }} initial="init" animate={currentAnimation} whileHover="hov">
        {/* Dummy card - slides up for shuffle effect*/}
        <motion.div
          variants={{
            init: { position: 'absolute', x: '-2%', y: 500 },
            hov: { y: 0 },
          }}
        >
          <Image src={TOP_IMG_SRC} transform="rotate(-1deg)" />
        </motion.div>
        <motion.div
          variants={{
            init: { x: '2%', y: 0 },
            hov: { y: [0, -10, 0], transition: { duration: 0.3 } },
          }}
        >
          <Image src={BOTTOM_IMG_SRC} transform="rotate(1deg)" />
        </motion.div>
        <motion.div
          variants={{
            init: { position: 'absolute', x: '-2%', top: 0 },
            hov: { y: 500 },
          }}
        >
          <Image src={TOP_IMG_SRC} transform="rotate(-1deg)" />
        </motion.div>
      </motion.div>
    </AnimatedCard>
  );
}
