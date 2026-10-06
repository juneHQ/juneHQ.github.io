import { PageSectionProps } from 'types/page-section-props';
import React from 'react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';

interface Props extends PageSectionProps {
  /** Add more props here */
}

export const JuneSecurityTextSection = (props: Props) => {
  return (
    <Container maxW="landingMax" px={defaultPx('305px')} {...props._wrapper}>
      <VStack align="start" spacing={12}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" fontFamily="landingHeading" fontSize="3xl" color="landing.black">
            Basics
          </Heading>
          <Text fontSize="lg" lineHeight="32px" color="landing.black">
            Our founding team includes engineers who worked at Intercom and Grofers, so we take user security seriously
            and think about it in every aspect of the product.
          </Text>
          <Text fontSize="lg" lineHeight="32px" color="landing.black">
            If you notice a security issue or have a question or concern, you can reach out to us at security@june.so
            and we'll respond as soon as possible. We currently do not have a bug bounty program.
          </Text>
        </VStack>
        <VStack align="start" spacing={6}>
          <Heading as="h2" fontFamily="landingHeading" fontSize="3xl" color="landing.black">
            Certifications
          </Heading>
          <Text fontSize="lg" lineHeight="32px" color="landing.black">
            June is GDPR ready. If you'd like to sign a the Data Processing Agreement (DPA), please fill out{' '}
            <Text as="a" color="purple.500" href="https://zendpa.com/t/june/request/new">
              this form
            </Text>{' '}
            with the information we need to send you the DPA.
          </Text>
          <Text fontSize="lg" lineHeight="32px" color="landing.black">
            Need a SOC 2 report? We have one available upon request. Please reach out to us via the in product chat.
          </Text>
          <Text fontSize="lg" lineHeight="32px" color="landing.black">
            If you want to speed up the process of receiving the SOC 2 report, please provide us with:
            
            <ul className='list-disc ml-8'>
              <li>The legal name of the company</li>
              <li>The registered address</li>
              <li>The name, title and email address of the person who will be signing the NDA and receiving the report</li>
            </ul>
          </Text>
        </VStack>
        {/* begin::FAQ */}
        <VStack align="start" spacing={6}>
          <Heading as="h2" fontFamily="landingHeading" fontSize="3xl" color="landing.black">
            FAQ
          </Heading>
          <VStack align="start">
            <Text fontSize="lg" lineHeight="32px" color="landing.black">
              {'>'}{' '}
              <Text
                as="a"
                href="https://help.june.so/en/articles/7436495-subprocessors"
                rel="noopener noreferrer"
                textDecor="underline"
                textUnderlineOffset="2px"
              >
                Who are our Subprocessors?
              </Text>
            </Text>
            <Text fontSize="lg" lineHeight="32px" color="landing.black">
              {'>'} What are our{' '}
              <Text
                as="a"
                href="https://help.june.so/en/articles/6823521-privacy-policy"
                rel="noopener noreferrer"
                textDecor="underline"
                textUnderlineOffset="2px"
              >
                Privacy policy
              </Text>{' '}
              and{' '}
              <Text
                as="a"
                href="https://help.june.so/en/articles/6823511-terms-of-service"
                rel="noopener noreferrer"
                textDecor="underline"
                textUnderlineOffset="2px"
              >
                Terms of Services
              </Text>
              ?
            </Text>
          </VStack>
        </VStack>
        {/* end::FAQ */}
      </VStack>
    </Container>
  );
};
