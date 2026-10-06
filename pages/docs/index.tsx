import Link from 'next/link';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Layout from '../../components/docs/Layout';
import { HoverEffect } from '../../components/home/components/hover-effect';

const Section = (props: {
  time?: string;
  type?: string;
  title: string;
  description: string;
  link: string;
  cta: string;
  primary?: boolean;
  imageAlt: string;
  imageUrl: string;
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div className="w-full self-center md:order-0">
      {props.time && props.type && (
        <span className="inline-block text-xs mb-2 bg-gray-100 px-2 rounded text-gray-600">
          {props.time} · {props.type}
        </span>
      )}
      <h1 className="text-2xl font-semibold mb-3">{props.title}</h1>
      <p className="text-md font-normal text-gray-600 mb-6">{props.description}</p>
      <div className="flex">
        <Link href={props.link}>
          <a>
            <button
              className={`text-md mb-4 lg:mb-0 ${
                props.primary
                  ? 'bg-purple-500 text-white hover:bg-purple-700'
                  : 'bg-white border border-gray-400 text-black hover:bg-gray-100'
              } px-4 py-2 rounded-md transition duration-500 ease-in-out `}
            >
              {props.cta} →
            </button>
          </a>
        </Link>
      </div>
    </div>
    <img alt={props.imageAlt} src={props.imageUrl} className="w-full object-cover" />
  </div>
);

const SDKS = [
  {
    icon: '/docs/sdks/browser.svg',
    name: 'Browser',
    link: '/docs/tracking/web/browser',
  },
  {
    icon: '/docs/sdks/react.svg',
    name: 'React',
    link: '/docs/tracking/web/react',
  },
  {
    icon: '/docs/sdks/node.svg',
    name: 'NodeJS',
    link: '/docs/tracking/server/node-js',
  },
  {
    icon: '/docs/sdks/python.svg',
    name: 'Python',
    link: '/docs/tracking/server/python',
  },
  {
    icon: '/docs/sdks/ruby.svg',
    name: 'Ruby',
    link: '/docs/tracking/server/ruby',
  },
  {
    icon: '/docs/sdks/http.svg',
    name: 'HTTP',
    link: '/docs/tracking/http-api/authentication',
  },
];

const StyledLink = (props: { href?: string; onClick?: () => void; children: React.ReactNode; external?: boolean }) => {
  if (props.external || !props.href) {
    return (
      <a
        onClick={props.onClick}
        href={props.href}
        target="_blank"
        className="text-primary hover:text-slate-900 cursor-pointer"
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link href={props.href}>
      <a onClick={props.onClick} className="text-primary hover:text-slate-900">
        {props.children}
      </a>
    </Link>
  );
};

const SdkButton = (props: { icon: string; name: string; link: string }) => (
  <Link href={props.link}>
    <a>
      <HoverEffect key={props.link} hoverBorderColor="rgb(111, 111, 247)" hoverGlowColor="rgba(111, 111, 247, 0.1)">
        <Flex gap={[2]} p={[6]}>
          <Image boxSize={[5]} src={props.icon} alt={props.name} />
          <Text
            bgGradient="linear(to-b, purple.500, purple.700)"
            bgClip="text"
            letterSpacing={'-0.0.2em'}
            lineHeight="1.2"
          >
            {props.name}
          </Text>
        </Flex>
      </HoverEffect>
    </a>
  </Link>
);

const BrowseByLanguage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div className="w-full self-center md:order-0">
      <h2 className="text-2xl font-semibold mb-3">Browse by language</h2>
      <p className="text-md font-normal text-gray-600 mb-6">
        Don't see your language? Use <StyledLink href="/docs/tracking/http-api/authentication">HTTP</StyledLink>
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <div className="w-6 h-6">
            <img src="/docs/help.svg" className="w-6 h-6" />
          </div>
          <span className="text-sm">
            For FAQ view our{' '}
            <StyledLink external href="https://help.june.so/">
              help center
            </StyledLink>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <img src="/docs/changelog.svg" className="w-5 h-5" />
          </div>
          <span className="text-sm">
            Check out our{' '}
            <StyledLink external href="https://changelog.june.so/">
              product changelog
            </StyledLink>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-6 h-6">
            <img src="/docs/chat.svg" className="w-6 h-6" />
          </div>
          <span className="text-sm">
            Installation help? <StyledLink external href="https://help.june.so/">Visit the help center</StyledLink>
          </span>
        </div>
      </div>
    </div>
    <div className="w-full grid grid-cols-2 gap-5">
      {SDKS.map((sdk) => (
        <SdkButton {...sdk} />
      ))}
    </div>
  </div>
);

export default function Index() {
  return (
    <Layout heading="Docs">
      <Section
        primary
        title="Documentation"
        description="Learn how to integrate June with your app"
        link="/docs/quickstart/install"
        cta="Get started with tracking"
        imageAlt="Identify your users"
        imageUrl="/docs/identify-your-users.png"
      />

      <Box my={12} />
      <Section
        time="5 minutes"
        type="Non-Technical"
        title="New to product analytics?"
        description="This is the best place to start"
        link="/docs/start-here"
        cta="Learn the basics"
        imageAlt="New to product analytics"
        imageUrl="/docs/new-to-product-analytics.png"
      />
      <Box my={12} />
      <BrowseByLanguage />
    </Layout>
  );
}
