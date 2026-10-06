import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useTransform, useViewportScroll, Variants } from 'framer-motion';
import { AspectRatio, Box, Center, Container, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { useRefScrollProgress } from './hooks/use-ref-scroll-progress';
import ValidateFrame from './frames/ValidateFrame';
import InsightsFrame from './frames/InsightsFrame';
import EasySetupFrame from './frames/EasySetupFrame';
import CompareFrame from './frames/CompareFrame';
import CelebrateFrame from './frames/CelebrateFrame';
import BadgeProgression from './BadgeProgression';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);

export interface CarouselState {
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
      <Text
        display="inline-flex"
        justifyContent={['center', 'center', 'flex-start']}
        textAlign={['center', 'center', 'left']}
        width="full"
        fontSize={['3xl', '4xl', '6xl']}
        fontWeight="700"
        h={['45px', '45px', '85px']}
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
                bgGradient="linear(to-b, purple.600, rgba(104, 104, 247, 0.2))"
                bgClip="text"
              >
                Easy setup
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
                bgGradient="linear(to-b, purple.600, rgba(104, 104, 247, 0.2))"
                bgClip="text"
              >
                Validate
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
                bgGradient="linear(to-b, purple.600, rgba(104, 104, 247, 0.2))"
                bgClip="text"
              >
                Iterate
              </Text>
            </motion.span>
          )}
          {active.page === 3 && (
            <motion.span
              key="celebrate"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={active.direction}
              transition={transition}
            >
              <Text
                backgroundColor="white"
                bgGradient="linear(to-b, purple.600, rgba(104, 104, 247, 0.2))"
                bgClip="text"
              >
                Celebrate
              </Text>
            </motion.span>
          )}
          {active.page >= 4 && (
            <motion.span
              key="compare"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={active.direction}
              transition={transition}
            >
              <Text
                backgroundColor="white"
                bgGradient="linear(to-b, purple.600, rgba(104, 104, 247, 0.2))"
                bgClip="text"
              >
                Compare
              </Text>
            </motion.span>
          )}
        </AnimatePresence>
      </Text>
      <Box width="full">
        <Text
          textAlign={['center', 'center', 'left']}
          mt={2}
          fontSize={['lg', 'lg', '2xl']}
          color="white"
          fontFamily="SF Pro Display, sans-serif"
          fontWeight="400"
        >
          <AnimatePresence exitBeforeEnter>
            {active.page === 0 && (
              <motion.span layout key={0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                It only takes one line of code to set up your report. We detect your new events and create this report
                for you automatically.
              </motion.span>
            )}
            {active.page === 1 && (
              <motion.span layout key={1} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Measure overall how many users or companies use, adopt and return to your features to validate its
                success.
              </motion.span>
            )}
            {active.page === 2 && (
              <motion.span key={4} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Get feedback on your features from the right people. Talk to who loved your feature, and who tried it
                once and never came back.
              </motion.span>
            )}
            {active.page === 3 && (
              <motion.span key={2} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Why isn’t your team celebrating your first 5, 50 and 500 users? Our reports have milestones your team
                can be proud to reach.
              </motion.span>
            )}
            {active.page >= 4 && (
              <motion.span key={3} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Compare your launches with the other features in your product. Understand adoption and usage compared to
                the rest of your product.
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
            {active.page === 0 && <EasySetupFrame />}
            {active.page === 1 && <ValidateFrame />}
            {active.page === 2 && <InsightsFrame />}
            {active.page === 3 && <CelebrateFrame />}
            {active.page >= 4 && <CompareFrame />}
          </AnimatePresence>
        </Box>
      </Box>
    </AspectRatio>
  );
}

export default function Carousel() {
  const { scrollYProgress } = useViewportScroll();
  const [carouselRef, start, end] = useRefScrollProgress();
  const [active, setActive] = useState<CarouselState>({
    progress: 0,
    page: 0,
    direction: 'down',
  });
  const slide = useTransform(scrollYProgress, [start, end], [0, 5]);

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
                  <Box
                    rounded="full"
                    h="8px"
                    w="8px"
                    transition="background-color 1000ms ease-out"
                    backgroundColor={active.page === 3 ? 'purple.500' : 'white'}
                  />
                  <Box
                    rounded="full"
                    h="8px"
                    w="8px"
                    transition="background-color 1000ms ease-out"
                    backgroundColor={active.page === 4 ? 'purple.500' : 'white'}
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
