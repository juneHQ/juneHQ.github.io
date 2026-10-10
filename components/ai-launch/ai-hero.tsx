import { Box, Container, Flex, Heading, HStack, Text, useOutsideClick, useDisclosure } from '@chakra-ui/react';
import { NextResponsiveImage } from 'components/core/next-responsive-image';
import { defaultPx } from 'components/core/utils/default-container-px';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { gradients, shadows } from '../core/gradients';
import styles from './ai-hero.module.css';
import { HeroVideoModal } from 'components/home/components/hero-video-modal';

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

const heroVariants: Variants = {
  initial: { opacity: 0, y: 75 },
  animate: { opacity: 1, y: 0 },
};

const heroTransition: Transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.4,
};

const springVariants: Variants = {
  loaded: { scale: [1, 0.9, 1], transition: { delay: 0.5, duration: 3, repeat: Infinity } },
};

export function AiHero() {
  const playerRef = useRef();

  const [isOpen, setOpen] = useState(false);
  const { isOpen: isVideoModalOpen, onOpen: openVideoModal, onClose: closeVideoModal } = useDisclosure();

	useOutsideClick({
		ref: playerRef,
		handler: closeVideoModal,
	});

	return (
		<>
			{isVideoModalOpen && (
				<HeroVideoModal playerRef={playerRef} isVideoModalOpen={isVideoModalOpen} closeVideoModal={closeVideoModal} url="https://june-6097.wistia.com/medias/0qv0jshjno" />
			)}
			<Box flexDirection="column" {...{ pt: isOpen ? ['80px', '80px', 160] : ['80px', '80px', 0] }}>
				<Container maxW="landingMax">
					<MotionFlex
						layout
						flexDirection="column"
						transition={{ type: 'tween', ease: 'easeOut' }}
						minH={['90vh', '90vh', isOpen ? '88vh' : '100vh']}
						justifyContent="center"
						alignItems="center"
					>
						<AnimatePresence>
							<MotionBox layout mb={[4, 4, 4, 6]} overflow="hidden">
								<Heading
									as="h1"
									fontSize={[54, 54, 96]}
									lineHeight={[1.2]}
									textAlign={['left', 'left', 'center']}
									color="white"
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
											A<span className={styles.cursor} /> new way
										</MotionText>{' '}
										<MotionText
											variants={heroVariants}
											transition={heroTransition}
											as="span"
											display="inline-block"
											onClick={() => setOpen(true)}
										>
											to do
										</MotionText>
										<br />
										<MotionText
											variants={heroVariants}
											transition={heroTransition}
											as="span"
											filter={shadows.PRIMARY_LIGHTEST}
											bgGradient={gradients.PRIMARY_LIGHTEST}
											bgClip="text"
											display="inline-block"
											onClick={() => setOpen(true)}
										>
											product
										</MotionText>{' '}
										<MotionText
											variants={heroVariants}
											transition={heroTransition}
											as="span"
											filter={shadows.PRIMARY_LIGHTEST}
											bgGradient={gradients.PRIMARY_LIGHTEST}
											bgClip="text"
											display="inline-block"
										>
											analytics
										</MotionText>
									</MotionText>
								</Heading>
							</MotionBox>
							{isOpen && (
								<MotionBox
									layout
									pos="relative"
									px={[0, 0, defaultPx(32)]}
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
										gap={[16]}
										textAlign="center"
									>
										<Text
											textAlign={['left', 'left', 'center']}
											fontSize={['normal', 'normal', 22]}
											color="white"
											maxW={['604px']}
										>
											June AI lets you answer complex product questions using your favourite language: <Text textDecoration="line-through" as="span">SQL</Text> English. Powered by GPT-4.
										</Text>
									</MotionFlex>
									<motion.div layout>
                    <Box role="group" cursor="pointer" w="full" height="auto" onClick={openVideoModal}>
                      <Box pos="relative">
												<Box position="absolute" left={['-156px']} right={['-156px']} top={['-112px']}>
													<NextResponsiveImage
														src="/home-grid-june-ai.svg"
														alt="Grid"
														sx={{ aspectRatio: '1.8173076923' }}
													/>
												</Box>
												<Box
													bg="purple.600"
													filter="blur(180px)"
													position="absolute"
													top={['-32px']}
													left={['-32px']}
													right={['-32px']}
													bottom={['-32px']}
													zIndex="hide"
												/>
                        <Box
                          position="absolute"
                          zIndex="docked"
                          top={['50%', '50%', '25%']}
                          left="50%"
                          transform="translate(-50%, -50%)"
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
                            <NextResponsiveImage src="/home/hero/play.svg" alt="Play icon" w={['24px']} h={['28px']} />
                          </motion.div>
                        </Box>
												<Box w="full" borderRadius="2xl" >
													<Box borderRadius="xl" overflow="hidden">
														<NextResponsiveImage
															sx={{ aspectRatio: '1.4689265537' }}
															src="/j-ai-product-window.svg"
															alt="June AI Product"
														/>
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
		</>
	);
}
