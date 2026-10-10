import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMetaDescriptions } from 'lib/hooks/useMetaDescriptions';
import { Testimonials } from 'components/pricing/testimonials';
import { CrmInJune } from 'components/crm/crm_in_june';
import { CrmHero } from 'components/crm/crm_hero';
import { ComputedTraits } from 'components/crm/crm_computed_traits';
import { DataMapping } from 'components/crm/crm-mapping';
import { CrmFeature } from 'components/crm/crm-feature';
import { Benefits } from 'components/crm/crm-benefits';
import { pageStyles } from 'components/core/page-styles';
import { Navbar } from 'components/core/navbar/navbar';
import { Footer } from 'components/core/footer/footer';
import { Box } from '@chakra-ui/react';
import Guides from 'components/role/success-sales/guides';
import { NewFooter } from 'components/core/footer/new-footer';

interface CrmIntegrationProps {
  crm: {
    slug: string;
    name: string;
    heroAsset: string;
    crminjune: string;
    mappingAsset: string;
    featureAsset: string;
    smartTraitAsset: string;
    testimonials: {
      companyLogo: string;
      quote: string;
      image: string;
      name: string;
      title: string;
    }[];
  };
}

export default function AttioIntegration({ crm }: CrmIntegrationProps) {
  const metaDescription = useMetaDescriptions({ route: `/integration/${crm.slug}` });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metaDescription.canonical} />
        <title>{metaDescription.title}</title>
        <meta name="title" content={metaDescription.title} />
        <meta name="description" content={metaDescription.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.june.so/${crm.slug}`} />
        <meta property="og:title" content={metaDescription.title} />
        <meta property="og:description" content={metaDescription.description} />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content={`https://www.june.so/${crm.slug}`} />
        <meta property="twitter:title" content={metaDescription.title} />
        <meta property="twitter:description" content={metaDescription.description} />
        <meta property="twitter:image" content="https://june.so/social.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      <CrmHero crm={crm} />
      <Benefits />
      <ComputedTraits crm={crm} />
      <CrmInJune crm={crm} />
      <CrmFeature crm={crm} />
      <DataMapping crm={crm} />
      <Testimonials testimonials={crm.testimonials} />
      <Box zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
        {/* <Footer _wrapper={pageStyles.lastSection} /> */}
        <Guides />
        <NewFooter />
      </Box>
    </>
  );
}

const crm = [
  {
    slug: 'attio',
    name: 'Attio',
    learnMore: 'https://cal.com/alberto-incisa/pro-plan',
    heroAsset: '/integrations/attio_hero.svg',
    crminjune: '/integrations/attio_in_june.svg',
    mappingAsset: '/integrations/attio_mapping.svg',
    featureAsset: '/integrations/attio_feature.svg',
    smartTraitAsset: '/integrations/attio_smart_traits.svg',
    testimonials: [
      {
        companyLogo: '/logos-q3/vev.svg',
        quote:
          "It's like magic—suddenly, everything's in one place, making it much easier to find upsell gems or save users on the edge. Kinda our backstage pass to smarter GTM actions",
        image: '/integrations/nicolay.svg',
        name: 'Nicolay Thafvelin',
        title: 'CTO of VeV',
      },
      {
        companyLogo: '/integrations/requestly.svg',
        quote:
          'June is an exceptional product analytics tool. It has changed how we plan what to build, and helped us convert more users. Consuming data and actually leverage it, is much easier than with other tools',
        image: '/integrations/sachin.svg',
        name: 'Sachin Jain',
        title: 'CEO of Requestly',
      },
    ],
  },

  {
    slug: 'hubspot',
    name: 'HubSpot',
    learnMore: 'https://cal.com/alberto-incisa/pro-plan',
    heroAsset: '/integrations/hubspot_hero.svg',
    crminjune: '/integrations/hubspot_in_june.svg',
    mappingAsset: '/integrations/hubspot_mapping.svg',
    featureAsset: '/integrations/hubspot_feature.svg',
    smartTraitAsset: '/integrations/hubspot_smart_traits.svg',
    testimonials: [
      {
        companyLogo: '/integrations/arrows.svg',
        quote:
          "We started using June before the HubSpot integration came out but since then it really became a crucial part of our stack. We're heavy users of HS and sending data into it before the June app was a pain. Not anymore!",
        image: '/integrations/daniel.svg',
        name: 'Daniel Zarick',
        title: 'CEO at Arrows',
      },
      {
        companyLogo: '/home/customer-stories/company-logos/knack.svg',
        quote:
          "With June's HubSpot and Slack integration we've been able to finally make use of all the data that our customers are generating in the app. Everyone from product to sales now uses June",
        image: '/home/customer-stories/avatars/knack.svg',
        name: 'Mo Bingham',
        title: 'Revenue operations at Knack',
      },
    ],
  },
  {
    slug: 'salesforce',
    name: 'Salesforce',
    learnMore: 'https://cal.com/alberto-incisa/pro-plan',
    heroAsset: '/integrations/salesforce-hero.svg',
    crminjune: '/integrations/sf-june.svg',
    mappingAsset: '/integrations/sf-mapping.svg',
    featureAsset: '/integrations/automation-sf.svg',
    smartTraitAsset: '/integrations/computed-traits-sf.svg',
    testimonials: [
      // {
      //   companyLogo: '/integrations/arrows.svg',
      //   quote:
      //     "We started using June before the HubSpot integration came out but since then it really became a crucial part of our stack. We're heavy users of HS and sending data into it before the June app was a pain. Not anymore!",
      //   image: '/integrations/daniel.svg',
      //   name: 'Daniel Zarick',
      //   title: 'CEO at Arrows',
      // },
      // {
      //   companyLogo: '/home/customer-stories/company-logos/knack.svg',
      //   quote:
      //     "With June's HubSpot and Slack integration we've been able to finally make use of all the data that our customers are generating in the app. Everyone from product to sales now uses June",
      //   image: '/home/customer-stories/avatars/knack.svg',
      //   name: 'Mo Bingham',
      //   title: 'Revenue operations at Knack',
      // },
    ],
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: crm.map((crm) => ({ params: { integration: crm.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentIntegrationSlug = params.integration;
  const currentIntegration = crm.find(({ slug }) => slug === currentIntegrationSlug);

  return {
    props: { crm: currentIntegration },
  };
};
