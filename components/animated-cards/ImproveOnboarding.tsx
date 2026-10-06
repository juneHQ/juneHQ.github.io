import { useState } from 'react';
import { isValidMotionProp, motion } from 'framer-motion';
import { chakra, Image, shouldForwardProp } from '@chakra-ui/react';
import { AnimatedCard } from './AnimatedCard';
import { useIsMobile } from '../core/utils/hooks/use-is-mobile';

const MotionBox = chakra(motion.div, {
  /** Allow motion props and non-Chakra props to be forwarded */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const TOP_IMG_SRC = '/use-case-cards/improve-onboarding/funnel.svg';
const BOTTOM_IMG_SRC = '/use-case-cards/improve-onboarding/funnel-conversion.svg';

export function ImproveOnboarding() {
  const isMobile = useIsMobile();

  const [currentAnim, setCurrentAnim] = useState<'init' | 'hov' | 'end'>('init');

  function handleFrameClick() {
    if (!isMobile) return;
    setCurrentAnim((prev) => (prev === 'init' ? 'hov' : 'init'));
  }

  return (
    <AnimatedCard onClick={handleFrameClick}>
      <MotionBox position="relative" width="full" height="full" initial="init" animate={currentAnim} whileHover="hov">
        <MotionBox position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width={['85%', '80%']}>
          <Image src={TOP_IMG_SRC} width="full" height="full" alt="Frame" />
        </MotionBox>
        {/* Overlay transparent background */}
        <MotionBox
          position="absolute"
          bg="black"
          width="full"
          height="full"
          top={0}
          left={0}
          variants={{
            init: { opacity: 0 },
            hov: {
              opacity: 0.25,
              transition: { delay: 1.3 },
            },
          }}
        />
        <MotionBox
          position="absolute"
          width="95%"
          variants={{
            init: { x: '150%', y: '45%' },
            hov: { x: '20%', transition: { duration: 0.3, delay: 1.3 } },
          }}
        >
          <Image src={BOTTOM_IMG_SRC} width="full" height="full" alt="Frame" />
        </MotionBox>

        {/* Cursor */}
        <MotionBox
          position="absolute"
          variants={{
            init: { x: 650, y: 650 },
            hov: {
              transition: { type: 'spring', duration: 0.8 },
              ...(isMobile ? { x: 180, y: 200 } : { x: 300, y: 325 }),
            },
          }}
        >
          <MotionBox
            position="absolute"
            width="32px"
            height="32px"
            rounded="50%"
            background="rgba(0, 0, 0, 0.5)"
            boxShadow="rgb(255 255 255 / 40%) 0px 0px 0px 2px, rgb(0 0 0 / 10%) 0px 4px 6px"
            variants={{
              init: { scale: 1 },
              hov: {
                scale: [1, 0.8, 1],
                opacity: [1, 1, 1, 0],
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 0.4,
                },
              },
            }}
          />
        </MotionBox>
      </MotionBox>
    </AnimatedCard>
  );
}
