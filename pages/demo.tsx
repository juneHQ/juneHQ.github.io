import Head from 'next/head';
import { SocialProof } from 'components/home/social-proof';
import { Header } from 'components/demo/Header';
import { NoCtaNavbar } from 'components/core/navbar/no-ctas-navbar';
import { UseCaseSection } from 'components/home/use-case-section';
import { NoCtaFooter } from 'components/core/footer/no-cta-footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.june.so" />
        <title>June - Get in touch with June </title>
        <meta name="title" content="June - Get in touch with a June expert" />
        <meta
          name="description"
          content="Connect with an expert to learn how June can get your whole team connected to your product."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.june.so/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="June - Get in touch with a June expert" />
        <meta
          property="og:description"
          content="Connect with an expert to learn how June can get your whole team connected to your product."
        />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="https://june.so/social.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta name="twitter:image" content="https://june.so/social.png" />
        <meta name="twitter:url" content="https://june.so/" />
        <meta name="twitter:title" content="June - Get in touch with a June expert" />
        <meta
          name="twitter:description"
          content="Connect with an expert to learn how June can get your whole team connected to your product."
        />
      </Head>
      <div className="max-w-screen overflow-clip">
        <div className="sticky top-0 z-50">
          <NoCtaNavbar activeHref="/demo" />
        </div>
        <Header />
        <div className="hidden mt-32 lg:my-6 lg:block">
          <SocialProof _wrapper={{ bg: 'white' }} />
        </div>
        <UseCaseSection />
        {/* <NewFooter className="!mt-12" hideCTA={true} /> */}
        <NoCtaFooter className="!mt-8" hideCTA={true} />
      </div>
    </>
  );
}
