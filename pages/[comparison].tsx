import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Testimonials } from "components/pricing/testimonials";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { IAlternative, IAlternativePageProps } from "components/comparisons/types";
import { FeatureComparison } from "components/comparisons/table-section";
import { SocialProof } from "components/comparisons/social-proof";
import { ComparisonHero } from "components/comparisons/comparison-hero";
import { CompanyFocus } from "components/comparisons/company-focus";
import { CollaborationFeature } from "components/comparisons/collaboration-feature";
import { Box } from "@chakra-ui/react";

export default function AlternativePage({ alternative }: IAlternativePageProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://www.june.so/${alternative.slug}`} />
        <title>June vs. {alternative.name} | June</title>
        <meta name="title" content={`June vs. ${alternative.name} - The Ultimate B2B SaaS Analytics Tool`} />
        <meta
          name="description"
          content={`Discover how June compares with ${alternative.name}. With ready-made reports, ease of use, and comprehensive analytics tailored for B2B SaaS. June simplifies data insights and empowers your entire team to make informed decisions.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.june.so/${alternative.slug}`} />
        <meta property="og:title" content={`June vs. ${alternative.name} - Detailed Comparison`} />
        <meta
          property="og:description"
          content={`Why choose June over ${alternative.name}? From auto-generated reports to user-friendly analytics, see why June is the preferred choice for B2B SaaS companies aiming for growth.`}
        />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="https://june.so/social.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta name="twitter:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content={`https://www.june.so/${alternative.slug}`} />
        <meta
          name="twitter:title"
          content={`June vs. ${alternative.name} - Why June Wins if you're an early stage B2B SaaS company`}
        />
        <meta
          name="twitter:description"
          content={`Facing ${alternative.name} vs. June? Uncover why June's analytics platform is the top choice for B2B SaaS. Tailored insights, simplicity, and effectiveness at your fingertips.`}
        />
      </Head>

      <Box maxW="100vw" overflow="clip">
        <Navbar activeHref="/" />
        <ComparisonHero alternative={alternative} />
        <SocialProof socialProofTestimonial={alternative.socialProof} />
        <CompanyFocus section={alternative.uniqueFeatures} />
        <CollaborationFeature section={alternative.secondFeature} />
        <FeatureComparison alternative={alternative} />
        <Testimonials testimonials={alternative.testimonials} />
        <NewFooter />
      </Box>
    </>
  );
}

const uniqueFeatures = {
  features: [
    {
      name: 'Metrics.',
      description:
        'Measure everything at a company-level without effort: from retention to activation. You just need to toggle from user level to company level view.',
      iconName: 'ChartBarIcon',
    },
    {
      name: 'Deep dive in a company.',
      description:
        'Analytics normally gives you aggregated insights, but in B2B, outliers are the ones that count. June gives you a company page where you can understand the health of every company.',
      iconName: 'MagnifyingGlassPlusIcon',
    },
  ],
  header: 'Analyse better',
  title: 'Company-level focus',
  subtitle: 'June helps you understand how companies, workspaces, or organizations use your product. When every account is worth a lot, maintaining good engagement levels is key.',
  firstAsset: '/comparisons/company_retention.svg',
  secondAsset: '/comparisons/team_collab_mixpanel.svg',
}

const alternatives = [
  {
    name: 'Mixpanel',
    slug: 'june-vs-mixpanel',
    fullArticle: 'https://www.june.so/blog/june-vs-mixpanel',
    hero: {
      heading: 'June vs Mixpanel',
      heroImage: '/comparisons/company_hero_mixpanel2.svg',
      title: 'The Mixpanel alternative: product analytics for B2B',
      subtitle: 'June is the only product analytics tool entirely built for B2B SaaS companies. It\'s also the only one that your whole team will actually use in their day-to-day work. You can try it out today by importing your Mixpanel historical data.',
    },
    socialProof: {
      quote:
        "While I'm sure I get most of the same insights I get from June in MixPanel, it just takes too much time to do it. I have to figure out how to construct the reports and this can take a lot of time and I'm never confident that I've done it right. With June, I just choose the data I want to be involved in and have confidence the report is working as intended and I didn't have to spend ages figuring out how to build it",
      fullName: 'Aylon Herbet',
      roleCompany: 'Product Manager of Raisely',
      logo: 'home/customer-stories/company-logos/raisely.svg',
      profile: '/comparisons/aylon.svg',
    },
    uniqueFeatures: {
      ...uniqueFeatures,
      mainAsset: '/comparisons/company_focus_mixpanel.svg',
    },
    secondFeature: {
      header: 'Collaborate',
      title: 'For your whole team',
      subtitle: 'Finally, a product analytics tool that your team will actually use. Everybody in the org deserves to know how customers are using your product.',
      mainAsset: '/comparisons/team_collab_mixpanel.svg',
      features: [
        {
          name: 'Slack integration.',
          description: 'Make your team feel the pulse of your product by sending live updates directly in Slack. Never miss a move from the hottest accounts.',
          iconName: 'BellAlertIcon',
        },
        {
          name: 'Accessible.',
          description: 'June is not only for product managers or founders but for your whole org: from success to sales to ops. Everybody will be able to self-serve data and become more data-driven.',
          iconName: 'UserGroupIcon',
        },
      ],
    },
    testimonials: [
      {
        companyLogo: '/logos-q3/amie2.svg',
        quote:
          "My weekly routine is to look at daily, weekly and monthly retention. With June, comparing cohorts is very easy this is something we've needed a dedicated data analyst in previous companies. So you can easily calculate the return on invest: best $150/mo we spend",
        image: '/comparisons/dennis.svg',
        name: 'Dennis Müller',
        title: 'Co-founder of Amie',
      },
      {
        companyLogo: '/comparisons/cafe.svg',
        quote:
          'The feature analysis report enabled us to measure the adoption of a feature in a couple of clicks. By connecting this report to Slack we’ve improved our workflow and team efficiency. This way we spend less time on our data tools',
        image: '/comparisons/arthur.svg',
        name: 'Arthur Lorotte',
        title: 'CTO of Cafe',
      },
    ],
    comparisonFeatures: [
      {
        feature: 'Breakdowns',
        june: true,
        competitor: true,
      },
      {
        feature: 'Built for B2B use cases',
        june: true,
        competitor: false,
      },
      {
        feature: 'Made for Customer success',
        june: true,
        competitor: false,
      },
      {
        feature: 'Churn alerts',
        june: true,
        competitor: false,
      },
      {
        feature: 'Suitable for large B2C',
        june: false,
        competitor: true,
      },
      {
        feature: 'Templated reports',
        june: true,
        competitor: false,
      },
      {
        feature: 'A / B testing',
        june: false,
        competitor: true,
      },
      {
        feature: 'SQL editor',
        june: true,
        competitor: true,
      },
    ],
  },
  {
    name: 'Amplitude',
    slug: 'june-vs-amplitude',
    fullArticle: 'https://www.june.so/blog/june-vs-amplitude',
    hero: {
      heading: 'June vs Amplitude',
      heroImage: '/comparisons/hero_amplitude.svg',
      title: 'The Amplitude alternative: product analytics for B2B',
      subtitle: 'June is the only product analytics tool entirely built for B2B SaaS companies. It\'s also the only one that your whole team will actually use in their day-to-day work. You can try it out today by importing your Amplitude historical data.',
    },
    uniqueFeatures: {
      ...uniqueFeatures,
      mainAsset: '/comparisons/company_focus_amplitude.svg',
    },
    socialProof: {
      quote:
        'I got 90% of the data I need against Amplitude with much less time spent. Event inspector and users are also invaluable resources when debugging or looking room for improvements',
      fullName: 'Bastiaan Gielliet',
      roleCompany: 'Head of Marketing, Theydo',
      logo: 'home/customer-stories/company-logos/theydo.svg',
      profile: '/comparisons/bastian.svg',
    },
    testimonials: [
      {
        companyLogo: '/comparisons/onsecurity.svg',
        quote:
          'We use June to aid with data-led decision-making, unblocking customers, increasing activation, and getting a general overview of the health of our product among users',
        image: '/comparisons/calum.svg',
        name: 'Calum Boal',
        title: 'Head of Security Engineering at OnSecurity',
      },
      {
        companyLogo: '/logos-q3/waldo2.svg',
        quote:
          'Acquiring new customers is much harder than retaining them. With June we have been able to find who was about to churn and re-engage them. Also, tracking the latest features shipped is extremely simple',
        image: '/comparisons/manou.svg',
        name: 'Manou Febvret',
        title: 'Head of Product & Design of Waldo',
      },
    ],
    secondFeature: {
      header: 'Collaborate',
      title: 'For your whole team',
      subtitle: 'Finally, a product analytics tool that your team will actually use. Everybody in the org deserves to know how customers are using your product.',
      mainAsset: '/comparisons/team_collab_amplitude.svg',
      features: [
        {
          name: 'Slack integration.',
          description: 'Make your team feel the pulse of your product by sending live updates directly in Slack. Never miss a move from the hottest accounts.',
          iconName: 'BellAlertIcon',
        },
        {
          name: 'Accessible.',
          description: 'June is not only for product managers or founders but for your whole org: from success to sales to ops. Everybody will be able to self-serve data and become more data-driven.',
          iconName: 'UserGroupIcon',
        },
      ],
    },
    comparisonFeatures: [
      {
        feature: 'Built for B2B use cases',
        june: true,
        competitor: false,
      },
      {
        feature: 'Property and trait breakdowns',
        june: true,
        competitor: true,
      },
      {
        feature: 'SQL editor',
        june: true,
        competitor: true,
      },
      {
        feature: 'Customer success friendly',
        june: true,
        competitor: false,
      },
      {
        feature: 'Statistical experiments',
        june: false,
        competitor: true,
      },
      {
        feature: 'Suitable for large B2C',
        june: false,
        competitor: true,
      },
      {
        feature: 'Templated reports',
        june: true,
        competitor: false,
      },
      {
        feature: 'A / B testing',
        june: false,
        competitor: true,
      },
    ],
  },
] as IAlternative[];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: alternatives.map((alternative) => ({ params: { comparison: alternative.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentAlternativeSlug = params.comparison;
  const currentAlternative = alternatives.find(({ slug }) => slug === currentAlternativeSlug);

  return {
    props: { alternative: currentAlternative },
  };
};
