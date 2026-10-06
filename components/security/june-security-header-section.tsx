import { BoxProps, Container, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { PageHeader } from 'components/core/page-header';
import { defaultPx } from 'components/core/utils/default-container-px';
import React from 'react';
import { PageSectionProps } from 'types/page-section-props';
import { SecurityBox } from './components/security-box';

const styles = {
  securityBox: {
    maxW: ['full', 'full', '460px'],
    // minHeight: ['145px'], // <- remove minH in favor of uniform padding (than uniform height)
  } as BoxProps,
};

interface Props extends PageSectionProps {
  /** Add more props here */
}

export const JuneSecurityHeaderSection = (props: Props) => {
  return (
    <Container maxW="landingMax" px={defaultPx('245px')} {...props._wrapper}>
      <PageHeader title="Security" _wrapper={{ align: 'center', marginBottom: '60px' }} />
      <VStack spacing={5}>
        <SimpleGrid spacing={5} columns={[1, 1, 2]}>
          <SecurityBox
            _wrapper={styles.securityBox}
            {...{
              icon: '/home/security/gdpr.svg',
              title: 'GDPR Ready',
              subtitle: (
                <>
                  Comply with General Data Protection Regulation (GDPR) and sign a Data Processing Agreement{' '}
                  <Text
                    as="a"
                    href="https://junedotso.notion.site/June-Data-Protection-Addendum-d26cd31271054064bc55332d85730d84"
                    rel="noopener noreferrer"
                    textDecor="underline"
                    textUnderlineOffset="2px"
                    target="_blank"
                  >
                    (DPA)
                  </Text>
                </>
              ),
            }}
          />
          <SecurityBox
            _wrapper={styles.securityBox}
            {...{
              icon: '/home/security/secure-servers.svg',
              title: 'Secure servers',
              subtitle:
                'Our infrastructure is managed by AWS guaranteeing the most comprehensive security and reliability',
            }}
          />
        </SimpleGrid>
        <HStack spacing={5} justifyContent="center">
          <SecurityBox
            _wrapper={styles.securityBox}
            {...{
              icon: '/home/security/ccpa.svg',
              title: 'CCPA compliant',
              subtitle: (
                <>
                  Meet all requirements of the California Consumer Privacy Act (CCPA) -{' '}
                  <Text
                    as="a"
                    href="https://www.notion.so/California-Consumer-Privacy-Act-CCPA-Disclosure-367ec57686254fa28957436a2e6c7f52"
                    rel="noopener noreferrer"
                    textDecor="underline"
                    textUnderlineOffset="2px"
                    target="_blank"
                  >
                    Read more
                  </Text>
                </>
              ),
            }}
          />
        </HStack>
      </VStack>
    </Container>
  );
};
