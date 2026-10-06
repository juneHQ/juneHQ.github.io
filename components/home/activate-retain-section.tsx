import { PageSectionProps } from 'types/page-section-props';
import React, { useState } from 'react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { LandingSection } from 'components/core/landing-section';
import { Highlight } from 'components/core/highlight';
import { Milestone } from 'components/animated-cards/Milestone';
import { ImproveOnboarding } from 'components/animated-cards/ImproveOnboarding';
import { IdentifyActivation } from 'components/animated-cards/IdentifyActivation';
import { FeatureInsight } from 'components/animated-cards/FeatureInsight';
import { Box, Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react';

const OPTIONS = [
  {
    title: 'Get the most out of your signups',
    description: 'Track your new sign-ups and make sure they reach your a-ha moment.',
    animatedComponent: <Milestone />,
  },
  {
    title: 'Improve your onboarding',
    description: 'Find ways to improve the main paths people take in your product.',
    animatedComponent: <ImproveOnboarding />,
  },
  {
    title: 'Launch features that make users stick',
    description: 'Get insights on who are the users that get ongoing value from your features.',
    animatedComponent: <FeatureInsight />,
  },
  {
    title: "Identify who's stuck and needs help",
    description: 'Reach out to those that need help from you to get value from your product and avoid churn.',
    animatedComponent: <IdentifyActivation />,
  },
];

interface ActivateRetainSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const ActivateRetainSection = (props: ActivateRetainSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(3);

  const activeOption = OPTIONS[activeIndex];

  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={[8, 8, 0]}>
        <GridItem pr={[0, 0, 20]}>
          <VStack align="start" spacing={6}>
            <LandingSection
              subheading={{ icon: '/people-icon.svg', text: 'Act & improve' }}
              heading={
                <>
                  <Highlight>Activate</Highlight> and <Highlight>retain</Highlight> customers
                </>
              }
            />
            <VStack align="start" spacing={4} pr={[0, 0, 12]} w="full">
              {OPTIONS.map((option, i) => {
                const isActive = i === activeIndex;
                return (
                  <Box
                    key={option.title}
                    position="relative"
                    {...(isActive && {
                      py: ['4'],
                      borderRadius: ['xl', 'unset', 'Unset'],
                      border: ['2px solid #F0F0FE', 'unset', 'Unset'],
                      boxShadow: ['0px 1px 4px rgba(0, 0, 0, 0.1)', 'unset', 'Unset'],
                      px: ['4', 'unset', 'Unset'],
                      w: ['full', 'unset', 'Unset'],
                    })}
                    onClick={() => setActiveIndex(i)}
                  >
                    {isActive && (
                      <Box
                        display={['none', 'none', 'block']}
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="auto"
                        translateX="-50%"
                        translateY="-50%"
                        w={'calc(100% + 48px)'}
                        h="full"
                        borderRadius="xl"
                        border="2px solid #F0F0FE"
                        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.1)"
                        zIndex="hide"
                      />
                    )}
                    <VStack align="start" spacing={1}>
                      <Text
                        fontFamily="landingHeading"
                        lineHeight="7"
                        cursor="pointer"
                        _hover={{ color: 'primary' }}
                        {...(isActive && {
                          color: 'primary',
                          fontWeight: 'bold',
                        })}
                      >
                        {option.title}
                      </Text>
                      {isActive && <Text fontFamily="landingHeading">{option.description}</Text>}
                    </VStack>
                  </Box>
                );
              })}
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>{activeOption.animatedComponent}</GridItem>
      </Grid>
    </Container>
  );
};
