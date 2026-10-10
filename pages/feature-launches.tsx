import Head from 'next/head';
import { motion } from 'framer-motion';
import { LogoCloud } from 'components/home/logo-cloud';
import HeroSection from 'components/feature-reports/HeroSection';
import Carousel from 'components/feature-reports/Carousel';
import { pageStyles } from 'components/core/page-styles';
import { Navbar } from 'components/core/navbar/navbar';
import { Footer } from 'components/core/footer/footer';
import { Box, Text } from '@chakra-ui/react';


export default function FeatureLaunches() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.june.so" />
        <title>June - The ultimate feature launch report for B2B SaaS</title>
        <meta name="title" content="June - The ultimate feature launch report for B2B SaaS" />
        <meta
          name="description"
          content="June's zero-setup report to validate, iterate
          and celebrate your new features. The ultimate report for B2B SaaS"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.june.so/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="June - The ultimate feature launch report for B2B SaaS" />
        <meta
          property="og:description"
          content="June's zero-setup report to validate, iterate
          and celebrate your new features. The ultimate report for B2B SaaS."
        />
        <meta property="og:image" content="https://june.so/feature/feature-og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:src" content="https://june.so/feature/feature-og-image.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta property="twitter:image" content="https://june.so/feature/feature-og-image.png" />
        <meta property="twitter:url" content="https://june.so/" />
        <meta property="twitter:title" content="June - The ultimate feature launch report for B2B SaaS" />
        <meta
          property="twitter:description"
          content="June's zero-setup report to validate, iterate
          and celebrate your new features. The ultimate report for B2B SaaS."
        />
      </Head>
      <Box maxW="100vw" overflow="clip">
        <Box>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
            <Navbar activeHref="/feature-launches" />
          </motion.div>
        </Box>
        <Box zIndex="docked" w="100%" maxW="100vw">
          <HeroSection />
        </Box>
        <LogoCloud
          title={
            <Text as="span" color="purple.900">
              Trusted by the{' '}
              <Text as="span" bgGradient="linear(to-b, #6868F7, #3E3E94)" bgClip="text">
                next-gen B2B SaaS
              </Text>
            </Text>
          }
        />
        <Box my={[12, 0, 0]} />
        <Carousel />
        <Footer _wrapper={pageStyles.lastSection} />
      </Box>
    </>
  );
}
