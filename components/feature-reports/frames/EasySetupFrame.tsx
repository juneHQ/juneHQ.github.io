import { motion, Variants } from 'framer-motion';
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function EasySetupFrame() {
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
          borderTop="2px solid"
          borderLeft="2px solid"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="2xl"
          borderColor="gray.200"
          backgroundColor="white"
          pt={8}
          pl={8}
          mt="10"
          ml="10"
          h="full"
        >
          <Text fontSize="2xl" fontWeight="600">
            Events
          </Text>

          <Box py={8} backgroundImage="url(/feature-milestones/tiny-confetti.png)" backgroundSize="contain">
            <Box
              backgroundColor="purple.50"
              borderLeft="2px solid"
              borderTop="2px solid"
              borderBottom="2px solid"
              borderColor="purple.500"
              p={4}
              roundedLeft="lg"
            >
              <HStack>
                <Box
                  flexShrink={0}
                  p={1}
                  px={2}
                  bg="white"
                  shadow="sm"
                  color={'primary'}
                  fontSize="sm"
                  fontFamily="mono"
                  width="fit-content"
                  borderRadius="sm"
                  fontWeight="medium"
                >
                  user-profile
                </Box>
                <Text flexShrink={0} fontSize="sm" color="purple.500">
                  was created 1 day ago
                </Text>
                <Spacer />
                <Button flexShrink={0} colorScheme="purple">
                  Set up report
                </Button>
              </HStack>
            </Box>
          </Box>
          <InputGroup mb="6">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.600" />
            </InputLeftElement>
            <Input
              cursor="default !important"
              rounded="lg"
              disabled
              roundedRight="none"
              placeholder="Search for an event..."
            />
          </InputGroup>
          <TableContainer borderTop="1px solid" borderLeft="1px solid" borderColor="gray.200" borderTopLeftRadius="lg">
            <Table border="none">
              <Thead>
                <Tr>
                  <Th fontSize="xs" fontWeight="normal" fontStyle="normal" textTransform="none" letterSpacing="normal">
                    Event name
                  </Th>
                  <Th
                    fontSize="xs"
                    fontWeight="normal"
                    fontStyle="normal"
                    textTransform="none"
                    letterSpacing="normal"
                    isNumeric
                  >
                    Count
                  </Th>
                </Tr>
              </Thead>
              <motion.tbody variants={eventVariants} initial="hidden" animate="visible">
                <motion.tr variants={eventVariants}>
                  <Td>
                    <HStack spacing={4}>
                      <Flex transform="rotate(-180deg)">
                        <MotionFlex variants={barsVariants} gridGap={0.5} initial="hidden" animate="visible">
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={3} bg={'gray.700'}></MotionFlex>
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={2} bg={'gray.700'}></MotionFlex>
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={1} bg={'gray.700'}></MotionFlex>
                        </MotionFlex>
                      </Flex>
                      <MotionBox
                        p={1}
                        px={2}
                        bg="white"
                        shadow="sm"
                        color={'primary'}
                        fontSize="sm"
                        fontFamily="mono"
                        width="fit-content"
                        borderRadius="sm"
                        fontWeight="medium"
                      >
                        Signed up
                      </MotionBox>
                    </HStack>
                  </Td>
                  <Td isNumeric>500k</Td>
                </motion.tr>
                <motion.tr variants={eventVariants}>
                  <Td>
                    <HStack spacing={4}>
                      <Flex transform="rotate(-180deg)">
                        <MotionFlex variants={barsVariants} gridGap={0.5} initial="hidden" animate="visible">
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={3} bg={'gray.300'}></MotionFlex>
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={2} bg={'gray.700'}></MotionFlex>
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={1} bg={'gray.700'}></MotionFlex>
                        </MotionFlex>
                      </Flex>
                      <Box
                        p={1}
                        px={2}
                        bg="white"
                        shadow="sm"
                        color={'primary'}
                        fontSize="sm"
                        fontFamily="mono"
                        width="fit-content"
                        borderRadius="sm"
                        fontWeight="medium"
                      >
                        Invoice created
                      </Box>
                    </HStack>
                  </Td>
                  <Td isNumeric>250k</Td>
                </motion.tr>
                <motion.tr variants={eventVariants}>
                  <Td>
                    <HStack spacing={4}>
                      <Flex transform="rotate(-180deg)">
                        <MotionFlex variants={barsVariants} gridGap={0.5} initial="hidden" animate="visible">
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={3} bg={'gray.300'}></MotionFlex>
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={2} bg={'gray.300'}></MotionFlex>
                          <MotionFlex variants={barsVariants} borderRadius={1} w={1} h={1} bg={'gray.700'}></MotionFlex>
                        </MotionFlex>
                      </Flex>
                      <Box
                        p={1}
                        px={2}
                        bg="white"
                        shadow="sm"
                        color={'primary'}
                        fontSize="sm"
                        fontFamily="mono"
                        width="fit-content"
                        borderRadius="sm"
                        fontWeight="medium"
                      >
                        KYC completed
                      </Box>
                    </HStack>
                  </Td>
                  <Td isNumeric>100k</Td>
                </motion.tr>
                <motion.tr variants={eventVariants}>
                  <Td>
                    <HStack>
                      <Flex transform="rotate(-180deg)" gridGap={0.5}>
                        <Flex borderRadius={1} w={1} h={3} bg={'gray.700'}></Flex>
                        <Flex borderRadius={1} w={1} h={2} bg={'gray.700'}></Flex>
                        <Flex borderRadius={1} w={1} h={1} bg={'gray.700'}></Flex>
                      </Flex>
                    </HStack>
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
