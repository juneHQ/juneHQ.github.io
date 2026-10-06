import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '../core/utils/hooks/use-is-mobile';
import { AnimatedCard } from './AnimatedCard';

const TOP_IMG_SRC = 'use-case-cards/identify-activation/identify-milestone-card.svg';
const BOTTOM_IMG_SRC = 'use-case-cards/identify-activation/identify-milestone-card-2.svg';

export function IdentifyActivation() {
  const isMobile = useIsMobile();

  const [currentAnim, setCurrentAnim] = useState<'init' | 'hov'>('init');

  function handleFrameClick() {
    if (!isMobile) return;
    setCurrentAnim((prev) => (prev === 'init' ? 'hov' : 'init'));
  }

  return (
    <AnimatedCard onClick={handleFrameClick} ctaText="See your struggling companies" p={[10, 10, 20]}>
      <motion.div
        style={{ position: 'relative', width: '100%', height: '100%' }}
        initial="init"
        animate={currentAnim}
        whileHover="hov"
      >
        {/* Dummy card - slides up for shuffle effect*/}
        <motion.div
          style={{ width: '100%', height: '100%' }}
          variants={{
            init: { position: 'absolute', x: '-2%', y: 500 },
            hov: { y: 0 },
          }}
        >
          <Image src={TOP_IMG_SRC} w="full" h="full" transform="rotate(-1deg)" />
        </motion.div>
        {/* Initially visible cards */}
        <motion.div
          style={{ width: '100%', height: '100%' }}
          variants={{
            init: { x: '2%', y: 0 },
            hov: { y: [0, -10, 0], transition: { duration: 0.3 } },
          }}
        >
          <Image src={BOTTOM_IMG_SRC} w="full" h="full" transform="rotate(1deg)" />
        </motion.div>
        <motion.div
          style={{ width: '100%', height: '100%' }}
          variants={{
            init: { position: 'absolute', x: '-2%', top: 0 },
            hov: { y: 500 },
          }}
        >
          <Image src={TOP_IMG_SRC} w="full" h="full" transform="rotate(-1deg)" />
        </motion.div>
      </motion.div>
    </AnimatedCard>
  );
}
