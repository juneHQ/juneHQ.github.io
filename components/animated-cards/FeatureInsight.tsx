import { Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard, AnimatedCardProps } from './AnimatedCard';
import { useIsMobile } from '../core/utils/hooks/use-is-mobile';

const TOP_IMG_SRC = 'use-case-cards/feature-insights/used-most.svg';
const BOTTOM_IMG_SRC = 'use-case-cards/feature-insights/used-once.svg';

export function FeatureInsight({ animatedCardProps = {} }: { animatedCardProps?: Partial<AnimatedCardProps> }) {
  const isMobile = useIsMobile();

  const [currentAnim, setCurrentAnim] = useState<'init' | 'hov'>('init');

  function handleFrameClick() {
    if (!isMobile) return;
    setCurrentAnim((prev) => (prev === 'init' ? 'hov' : 'init'));
  }

  return (
    <AnimatedCard onClick={handleFrameClick} ctaText="See you feature retention" p={[10]} {...animatedCardProps}>
      <motion.div style={{ position: 'relative' }} initial="init" animate={currentAnim} whileHover="hov">
        {/* Dummy card - slides up for shuffle effect*/}
        <motion.div
          style={{ width: '100%', height: '100%' }}
          variants={{
            init: { position: 'absolute', x: '-2%', y: 500 },
            hov: { y: 0 },
          }}
        >
          <Image src={TOP_IMG_SRC} transform="rotate(-1deg)" />
        </motion.div>
        <motion.div
          style={{ width: '100%', height: '100%' }}
          variants={{
            init: { x: '2%', y: 0 },
            hov: { y: [0, -10, 0], transition: { duration: 0.3 } },
          }}
        >
          <Image src={BOTTOM_IMG_SRC} transform="rotate(1deg)" />
        </motion.div>
        <motion.div
          style={{ width: '100%', height: '100%' }}
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
