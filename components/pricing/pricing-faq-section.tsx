import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { SectionHeader } from 'components/core/section-header';
import { defaultPx } from 'components/core/utils/default-container-px';
import { PageSectionProps } from 'types/page-section-props';
import React from 'react';
import Link from 'next/link';

const FAQs = [
  {
    question: 'How secure is June?',
    answer: (
      <>
        Security is one of our biggest priorities at June.{' '}
        <Text as="a" textDecoration="underline">
          <Link href="/security" prefetch={false}>
            On this page
          </Link>
        </Text>
        , we have provided information about the security of your data, our general security practices and how you can
        reach a member of the security team if you have questions that haven't been answered below. We also offer to
        sign DPA.
      </>
    ),
  },
  {
    question: 'What is Segment?',
    answer:
      'Segment is a Customer Data Platform (CDP), they provide a service that simplifies collecting and using data from the users of your digital properties (websites, apps, etc). With Segment, you can collect, transform, and send user behaviour data to multiple destinations, including June.',
  },
  {
    question: 'Can I import my historical data?',
    answer: (
      <>
        Yes! If you have an Amplitude account you can import data from it during the onboarding. In alternative if you
        have a Segment business plan, then Segment can automatically send historical data to June, it's called the
        Historical replay feature. If you don't we can import it with you using{' '}
        <Text
          as="a"
          textDecoration="underline"
          href="https://www.june.so/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          our API
        </Text>
        . Just reach out after you sign up 😊
      </>
    ),
  },
  {
    question: 'Do you have a free plan?',
    answer:
      "Yes, we offer a free plan that's tailored to smaller teams who are just getting started with analytics tracking.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards and ACH. You can choose to be billed via invoice for annual subscriptions.',
  },
  {
    question: 'What happens if we go over my limit?',
    answer: 'Your team will be automatically upgraded at your next billing cycle based on your usage of the product.',
  },
  {
    question: 'What happens if I cancel my paid plan?',
    answer:
      "When you cancel your plan, you will remain on the plan until the end of your billing cycle, at which time the plan will be canceled and we'll downgrade you to our free tier.",
  },
];

interface PricingFaqSectionProps extends PageSectionProps {}

export const PricingFaqSection = (props: PricingFaqSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(182)} {...props._wrapper}>
      <VStack align="start" spacing={16}>
        <SectionHeader title="Questions around our pricing" />
        <SimpleGrid columns={[1, 1, 2]} columnGap={[8, 8, 8, 12, 167]} rowGap={[10, 10, 8]}>
          {FAQs.map((faq) => (
            <VStack key={faq.question} align="start" spacing={3}>
              <Heading as="h3" color="landing.black">
                {faq.question}
              </Heading>
              <Text lineHeight={1.75} color="landing.gray">
                {faq.answer}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
