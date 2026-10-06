import { PageSectionProps } from 'types/page-section-props';
import { useState } from 'react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { LandingSection } from 'components/core/landing-section';
import { Highlight } from 'components/core/highlight';
import { SlackLive } from 'components/animated-cards/SlackLive';
import { MonitorCompanies } from 'components/animated-cards/MonitorCompanies';
import { Hubspot } from 'components/animated-cards/Hubspot';
import { Box, Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react';

const OPTIONS = [
  {
    title: 'Company activity Slack alerts',
    description:
      'Receive Slack notifications when users perform important events. Identify new sign-ups and upsell opportunities.',
    animatedComponent: <SlackLive />,
  },
  {
    title: 'Send product usage data to HubSpot',
    description: "Connect your account to HubSpot and sync your users' properties into your CRM.",
    animatedComponent: <Hubspot />,
  },
  {
    title: 'Company-level metrics',
    description:
      'Understand how engaged companies are, how many company users are active, and how they use your product.',
    animatedComponent: <MonitorCompanies />,
  },
];

interface CustomersUsageSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const CustomersUsageSection = (props: CustomersUsageSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const activeOption = OPTIONS[activeIndex];

  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={[8, 8, 0]}>
        <GridItem pr={[0, 0, 20]}>
          <VStack align="start" spacing={6}>
            <LandingSection
              subheading={{ icon: '/sidebar-icon.svg', text: 'Understand in detail' }}
              heading={
                <>
                  <Highlight>Identify</Highlight> promising accounts
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
