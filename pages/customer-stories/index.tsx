import { useRef } from "react";
import Link from "next/link";
import NextImage from "next/image";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useMetaDescriptions } from "lib/hooks/useMetaDescriptions";
import { getCustomerStories } from "lib/customer-story";
import WhatsappSection from "components/customer-stories/whatsapp-section";
import Hero from "components/customer-stories/hero";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { PostsOrPages } from "@tryghost/content-api";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Box } from "@chakra-ui/react";

interface Props {
  stories: PostsOrPages;
}
const CustomerStories = (props: Props) => {
  const now = new Date();
  const hour = now.getHours();
  const isNight = hour >= 19 || hour < 7;
  const imageUrl = isNight ? '/customer-stories/night.png' : '/customer-stories/day.png';

  const metaDescription = useMetaDescriptions({ route: '/customer-stories' });
  const { title, description, canonical } = metaDescription;
  const scrollableDivRef = useRef(null);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        <meta name="title" content={title} />
        <meta
          name="description"
          content={description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/customer-stories" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content="https://june.so/customer-stories" />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content={description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://june.so/social.png" />
      </Head>

      <div className="flex flex-col">
        <div className="sticky top-0 m-auto">
          <NextImage src={imageUrl} width={1352} height={220} alt={isNight ? 'night clouds' : 'day clouds'} />
        </div>
        <Box
          position="absolute"
          w="100%"
          maxW="100vw"
          zIndex="docked"
          className="overflow-x-hidden h-screen"
          ref={scrollableDivRef}
        >
          <Navbar hideGradient />
          <div className="max-w-[1280px] mt-[86px] lg:mt-[140px] mx-auto">
            <div className="sticky top-0">
              <Hero />
            </div>
            <div className="bg-white relative">
              <WhatsappSection scrollableDivRef={scrollableDivRef} />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] mx-[16px] lg:mx-[32px]">
                {props.stories.map((story) => (
                  <Link key={story.slug} href={`/customer-stories/${story.slug}`} passHref>
                    <div className="bg-white rounded-[20px] shadow-csCards cursor-pointer w-full h-[126px] relative overflow-hidden group">
                      <div
                        className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px]"
                        // Fixes a weird 1px bug on transition
                        style={{ willChange: 'transform' }}
                      >
                        <NextImage src={story.feature_image} alt={story.slug} layout="fill" objectFit="contain" />
                      </div>

                      <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center text-purple-900 font-semibold">
                        Read full story
                        <ArrowRightIcon className="h-4 w-4 text-purple-900 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <NewFooter metaDescription={metaDescription} />
          </div>
        </Box>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const stories = await getCustomerStories();
  return {
    props: { stories },
  };
};

export default CustomerStories;
