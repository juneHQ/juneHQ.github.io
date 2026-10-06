import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import TopNav from './TopNav';
import Menu from './Menu';

/*
  You might notice that the content portion is defined twice.
  This prevents bugginess in smaller breakpoints, especially iOS Safari.
*/

export default function Layout({
  heading,
  subheading,
  children,
}: {
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        {heading ? <title>{heading} - June Docs</title> : <title>June Docs: Your Guide to Integration</title>}
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={heading ? `${heading} - June Docs` : 'June Docs: Integrate Seamlessly'} />
        <meta
          name="description"
          content={
            subheading
              ? subheading
              : "Explore June's comprehensive documentation for developers. From SDK integration to API references, find everything you need to integrate your app with June smoothly."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/docs" />
        <meta
          property="og:title"
          content={heading ? `${heading} - June Docs` : 'June Docs: Your Integration Handbook'}
        />
        <meta
          property="og:description"
          content={
            subheading
              ? subheading
              : "Dive into June's developer docs. Get detailed guides on SDK integration, API usage, and more to enhance your app's integration with June."
          }
        />
        <meta property="twitter:url" content="https://june.so/docs" />
        <meta property="twitter:title" content={heading ? `${heading} - June Docs` : 'June Developer Documentation'} />
        <meta
          property="twitter:description"
          content={
            subheading
              ? subheading
              : "Navigate June's developer documentation for seamless integration. Access SDK, API guides, and more for a smooth integration process with June."
          }
        />
      </Head>

      <div className="grid grid-cols-5 gap-4">
        <div
          className={`md:block hidden col-span-1 row-span-2 bg-gray-50 sticky top-0 left-0 h-screen max-w-360px py-5 px-6`}
        >
          <Menu currentRoute={router.pathname} />
        </div>
        <div className={`col-span-5 md:col-span-4 px-6`}>
          <TopNav />
          <div className={`flex flex-col items-center w-full md:max-w-4xl mx-auto pb-10`}>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
