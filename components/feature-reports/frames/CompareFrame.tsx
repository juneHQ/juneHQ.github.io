import {
  Box,
  Flex,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import PeopleIcon from 'components/core/design-system/components/Icon/Interface/PeopleIcon';
import { Ping } from 'components/core/design-system/components/Ping';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function CompareFrame() {
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
        staggerChildren: 0.3, // this will set the time inbetween children animation
      },
    },
  };

  return (
    <MotionBox
      key="compare"
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
      h="full"
      overflow="hidden"
    >
      <Box display={['block', 'block', 'block', 'none']} mt="10" ml="10">
        <Image alt="Compare" src="/feature-milestones/frames/compare-fallback.svg" />
      </Box>
      <Box display={['none', 'none', 'none', 'block']}>
        <Box
          borderTop="2px solid"
          borderLeft="2px solid"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="2xl"
          borderColor="gray.200"
          backgroundColor="white"
          mt="10"
          ml="10"
          h="full"
        >
          <Box p={8} pb={4}>
            <Text fontSize="lg" fontWeight="500">
              Features
            </Text>
            <Text fontSize="4xl" fontWeight="500">
              Top 5
            </Text>
          </Box>
          <TableContainer borderTop="none" borderLeft="none" borderColor="gray.200">
            <Table border="none">
              <Thead>
                <Tr>
                  <Th fontSize="xs" fontWeight="normal" fontStyle="normal" textTransform="none" letterSpacing="normal">
                    Feature
                  </Th>
                  <Th fontSize="xs" fontWeight="normal" fontStyle="normal" textTransform="none" letterSpacing="normal">
                    Adoption
                  </Th>
                  <Th
                    fontSize="xs"
                    fontWeight="normal"
                    fontStyle="normal"
                    textTransform="none"
                    letterSpacing="normal"
                    isNumeric
                  >
                    Users
                  </Th>
                </Tr>
              </Thead>
              <motion.tbody variants={eventVariants} initial="hidden" animate="visible">
                <motion.tr variants={eventVariants}>
                  <Td py={6} isolation="isolate">
                    <HStack spacing={4}>
                      <Tooltip label="This feature is currently being used.">
                        <Box>
                          <Ping />
                        </Box>
                      </Tooltip>
                      <Text fontSize="sm" fontWeight={500}>
                        📊 Loaded a report
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
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
                  </Td>
                  <Td pr={0}>
                    <PeopleIcon fontSize="lg" color="gray.600" mr={1} /> 400
                  </Td>
                </motion.tr>{' '}
                <motion.tr variants={eventVariants}>
                  <Td py={6} isolation="isolate">
                    <HStack spacing={4}>
                      <Tooltip label="This feature is currently being used.">
                        <Box>
                          <Ping />
                        </Box>
                      </Tooltip>
                      <Text fontSize="sm" fontWeight={500}>
                        🏢 Companies
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
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
                  </Td>
                  <Td pr={0}>
                    <PeopleIcon fontSize="lg" color="gray.600" mr={1} /> 200
                  </Td>
                </motion.tr>{' '}
                <motion.tr variants={eventVariants}>
                  <Td py={6} isolation="isolate">
                    <HStack spacing={4}>
                      <Tooltip label="This feature is currently being used.">
                        <Box>
                          <Ping />
                        </Box>
                      </Tooltip>
                      <Text fontSize="sm" fontWeight={500}>
                        🚀 Feature report
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
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
                        animate={{ width: '40%' }}
                        transition={{ ease: 'easeOut', duration: 0.8 }}
                      ></MotionBox>
                    </MotionBox>
                  </Td>
                  <Td pr={0}>
                    <PeopleIcon fontSize="lg" color="gray.600" mr={1} /> 100
                  </Td>
                </motion.tr>
                <motion.tr variants={eventVariants}>
                  <Td py={6} isolation="isolate">
                    <HStack spacing={4}>
                      <Tooltip label="This feature is not being used often.">
                        <Box>
                          <Ping color="gray.200" />
                        </Box>
                      </Tooltip>
                      <Text fontSize="sm" fontWeight={500}>
                        🐱 HubSpot installs
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
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
                        animate={{ width: '20%' }}
                        transition={{ ease: 'easeOut', duration: 0.8 }}
                      ></MotionBox>
                    </MotionBox>
                  </Td>
                  <Td pr={0}>
                    <PeopleIcon fontSize="lg" color="gray.600" mr={1} /> 50
                  </Td>
                </motion.tr>{' '}
                <motion.tr variants={eventVariants}>
                  <Td py={6} isolation="isolate">
                    <HStack spacing={4}>
                      <Tooltip label="This feature is currently being used.">
                        <Box>
                          <Ping />
                        </Box>
                      </Tooltip>
                      <Text fontSize="sm" fontWeight={500}>
                        📊 Loaded a report
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
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
                        animate={{ width: '10%' }}
                        transition={{ ease: 'easeOut', duration: 0.8 }}
                      ></MotionBox>
                    </MotionBox>
                  </Td>
                  <Td pr={0}>
                    <PeopleIcon fontSize="lg" color="gray.600" mr={1} /> 400
                  </Td>
                </motion.tr>
              </motion.tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </MotionBox>
  );
}
