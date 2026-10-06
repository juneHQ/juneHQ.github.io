import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { SocialProof } from 'components/home/social-proof';
import { CouponHero } from 'components/coupons/hero-cta';
import { Navbar } from 'components/core/navbar/navbar';
import { NewFooter } from 'components/core/footer/new-footer';
import { Box } from '@chakra-ui/react';

interface SponsorProps {
  sponsor: {
    slug: string;
    name: string;
    title: string;
    quote: string;
    profileImage: string;
    code: string;
  };
}

export default function PaidSponsorship({ sponsor }: SponsorProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://www.june.so/${sponsor.slug}`} />
        <title>June x {sponsor.name}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <CouponHero sponsor={sponsor} />
      <SocialProof _wrapper={{ mt: [0, 0, 0], bg: 'transparent' }} />
      <Box position="absolute" zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
        <NewFooter hideCTA={true} />
      </Box>
    </>
  );
}

const sponsor = [
  {
    slug: 'howtheygrow',
    name: 'Jaryd Hermann',
    title: 'Creator of How They Grow',
    quote:
      "Guys, trust me. If you're building B2B SaaS, June is the one. It's what Notion is to Excel, but for analytics :)",
    profileImage: '/paid-partnerships/jaryd.svg',
    code: 'howtheygrow25',
  },
  {
    slug: 'aakash',
    name: 'Aakash Gupta',
    title: 'Creator of Prouct Growth',
    quote:
      "In my chats with buyers, June.so is one of the best purpose build product analytics platforms for its ICP of B2B SaaS companies.",
    profileImage: '/paid-partnerships/aakash.svg',
    code: 'aakash25',
  },
	{
    slug: 'strategybreakdowns',
    name: 'Tom Alder',
    title: 'Founder of StrategyBreakdowns.com',
    quote:
      "It's becoming pretty clear that b2b SaaS startups are all flocking to the same product analytics tool: June. For teams who love modern products like Notion and Figma that take no time to set up, are powerful and configurable, June is the market's favourite option right now.",
    profileImage: '/paid-partnerships/tom.svg',
    code: 'SB25',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: sponsor.map((sponsor) => ({ params: { sponsor: sponsor.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentSponsorSlug = params?.sponsor as string;
  const currentSponsor = sponsor.find(({ slug }) => slug === currentSponsorSlug);

  return {
    props: { sponsor: currentSponsor },
  };
};
