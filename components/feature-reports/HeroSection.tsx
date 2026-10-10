import { useRef, useState } from 'react';
import NextImage from 'next/image';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import { HeroVideoModal } from 'components/home/components/hero-video-modal';
import { defaultPx } from 'components/core/utils/default-container-px';
import { NextResponsiveImage } from 'components/core/next-responsive-image';
import { Box, Container, Flex, Heading, HStack, Text, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import Screenshot from './Screenshot';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const circleStyle = {
  background: 'linear-gradient(180deg, #6868F7 0%, #4C40D9 100%)',
  borderRadius: '100%',
  width: 88,
  height: 88,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const ringStyle = {
  background: 'linear-gradient(180deg, #6868F7 0%, #4C40D9 100%)',
  borderRadius: '100%',
  opacity: 0.3,
  position: 'absolute',
  width: '100%',
  height: '100%',
};

export default function HeroSection() {
  const [isOpen, setOpen] = useState(false);
  const playerRef = useRef();

  const { isOpen: isVideoModalOpen, onOpen: openVideoModal, onClose: closeVideoModal } = useDisclosure();

  useOutsideClick({
    ref: playerRef,
    handler: closeVideoModal,
  });

  const heroVariants: Variants = {
    initial: {
      opacity: 0,
      y: 75,
    },
    animate: { opacity: 1, y: 0 },
  };

  const heroTransition: Transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.4,
  };

  return (
    <Box flexDirection="column" {...{ pt: isOpen ? ['80px', '80px', 160] : ['80px', '80px', 0] }}>
      {isVideoModalOpen && (
        <HeroVideoModal
          playerRef={playerRef}
          isVideoModalOpen={isVideoModalOpen}
          closeVideoModal={closeVideoModal}
          url="https://www.youtube.com/watch?v=u6NlrTbDkTU"
        />
      )}
      <Container maxW="landingMax">
        <MotionFlex
          layout
          flexDirection="column"
          transition={{ type: 'tween', ease: 'easeOut' }}
          minH={['90vh', '90vh', isOpen ? '88vh' : '100vh']}
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          {isOpen && (
            <Box className="badge-container" display={['none', 'block']}>
              <Box className="badge">
                <Box className="badge-front"></Box>
                <Box className="badge-back"></Box>
              </Box>
            </Box>
          )}
          <AnimatePresence>
            <MotionBox layout mb={[4, 4, 4, 8]} overflow="hidden" zIndex="docked">
              <Heading
                zIndex="docked"
                as="h1"
                fontSize={['5xl', '6xl', '6xl', '8xl']}
                fontFamily="featureHeading"
                textAlign="center"
                color="landing.almostBlack.500"
                whiteSpace="nowrap"
                lineHeight="1"
                letterSpacing="-0.02em"
              >
                <MotionText
                  as="span"
                  variants={heroVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    staggerChildren: 0.1,
                    ...heroTransition,
                  }}
                  onAnimationComplete={() => setOpen(true)}
                >
                  <MotionText
                    variants={heroVariants}
                    transition={heroTransition}
                    as="span"
                    display="inline-block"
                    onClick={() => setOpen(true)}
                  >
                    Make
                  </MotionText>{' '}
                  <MotionText
                    variants={heroVariants}
                    transition={heroTransition}
                    as="span"
                    display="inline-block"
                    onClick={() => setOpen(true)}
                  >
                    features
                  </MotionText>
                  <br />
                  <MotionText
                    variants={heroVariants}
                    transition={heroTransition}
                    as="span"
                    bgGradient="linear(to-b, purple.500, purple.700)"
                    bgClip="text"
                    display="inline-block"
                    onClick={() => setOpen(true)}
                  >
                    people
                  </MotionText>{' '}
                  <MotionText
                    variants={heroVariants}
                    transition={heroTransition}
                    as="span"
                    bgGradient="linear(to-b, purple.500, purple.700)"
                    bgClip="text"
                    display="inline-block"
                  >
                    want
                  </MotionText>
                </MotionText>
              </Heading>
            </MotionBox>
            {isOpen && (
              <MotionBox
                layout
                pos="relative"
                px={defaultPx(32)}
                w="full"
                height="auto"
                pt={[0, 0, 0]}
                initial={{ y: '25vh', scale: 0.75, opacity: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  type: 'tween',
                  ease: 'anticipate',
                  opacity: {
                    duration: 1.2,
                  },
                }}
                mb={[0, 0, 16]}
              >
                <MotionFlex
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  mb={16}
                  textAlign="center"
                >
                  <Text
                    fontSize={['sm', 'sm', 22]}
                    fontWeight="regular"
                    color="primary.800"
                    display="block"
                    mb={[4, 4, 8]}
                  >
                    Use our zero-setup report to validate, iterate <br />
                    and celebrate your features.
                  </Text>
                </MotionFlex>
                <Box
                  pos="absolute"
                  sx={{ aspectRatio: '1.542' }}
                  width="full"
                  height="auto"
                  top={['-10px']}
                  left="50%"
                  transform="translateX(-50%)"
                  display={['none', 'none', 'block']}
                  zIndex="hide"
                >
                  <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <NextImage src="/home/hero/home-grid-bg.svg" alt="grid" layout="fill" />
                  </MotionBox>
                </Box>
                <motion.div layout>
                  <Box role="group" cursor="pointer" w="full" height="auto">
                    <Box pos="relative">
                      <Box
                        p={1}
                        w="full"
                        borderRadius="2xl"
                        bgGradient="linear(to-b, rgba(172, 173, 249, 1), rgba(190, 143, 225, 1))"
                        boxShadow="lg"
                      >
                        <Box borderRadius="xl" overflow="hidden">
                          <HStack
                            display={['none', 'none', 'none', 'none', 'block']}
                            px={4}
                            py={3}
                            backgroundColor="white"
                            borderBottom="1px solid"
                            borderColor="gray.100"
                          >
                            <Box
                              display="inline-block"
                              h={3}
                              w={3}
                              border="1px solid"
                              borderColor="purple.400"
                              backgroundColor="purple.300"
                              rounded="full"
                            ></Box>
                            <Box
                              display="inline-block"
                              h={3}
                              w={3}
                              border="1px solid"
                              borderColor="purple.400"
                              backgroundColor="purple.300"
                              rounded="full"
                            ></Box>
                            <Box
                              display="inline-block"
                              h={3}
                              w={3}
                              border="1px solid"
                              borderColor="purple.400"
                              backgroundColor="purple.300"
                              rounded="full"
                            ></Box>
                            <Box
                              position="absolute"
                              zIndex="docked"
                              top={['50%', '50%', '25%']}
                              left="50%"
                              transform="translate(-50%, -50%)"
                              onClick={openVideoModal}
                            >
                              <motion.div style={circleStyle} initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                                <motion.div
                                  style={ringStyle}
                                  animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, yoyo: 0, repeatDelay: 2 }}
                                />
                                <motion.div
                                  style={ringStyle}
                                  animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, yoyo: 0, repeatDelay: 2 }}
                                />
                                <NextResponsiveImage
                                  src="/home/hero/play.svg"
                                  alt="Play icon"
                                  w={['24px']}
                                  h={['28px']}
                                />
                              </motion.div>
                            </Box>
                          </HStack>
                          {/* Crucial to inline the SVG as a component otherwise Framer doesn't know how to transition the layout height. */}
                          <Screenshot />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </MotionBox>
            )}
          </AnimatePresence>
        </MotionFlex>
      </Container>
    </Box>
  );
}
