import Head from 'next/head';
import { JuneSecurityTextSection } from 'components/security/june-security-text-section';
import { JuneSecurityCtaSection } from 'components/security/june-security-cta-section';
import { SecuritySection } from 'components/home/security-section';
import { pageStyles } from 'components/core/page-styles';
import { Navbar } from 'components/core/navbar/navbar';
import { Footer } from 'components/core/footer/footer';
import { Box } from '@chakra-ui/react';

export default function Security() {
  return (
    <>
      <Head>
        <title>June - Security</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="June - Security" />
        <meta name="description" content="The Security policy for June." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/" />
        <meta property="og:title" content="June - Security" />
        <meta property="og:description" content="The Security policy for June." />
        <meta property="twitter:url" content="https://june.so/" />
        <meta property="twitter:title" content="June - Security" />
        <meta property="twitter:description" content="The Security policy of June" />
      </Head>
      <Navbar />
      <Box zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
        <SecuritySection _wrapper={pageStyles.firstSection} />
        <JuneSecurityTextSection _wrapper={pageStyles.middleSection} />
        <JuneSecurityCtaSection _wrapper={pageStyles.middleSection} />
        <Footer _wrapper={pageStyles.lastSection} />
      </Box>
    </>
  );
}
