import { Box, HStack } from '@chakra-ui/react';
import { FeatureInsight } from 'components/animated-cards/FeatureInsight';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function InsightsFrame() {
  return (
    <MotionBox
      key="insights"
      initial={'initial'}
      animate={'visible'}
      exit={'exit'}
      variants={{
        initial: { opacity: 0 },
        visible: {
          opacity: 1,
        },
        exit: { y: 10, x: 10, opacity: 0 },
      }}
      h="full"
      w="full"
      borderTop="2px solid"
      borderLeft="2px solid"
      borderTopLeftRadius="xl"
      borderBottomRightRadius="2xl"
      borderColor="gray.200"
      overflow="hidden"
    >
      <HStack h="full" justifyContent="center">
        <FeatureInsight animatedCardProps={{ bgType: 'transparent', sx: { aspectRatio: 'unset' } }} />
      </HStack>
    </MotionBox>
  );
}
