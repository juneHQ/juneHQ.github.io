import { TweetFragment } from 'types/models/tweet-fragment';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { LogoWallSection } from 'components/home/logo-wall-section';
import { pageStyles } from 'components/core/page-styles';
import { Navbar } from 'components/core/navbar/navbar';
import { Footer } from 'components/core/footer/footer';
import { Box, Text } from '@chakra-ui/react';
import { ExploreAnalyticsSection } from 'components/home/explore-analytics-section';
import { GradientHighlight } from '../components/core/highlight';
import { AiHero } from '../components/ai-launch/ai-hero';
import { AiDataSource } from '../components/ai-launch/ai-data-source';
import { AiSocials } from '../components/ai-launch/ai-socials';

export default function AiLaunch() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.june.so" />
        <title>June - Product analytics for B2B SaaS </title>
        <meta name="title" content="June - Product analytics for B2B SaaS" />
        <meta
          name="description"
          content="June is a product analytics for B2B SaaS. Get auto-generated reports focused on how companies use your product."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.june.so/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="June - Product analytics for B2B SaaS" />
        <meta
          property="og:description"
          content="June is a product analytics for B2B SaaS. Get auto-generated reports focused on how companies use your product."
        />
        <meta property="og:image" content="https://june.so/j-ai-sharing.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="https://june.so/j-ai-sharing.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta name="twitter:image" content="https://june.so/j-ai-sharing.png" />
        <meta name="twitter:url" content="https://june.so/" />
        <meta name="twitter:title" content="June - Product analytics for B2B SaaS" />
        <meta
          name="twitter:description"
          content="June is a product analytics for B2B SaaS. Get auto-generated reports focused on how companies use your product."
        />
      </Head>
      <Box
        maxW="100vw"
        overflow="clip"
        bg="purple.900"
        backgroundImage="/grain.png"
        backgroundPosition="50% 50%"
        backgroundSize="auto"
        backgroundRepeat="repeat"
        backgroundAttachment="scroll"
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <Navbar activeHref="/ai" mode="dark" />
        </motion.div>
        <AiHero />
        <LogoWallSection
          _wrapper={{ mt: [12, 12, 114], bg: 'transparent' }}
          title={
            <Text as="span" color="white">
              Trusted by the <GradientHighlight variant="lightest">next-gen B2B SaaS</GradientHighlight>
            </Text>
          }
          _hoverEffect={{
            staticBgColor: '#151531',
            staticBorderColor: '#2A2A63',
          }}
          _hoverTitle={{ color: 'white' }}
          _hoverDescription={{ color: 'white' }}
        />
        <ExploreAnalyticsSection _wrapper={{ pt: [12, 12, 120], pb: 0 }} />
        <AiDataSource _wrapper={pageStyles.middleSection} />
        <AiSocials _wrapper={{ mt: [50, 50, 16] }} />
        <Footer mode="dark" _wrapper={{ pb: [20] }} />
      </Box>
    </>
  );
}
