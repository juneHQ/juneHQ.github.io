import { Box, Container, Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { FeatureAudit } from 'components/animated-cards/FeatureAudit';
import { ImproveOnboarding } from 'components/animated-cards/ImproveOnboarding';
import { MonthlyActiveUsers } from 'components/animated-cards/MonthlyActiveUsers';
import { Retention } from 'components/animated-cards/Retention';
import { Highlight } from 'components/core/highlight';
import { LandingSection } from 'components/core/landing-section';
import { defaultPx } from 'components/core/utils/default-container-px';
import React, { useState } from 'react';
import { PageSectionProps } from 'types/page-section-props';

const OPTIONS = [
  {
    title: 'Active users',
    description: '',
    animatedComponent: <MonthlyActiveUsers />,
  },
  {
    title: 'User retention',
    description: '',
    animatedComponent: <Retention />,
  },
  {
    title: 'Product funnels',
    description: 'Measure and visualise whether your customers are making it through your happy paths successfully.',
    animatedComponent: <ImproveOnboarding />,
  },
  {
    title: 'Understand what companies are doing',
    description: '',
    animatedComponent: <FeatureAudit />,
  },
];

interface WhatWorksSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const WhatWorksSection = (props: WhatWorksSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(2);

  const activeOption = OPTIONS[activeIndex];

  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={[8, 8, 0]}>
        <GridItem pr={[0, 0, 20]}>
          <VStack align="start" spacing={6}>
            <LandingSection
              subheading={{ icon: '/mouse-click-icon.svg', text: 'High level metrics' }}
              heading={
                <>
                  Know what your product is used & <Highlight>what works</Highlight>
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
