import React from 'react';
import Head from 'next/head';
import { Testimonials } from 'components/pricing/testimonials';
import { PricingTier } from 'components/pricing/pricing-tier';
import { FaqPricing } from 'components/pricing/faq-pricing';
import { LogoCloud } from 'components/home/logo-cloud';
import { Navbar } from 'components/core/navbar/navbar';
import { NewFooter } from 'components/core/footer/new-footer';
import { Box } from '@chakra-ui/react';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>June - Pricing Plans</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="June - Affordable Pricing Plans" />
        <meta
          name="description"
          content="Discover affordable pricing plans tailored to fit your needs at June. Choose from a variety of options designed for startups to large enterprises. Find your perfect match and start scaling today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/pricing" />
        <meta property="og:title" content="June - Flexible Pricing Plans" />
        <meta
          property="og:description"
          content="Explore June's flexible and competitive pricing plans. Whether you're a startup or a large enterprise, we have the perfect plan to help you grow."
        />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content="https://june.so/pricing" />
        <meta property="twitter:title" content="June - Pricing Plans" />
        <meta
          property="twitter:description"
          content="Find the perfect June pricing plan for your business. From startups to large enterprises, scale effectively with our tailored plans."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://june.so/social.png" />
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
      <Navbar href="/pricing" />
      <Box zIndex="docked" w="100%" maxW="100vw" overflowX="hidden" overflowY="hidden">
        <PricingTier />
        <LogoCloud />
        {/* <FourTierPricing />  */}
        <FaqPricing />
        <Testimonials
          testimonials={[
            {
              companyLogo: '/logos-q3/luminovo.svg',
              quote:
                "We started using June when one of our biggest customers churned at surprise. After that we sat down with the June team and worked on a great dashboard and workflows. It didn't happen anymore",
              image: '/logos-q3/timon.svg',
              name: 'Timon Ruban',
              title: 'Co-founder of Luminovo',
            },
            {
              companyLogo: '/logos-q3/arrows_logo.svg',
              quote:
                'One of the best things about June is that it is a platform that can be used by our entire team, not just the product manager. This has enabled us to get everyone on board with our data-driven approach, and ensures that everyone has access to the insights they need to do their job effectively',
              image: '/logos-q3/daniel_arrows.svg',
              name: 'Daniel Zarick',
              title: 'CEO of Arrows',
            },
          ]}
        />
        <NewFooter />
      </Box>
    </>
  );
}
