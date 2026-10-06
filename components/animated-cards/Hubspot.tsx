import { chakra, Image, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '../core/utils/hooks/use-is-mobile';
import { AnimatedCard } from './AnimatedCard';

const MotionBox = chakra(motion.div, {
  /** Allow motion props and non-Chakra props to be forwarded */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const BG = '/use-case-cards/hubspot-bg.svg';
const BADGE = '/use-case-cards/hubspot-badge.svg';
const CARD = '/use-case-cards/hubspot-card.svg';

export function Hubspot() {
  const isMobile = useIsMobile();

  const [currentAnim, setCurrentAnim] = useState<'init' | 'hov' | 'end'>('init');

  function handleFrameClick() {
    if (!isMobile) return;
    setCurrentAnim((prev) => (prev === 'init' ? 'hov' : 'init'));
  }

  return (
    <AnimatedCard
      ctaText="Send product usage data to HubSpot"
      bgType="pale"
      onClick={handleFrameClick}
      p={[10]}
      hideInteractiveIndicator={true}
    >
      <MotionBox position="relative">
        <Image src={BG} alt="Card background" />
        <Image
          src={BADGE}
          alt="Active badge"
          position="absolute"
          bottom="0"
          right={[4, 7]}
          transform="translateY(50%)"
          width={['36', 'unset']}
        />
        <Image
          src={CARD}
          alt="Card"
          position="absolute"
          top="17px"
          right="-34px"
          transform="rotate(1deg)"
          width={['48', 'unset']}
        />
        <Image
          src={CARD}
          alt="Tilted card"
          position="absolute"
          top="21px"
          right="-26px"
          transform="rotate(-1deg)"
          width={['48', 'unset']}
        />
      </MotionBox>
    </AnimatedCard>
  );
}
