import { Box, Flex } from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { PageSectionProps } from '../../types/page-section-props';
import { NextResponsiveImage } from '../core/next-responsive-image';
import { checkTouchScreen } from '../core/utils/check-touch-screen';
import { QuoteCard, QuoteCardProps } from './components/quote-card';

const QUOTES: QuoteCardProps[] = [
  {
    color: 'dark',
    type: 'titled',
    title: 'Top 3',
    desc: '“June helped us find our top 3 features and the sequencing that made our users stick. This is now baked into our onboarding flow.”',
    logo: <NextResponsiveImage src="/logos-q3/soda.svg" alt="company" h={7} w="full" mb={4} />,
  },
  {
    type: 'person',
    desc: `“June feels fresh and modern, it's easy to use and the visuals are great. The reports are insightful and complete.”`,
    avatar: '/avatars-q3/thteydo_bastian.png',
    author: 'Bastian',
    role: 'Journey Owner',
    logo: <NextResponsiveImage src="/logos-q3/theydo_black.svg" alt="company" h={8} w="full" mt="10px" />,
  },
  {
    color: 'primary',
    type: 'titled',
    title: '5x',
    desc: `“Acquiring new customers is 5 times more expensive than retaining existing ones. June helps us identify churn risk users and re-engage with them before it's too late.”`,
    logo: <NextResponsiveImage src="/logos-q3/waldo_purple.svg" alt="company" h={12} w="full" />,
  },
  {
    type: 'person',
    desc: '“We know the adoption of a feature an hour after we launch it. A week later we get its update.”',
    avatar: '/avatars-q3/soda_mathisse.png',
    author: 'Mathisse',
    role: 'Product Lead',
    logo: <NextResponsiveImage src="/logos-q3/soda-colored.png" alt="company" h={6} w="full" mt="4" />,
  },
  {
    color: 'dark',
    type: 'titled',
    title: 'PMF',
    desc: '“June helps us reach PMF. The retention report tells us our persona. The user profile the most popular use cases.”',
    logo: <NextResponsiveImage src="/logos-q3/multis.svg" alt="company" h={9} w="full" mb={3.5} />,
  },
];

interface RollingQuotesSectionProps extends PageSectionProps {
  /** Add more props here */
}

export const RollingQuotesSection = (props: RollingQuotesSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (navigator) {
      const isTouch = checkTouchScreen(navigator);
      setIsMobile(isTouch);
    }
  }, []);

  const Wrapper = isMobile ? Fragment : Marquee;

  return (
    <Wrapper gradient={false}>
      <Flex overflowX="auto" ml={[0, 0, 12]} py={[4]} px={[4, 4, 12]}>
        {QUOTES.map((quote, i) => {
          const isLast = i === QUOTES.length - 1;
          return (
            <Box key={i} mr={isLast ? 0 : [6, 6, 12]}>
              <QuoteCard key={i} {...quote} />
            </Box>
          );
        })}
      </Flex>
    </Wrapper>
  );
};
