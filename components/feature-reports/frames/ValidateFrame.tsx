import { motion, Variants } from 'framer-motion';
import { Box, Center, Flex, HStack, Image, Spacer, Text, Tooltip, VStack } from '@chakra-ui/react';
import BadgeProgression from '../BadgeProgression';

const MotionBox = motion(Box);

export default function ValidateFrame() {
  const validateVariants: Variants = {
    initial: { scale: 0.75, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <MotionBox
      key="validate"
      variants={validateVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{ type: 'spring', bounce: 0.5, duration: 0.5 }}
      justifyContent="center"
      h="full"
    >
      <Center display={['flex', 'flex', 'flex', 'flex', 'none']} h="full" w="full" p={8}>
        <Image w="full" h="full" alt="Validate" src="/feature-milestones/frames/validate-fallback.svg" />
      </Center>
      <VStack
        display={['none', 'none', 'none', 'none', 'flex']}
        spacing={['4', '4', '4', '4', '4', '6']}
        p={['8', '8', '8', '8', '8', '10']}
      >
        <MotionBox
          variants={validateVariants}
          backgroundColor="white"
          w="full"
          border="2px solid"
          borderRadius="lg"
          borderColor="gray.200"
          p={6}
        >
          <Flex direction="column" alignItems="left">
            <HStack alignItems="start">
              <Flex align="center" w="full">
                <Text fontWeight="600" color="gray.600" fontSize="sm">
                  Overall adoption
                </Text>
              </Flex>
              <HStack display={['none', 'none', 'none', 'none', 'none', 'flex']}>
                <BadgeProgression
                  badgeProps={[
                    {
                      icon: '/badges/seedling.png',
                      color: '#E6F8EC',
                      width: 9,
                    },
                    {
                      icon: '/badges/herb.png',
                      color: '#E6F8EC',
                      width: 9,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: 9,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: 9,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: 9,
                    },
                  ]}
                />
              </HStack>
            </HStack>
            <Text mb={4} fontSize="2xl" fontWeight={500} mt={[null, null, null, null, null, -6]}>
              50
            </Text>
            <Flex mb={2}>
              <Tooltip label="Previous goal" placement="top" hasArrow>
                <Text display="block" fontWeight="600" color="gray.600" fontSize="sm">
                  10 users
                </Text>
              </Tooltip>
              <Spacer />
              <Tooltip label="Next goal" placement="top" hasArrow>
                <Text display="block" fontWeight="600" color="gray.600" fontSize="sm">
                  100 users
                </Text>
              </Tooltip>
            </Flex>
            <Flex alignItems="center">
              <Image alt="Seedling" w="6" h="6" mr={4} src={'/badges/seedling.png'} />
              <Box w="full">
                <MotionBox
                  backgroundColor="gray.300"
                  h={2}
                  w="full"
                  rounded="full"
                  position="relative"
                  overflow="hidden"
                >
                  <MotionBox
                    rounded="full"
                    left="0"
                    top={0}
                    h={2}
                    bgGradient="linear(to-r, green.400, green.300)"
                    position="absolute"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ ease: 'easeOut', duration: 0.8 }}
                  ></MotionBox>
                </MotionBox>
              </Box>
              <Image alt="herb" w="6" h="6" ml={4} src={'/badges/herb.png'} />
            </Flex>
          </Flex>
        </MotionBox>
        <MotionBox
          variants={validateVariants}
          backgroundColor="white"
          w="full"
          border="2px solid"
          borderRadius="lg"
          borderColor="gray.200"
          p={6}
        >
          <Flex direction="column" alignItems="left">
            <HStack alignItems="start">
              <Flex align="center" w="full">
                <Text fontWeight="600" color="gray.600" fontSize="sm">
                  Overall usage
                </Text>
              </Flex>
              <HStack display={['none', 'none', 'none', 'none', 'none', 'flex']}>
                <BadgeProgression
                  badgeProps={[
                    {
                      icon: '/badges/new-moon.png',
                      color: 'purple.50',
                      width: 9,
                    },
                    {
                      icon: '/badges/one-fourth-moon.png',
                      color: 'purple.50',
                      width: 9,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: 9,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: 9,
                    },
                    {
                      icon: null,
                      color: 'gray.50',
                      width: 9,
                    },
                  ]}
                />
              </HStack>
            </HStack>
            <Text mb={4} fontSize="2xl" fontWeight={500} mt={[null, null, null, null, null, -6]}>
              5.2k times
            </Text>
            <Flex mb={2}>
              <Tooltip label="Previous goal" placement="top" hasArrow>
                <Text display="block" fontWeight="600" color="gray.600" fontSize="sm">
                  1,000 times
                </Text>
              </Tooltip>
              <Spacer />
              <Tooltip label="Next goal" placement="top" hasArrow>
                <Text display="block" fontWeight="600" color="gray.600" fontSize="sm">
                  10,000 times
                </Text>
              </Tooltip>
            </Flex>
            <Flex alignItems="center">
              <Image alt="Seedling" w="6" h="6" mr={4} src={'/badges/new-moon.png'} />
              <Box w="full">
                <MotionBox
                  backgroundColor="gray.300"
                  h={2}
                  w="full"
                  rounded="full"
                  position="relative"
                  overflow="hidden"
                >
                  <MotionBox
                    rounded="full"
                    left="0"
                    top={0}
                    h={2}
                    bgGradient="linear(to-r, purple.400, purple.300)"
                    position="absolute"
                    initial={{ width: 0 }}
                    animate={{ width: '50%' }}
                    transition={{ ease: 'easeOut', duration: 0.8 }}
                  ></MotionBox>
                </MotionBox>
              </Box>
              <Image alt="herb" w="6" h="6" ml={4} src={'/badges/one-fourth-moon.png'} />
            </Flex>
          </Flex>
        </MotionBox>
      </VStack>
    </MotionBox>
  );
}
