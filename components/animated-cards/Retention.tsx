import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from './AnimatedCard';
import { Image } from '@chakra-ui/react';
import { useIsMobile } from '../core/utils/hooks/use-is-mobile';

const TOP_IMG_SRC = '/use-case-cards/retention/cohorts.svg';
const BOTTOM_IMG_SRC = '/use-case-cards/retention/drilldown.svg';

export function Retention() {
  const isMobile = useIsMobile();

  const [currentAnim, setCurrentAnim] = useState<'init' | 'hov' | 'end'>('init');

  function handleFrameClick() {
    if (!isMobile) return;
    setCurrentAnim((prev) => (prev === 'init' ? 'hov' : 'init'));
  }

  return (
    <AnimatedCard onClick={handleFrameClick} ctaText="See your company retention">
      <motion.div
        style={{ position: 'relative', width: '100%', height: '100%' }}
        initial="init"
        animate={currentAnim}
        whileHover="hov"
      >
        <motion.div
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }}
        >
          <Image src={TOP_IMG_SRC} w="full" h="full" />
        </motion.div>
        {/* Overlay transparent background */}
        <motion.div
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, background: 'black' }}
          variants={{
            init: { opacity: 0 },
            hov: { opacity: 0.25, transition: { delay: 1.3 } },
          }}
        />
        <motion.div
          style={{ position: 'absolute', width: '95%' }}
          variants={{
            init: { x: '150%', y: '45%' },
            hov: { x: '20%', transition: { duration: 0.3, delay: 1.3 } },
          }}
        >
          <Image src={BOTTOM_IMG_SRC} width="full" height="full" />
        </motion.div>

        {/* Cursor */}
        <motion.div
          style={{ position: 'absolute' }}
          variants={{
            init: { x: 650, y: 650 },
            hov: {
              transition: { type: 'spring', duration: 0.8 },
              ...(isMobile ? { x: 100, y: 200 } : { x: 180, y: 325 }),
            },
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.5)',
              boxShadow: 'rgb(255 255 255 / 40%) 0px 0px 0px 2px, rgb(0 0 0 / 10%) 0px 4px 6px',
            }}
            variants={{
              init: { scale: 1 },
              hov: {
                scale: [1, 0.8, 1],
                opacity: [1, 1, 1, 0],
                transition: { delay: 0.8, type: 'spring', duration: 0.4 },
              },
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatedCard>
  );
}
