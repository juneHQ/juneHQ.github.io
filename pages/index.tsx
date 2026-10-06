import Head from 'next/head';
import { useMetaDescriptions } from 'lib/hooks/useMetaDescriptions';
import { Navbar } from 'components/core/navbar/navbar';
import { NewFooter } from 'components/core/footer/new-footer';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import { FooterBoardingPass } from 'components/core/footer/footer-boarding-pass';
import { classNames } from 'lib/utils';
import { FinalLetter } from 'components/final-letter';

const Tooltip = dynamic(() => import('components/success/Tooltip'), {
  ssr: false,
});

export default function Home() {
  const now = new Date();
  const hour = now.getHours();
  // const isNight = hour >= 19 || hour < 7;
  const metaDescription = useMetaDescriptions({ route: '/' });

  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metaDescription.canonical} />
        <title>{metaDescription.title}</title>
        <meta name="title" content={metaDescription.title} />
        <meta name="description" content={metaDescription.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.june.so/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metaDescription.title} />
        <meta property="og:description" content={metaDescription.description} />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="https://june.so/social.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
        <meta name="twitter:image" content="https://june.so/social.png" />
        <meta name="twitter:url" content="https://june.so/" />
        <meta name="twitter:title" content={metaDescription.title} />
        <meta name="twitter:description" content={metaDescription.description} />
      </Head>
      <div className="flex flex-col">
        <div className="w-full max-w-screen bg-[#FAFAFA]">
          <Navbar hideGradient activeHref="/" scrollableContainerRef={scrollableContainerRef} />                
          <FinalLetter />
          <div className={classNames('w-full flex justify-center mt-20 md:mt-40')}>
          <div className={'flex flex-col items-center font-hero max-w-screen md:max-w-[1192px]'}>
            <div className="flex flex-col items-center w-full px-6 xl:px-0">
              <FooterBoardingPass hideCTA={false} />
            </div>
          </div>
        </div>
        </div>
        <NewFooter hideCTA={true} />
      </div>
    </>
  );
}
