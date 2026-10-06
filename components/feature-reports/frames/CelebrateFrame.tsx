import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Spacer,
  StackDivider,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import BadgeProgression from '../BadgeProgression';

const MotionBox = motion(Box);

export default function CelebrateFrame() {
  const celebrateVariants: Variants = {
    initial: { scale: 0.75, y: 35, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };
  const badgeSize = useBreakpointValue({
    base: '65px',
    '2xl': '75px',
  });

  return (
    <MotionBox
      key="celebrate"
      variants={celebrateVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{ type: 'spring', bounce: 0.5, duration: 0.5 }}
      h="full"
    >
      <Box display={['block', 'block', 'block', 'block', 'none']} p={[4, 4, 8]} pb={0}>
        <Image alt="Celebrate" src="/feature-milestones/frames/celebrate-fallback.svg" />
      </Box>

      <Box display={['none', 'none', 'block', 'block']} p={8} pb={0}>
        <Box
          w="full"
          h="full"
          borderTop="2px solid"
          borderLeft="2px solid"
          borderRight="2px solid"
          borderTopRadius="xl"
          borderColor="gray.200"
          backgroundColor="white"
          position="relative"
          p={6}
        >
          <Center isolation="isolate" p={6} pb={4}>
            <Flex gridGap={2} justifyContent="center" w="full">
              <Flex>
                <BadgeProgression
                  badgeProps={[
                    {
                      icon: '/badges/seedling.png',
                      color: '#E6F8EC',
                      width: badgeSize,
                    },
                    {
                      icon: '/badges/herb.png',
                      color: '#E6F8EC',
                      width: badgeSize,
                    },
                    {
                      icon: '/badges/potted-plant.png',
                      color: '#E6F8EC',
                      width: badgeSize,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: badgeSize,
                    },
                  ]}
                  isReversed
                  isSlanted
                  isStackFlipped
                />
              </Flex>
              <Flex direction="row-reverse">
                <BadgeProgression
                  badgeProps={[
                    {
                      icon: '/badges/new-moon.png',
                      color: 'purple.50',
                      width: badgeSize,
                    },
                    {
                      icon: '/badges/one-fourth-moon.png',
                      color: 'purple.50',
                      width: badgeSize,
                    },
                    {
                      icon: '/badges/half-moon.png',
                      color: 'purple.50',
                      width: badgeSize,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: badgeSize,
                    },
                  ]}
                  isStackFlipped
                  isSlanted
                />
              </Flex>
            </Flex>
          </Center>
          <Center mb={6}>
            <Box textAlign="center">
              <Text fontWeight={500} mb={2}>
                Your most recent feature goals
              </Text>
              <Text color={'gray.600'} fontSize="sm">
                Great work so far. When you reach all goals, we've got something for you.
              </Text>
            </Box>
          </Center>
          <Box border="1px solid" borderBottom="none" borderColor="gray.200" borderTopRadius="lg">
            <VStack spacing={0} divider={<StackDivider borderColor="gray.200" />}>
              <HStack w="full" fontSize="sm" p={3} spacing={3}>
                <Image alt="herb" w="5" h="5" src={'/badges/seedling.png'} />
                <Text>1 user</Text>
                <Spacer />
                <Text color="gray.600">9 Jan 2023 at 14:29</Text>
              </HStack>
              <HStack w="full" fontSize="sm" p={3} spacing={3}>
                <Image alt="herb" w="5" h="5" src={'/badges/herb.png'} />
                <Text>10 users</Text>
                <Spacer />
                <Text color="gray.600">9 Jan 2023 at 14:29</Text>
              </HStack>
              <HStack w="full" fontSize="sm" p={3} spacing={3}>
                <Image alt="herb" w="5" h="5" src={'/badges/three-fourths-moon.png'} />
                <Text>100 times used</Text>
                <Spacer />
                <Text color="gray.600">9 Jan 2023 at 14:29</Text>
              </HStack>
              <HStack w="full" fontSize="sm" p={3} spacing={3}>
                <Image alt="herb" w="5" h="5" src={'/badges/half-moon.png'} />
                <Text>1,000 times used</Text>
                <Spacer />
                <Text color="gray.600">9 Jan 2023 at 14:29</Text>
              </HStack>
              <HStack w="full" fontSize="sm" p={3} spacing={3}>
                <Image alt="herb" w="5" h="5" src={'/badges/seedling.png'} />
                <Text>1 user</Text>
                <Spacer />
                <Text color="gray.600">9 Jan 2023 at 14:29</Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}
