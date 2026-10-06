import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { Highlight } from 'components/core/highlight';
import { motion, Variants } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const ELEMENTS = [
  { id: 'signed-up', title: '👋  Signed up', percent: '100%' },
  { id: 'set-up', title: '✨  Set up', percent: '60%' },
  { id: 'aha', title: '🤯  Aha', percent: '50%' },
  { id: 'activated', title: '🌓  Activated', percent: '20%' },
];

export default function MilestonesOverview() {
  const eventVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'bounce',
        bounce: 0.5,
        delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: 0.5, // this will set the time inbetween children animation
      },
    },
  };

  const barsVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1,
    },
    visible: {
      opacity: 1,
      scale: [1.1, 1],
      transition: {
        type: 'spring',
        delayChildren: 0.5,
        staggerChildren: 0.3,
        staggerDirection: -1,
        bounce: 0.5,
      },
    },
  };

  return (
    <MotionBox
      key="easy-setup"
      initial={'initial'}
      animate={'visible'}
      exit={'exit'}
      variants={{
        initial: { y: 25, x: 25, opacity: 0 },
        visible: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            bounce: 0.5,
          },
        },
        exit: { y: 10, x: 10, opacity: 0 },
      }}
      overflow="hidden"
    >
      <Box display={['block', 'block', 'block', 'none']} mt="10" ml="10">
        <Image w="full" alt="Easy setup" src="/feature-milestones/frames/easy-setup-fallback.svg" />
      </Box>
      <Box display={['none', 'none', 'none', 'block']}>
        <Box
          borderTop="1px solid"
          borderLeft="1px solid"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="2xl"
          borderColor="gray.300"
          backgroundColor="white"
          mt="10"
          ml="10"
          h="full"
        >
          <Flex alignItems="center" justifyContent="space-between" p={[8]}>
            <Text fontSize="xl" fontWeight="500" color="gray.900">
              Milestones overview
            </Text>
            <HStack spacing={[4]}>
              <Image alt="Share" src="/share-icon.svg" boxSize={[6]} />
              <Image alt="Slack" src="/slack-icon.svg" boxSize={[6]} />
            </HStack>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            backgroundColor="purple.50"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="gray.300"
            p={[2]}
          >
            <Text color="purple.500" fontSize="sm">
              <Highlight fontWeight="semibold">100 companies - 10%</Highlight> completed milestones
            </Text>
          </Flex>
          {ELEMENTS.map((element) => (
            <Flex
              key={element.id}
              alignItems="center"
              justifyContent="space-between"
              px={[8]}
              py={[4]}
              borderBottom="1px solid"
              borderColor="gray.300"
            >
              <Text fontWeight="medium" color="gray.900" whiteSpace="nowrap" minWidth={['102px']}>
                {element.title}
              </Text>
              <Box w="full" mx={[6]}>
                <MotionBox
                  backgroundColor="gray.100"
                  h={[4]}
                  w="full"
                  rounded="base"
                  position="relative"
                  overflow="hidden"
                >
                  <MotionBox
                    rounded="base"
                    left="0"
                    top={0}
                    h={[4]}
                    bg="primary"
                    position="absolute"
                    initial={{ width: 0 }}
                    animate={{ width: element.percent }}
                    transition={{ ease: 'easeOut', duration: 0.8 }}
                  ></MotionBox>
                </MotionBox>
              </Box>
              <Box>
                <Text fontWeight="medium" color="gray.900" lineHeight={['base']} whiteSpace="nowrap">
                  {element.percent}
                </Text>
                <Text fontWeight="medium" color="purple.500" fontSize="sm" whiteSpace="nowrap">
                  View users
                </Text>
              </Box>
            </Flex>
          ))}
          <Box h={[8]} w="full"></Box>
        </Box>
      </Box>
    </MotionBox>
  );
}
