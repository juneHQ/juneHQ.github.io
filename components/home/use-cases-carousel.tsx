import { AspectRatio, Box, Center, Container, Flex, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import { useRefScrollProgress } from 'components/feature-reports/hooks/use-ref-scroll-progress';
import MilestonesOverview from 'components/home/use-case-frames/milestones-overview';
import { AnimatePresence, motion, useTransform, useViewportScroll, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const MotionCenter = motion(Center);

interface CarouselState {
  progress: number;
  page: number;
  direction: 'up' | 'down';
}

function CarouselBox({ active, children }: React.PropsWithChildren<{ active: CarouselState }>) {
  return (
    <Box top={0} w="full" borderRadius={['none', 'none', 'none', '2xl']}>
      <Box h="full" w="full">
        {children}
      </Box>
    </Box>
  );
}

function TextBox({ active }: React.PropsWithChildren<{ active: CarouselState }>) {
  const variants: Variants = {
    enter: (direction: 'up' | 'down') => {
      return {
        position: 'absolute',
        translateY: direction === 'up' ? -85 : 85,
        opacity: 0,
        zIndex: 0,
      };
    },
    center: {
      translateY: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: 'up' | 'down') => {
      return {
        position: 'absolute',
        translateY: direction === 'up' ? 85 : -85,
        opacity: 0,
        zIndex: 0,
      };
    },
  };
  const transition = {
    translateY: { type: 'tween', ease: 'easeOut', duration: 0.6 },
    opacity: { ease: 'easeOut', duration: 0.4 },
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems={['center', 'center', 'flex-start']}
      w="full"
      h="full"
      position="relative"
    >
      <HStack spacing={[10]} mb={[16]}>
        {['Acquire', 'Activate', 'Retain'].map((text, i) => {
          const isActive = i === active.page;
          return (
            <VStack key={text}>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="0.1em"
                lineHeight="1.2"
                color="white"
              >
                {text}
              </Text>
              <Box
                visibility={isActive ? 'visible' : 'hidden'}
                w="full"
                h={[1]}
                bg="linear-gradient(135deg, #ACADF9 0%, #BE8FE1 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF);"
                borderRadius="4px"
              />
            </VStack>
          );
        })}
      </HStack>
      <Text
        display="inline-flex"
        justifyContent={['center', 'center', 'flex-start']}
        textAlign={['center', 'center', 'left']}
        width="full"
        fontSize={['3xl', '4xl', '80px']}
        lineHeight={[1.075]}
        fontWeight="700"
        h={['45px', '45px', '258px']}
        overflow="hidden"
        position="relative"
      >
        <AnimatePresence custom={active.direction} exitBeforeEnter={false}>
          {active.page === 0 && (
            <motion.span
              key="easy"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={active.direction}
              transition={transition}
            >
              <Text
                backgroundColor="white"
                bgGradient="linear(to-b, #A7ACFC 0%, rgba(104, 104, 247, 0) 100%)"
                bgClip="text"
              >
                Know who your signups are
              </Text>
            </motion.span>
          )}
          {active.page === 1 && (
            <motion.span
              key="validate"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={active.direction}
              transition={transition}
            >
              <Text
                backgroundColor="white"
                bgGradient="linear(to-b, #A7ACFC 0%, rgba(104, 104, 247, 0) 100%)"
                bgClip="text"
              >
                Find who discovers value
              </Text>
            </motion.span>
          )}
          {active.page === 2 && (
            <motion.span
              key="understand"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={active.direction}
              transition={transition}
            >
              <Text
                backgroundColor="white"
                bgGradient="linear(to-b, #A7ACFC 0%, rgba(104, 104, 247, 0) 100%)"
                bgClip="text"
              >
                Spot who returns to your product
              </Text>
            </motion.span>
          )}
        </AnimatePresence>
      </Text>
      <Box width="full" mt={[4]}>
        <Text
          textAlign={['center', 'center', 'left']}
          fontSize={['lg', 'lg', '2xl']}
          color="white"
          fontFamily="SF Pro Display, sans-serif"
          fontWeight="400"
        >
          <AnimatePresence exitBeforeEnter>
            {active.page === 0 && (
              <motion.span layout key={0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Receive Slack notifications when users perform important events. Qualify new sign-ups with enrichment,
                powered by GPT-3...
              </motion.span>
            )}
            {active.page === 1 && (
              <motion.span layout key={1} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Make sure users reach your Aha moment. Reach out to those that need help to get value from your product
                and avoid churn...
              </motion.span>
            )}
            {active.page === 2 && (
              <motion.span key={4} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Know who returns to your product and understand how active and engaged they are, and how they use your
                product...
              </motion.span>
            )}
          </AnimatePresence>
        </Text>
      </Box>
    </Flex>
  );
}

export function FeatureFrame({ active }: React.PropsWithChildren<{ active: CarouselState }>) {
  return (
    <AspectRatio ratio={1.1 / 1} w="full">
      <Box p={1} rounded="2xl" bgGradient="linear(to-b, rgba(172, 173, 249, 1), rgba(190, 143, 225, 1))">
        <Box borderRadius="xl" backgroundColor="gray.50" w="full" h="full" overflow="hidden">
          <AnimatePresence exitBeforeEnter>
            {/* Frames here */}
            {active.page === 0 && <MilestonesOverview />}
          </AnimatePresence>
        </Box>
      </Box>
    </AspectRatio>
  );
}

const initialState: CarouselState = {
  progress: 0,
  page: 0,
  direction: 'down',
};

export default function UseCasesCarousel() {
  const { scrollYProgress } = useViewportScroll();
  const [carouselRef, start, end] = useRefScrollProgress();
  const [active, setActive] = useState<CarouselState>(initialState);
  const slide = useTransform(scrollYProgress, [start, end], [0, 2]);

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setActive(() => ({
        progress: v,
        page: Math.floor(slide.get()),
        direction: scrollYProgress.getPrevious() < v ? 'down' : 'up',
      }));
    });
  }, [scrollYProgress, slide]);

  return (
    <Box
      backgroundColor="rgba(3, 3, 52, 1)"
      backgroundImage="/feature-milestones/blur-circle.svg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
    >
      <Container
        position="relative"
        ref={carouselRef}
        maxW="landingMax"
        minHeight="500vh"
        id="rail"
        px={[4, 4, 4, 12, 32]}
      >
        {/* Sticky slide container */}
        <MotionCenter layout h="100vh" position="sticky" top="0">
          {/* Slide frame */}
          <CarouselBox active={active}>
            <Flex alignItems="center" justifyContent="center" mb={[20]}>
              <Box p={1} rounded="full" bgGradient="linear(to-b, rgba(172, 173, 249, 1), rgba(190, 143, 225, 1))">
                <Box
                  borderRadius="full"
                  backgroundColor="gray.50"
                  w="full"
                  h="full"
                  overflow="hidden"
                  px={[8]}
                  py={[6]}
                  bg="landing.almostBlack.500"
                >
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="0.1em"
                    lineHeight="1.2"
                    color="white"
                  >
                    Use customer data across your customers journey
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Grid templateColumns={['1fr', '1fr', '1fr', '1fr 1fr min-content']} gap={16} h="full">
              <GridItem>
                <Center h="full" w="full">
                  <FeatureFrame active={active} />
                </Center>
              </GridItem>
              <GridItem>
                <TextBox active={active} />
              </GridItem>
              <GridItem>
                <VStack
                  h="full"
                  display={['none', 'none', 'none', 'flex']}
                  alignItems="center"
                  justifyContent="center"
                  spacing="3"
                >
                  <Box
                    rounded="full"
                    h="8px"
                    w="8px"
                    transition="background-color 1000ms ease-out"
                    backgroundColor={active.page === 0 ? 'purple.500' : 'white'}
                  />
                  <Box
                    rounded="full"
                    h="8px"
                    w="8px"
                    transition="background-color 1000ms ease-out"
                    backgroundColor={active.page === 1 ? 'purple.500' : 'white'}
                  />
                  <Box
                    rounded="full"
                    h="8px"
                    w="8px"
                    transition="background-color 1000ms ease-out"
                    backgroundColor={active.page === 2 ? 'purple.500' : 'white'}
                  />
                </VStack>
              </GridItem>
            </Grid>
          </CarouselBox>
        </MotionCenter>
      </Container>
    </Box>
  );
}
