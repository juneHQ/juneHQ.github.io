import { Box, Container, Divider, Text, Wrap, WrapItem } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from 'components/core/navbar/navbar';
import { NewFooter } from 'components/core/footer/new-footer';
import { CloudsBackground } from 'components/resources/clouds-background';
import { Hero } from 'components/content/hero';
import { defaultPx } from 'components/core/utils/default-container-px';

const LINKS = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/customer-stories', title: 'Customer stories' },
];

// GitHub Pages serves this page for every unknown URL and matches paths exactly, while Vercel
// redirected /foo/ to /foo and matched redirects case-insensitively. Before hydration, retry
// with the path trimmed of trailing slashes and lowercased (keeping the query and hash). The
// origin is prepended so that a path like //example.com/ can never leave the site.
// Each target is retried only once: GitHub Pages answers a directory without index.html
// (e.g. /integration) with a redirect back to /integration/, which would otherwise loop.
const RECOVER_URL_SCRIPT = `(function () {
  var path = location.pathname;
  var target = path.replace(/\\/+$/, '').toLowerCase() || '/';
  if (target === path) return;
  try {
    var last = JSON.parse(sessionStorage.getItem('june-404-retry') || 'null');
    if (last && last.target === target && Date.now() - last.at < 10000) return;
    sessionStorage.setItem('june-404-retry', JSON.stringify({ target: target, at: Date.now() }));
  } catch (e) {
    return;
  }
  location.replace(location.origin + target + location.search + location.hash);
})();`;

export default function NotFound() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>June - Page not found</title>
        <meta name="title" content="June - Page not found" />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: RECOVER_URL_SCRIPT }} />
      </Head>
      <CloudsBackground />
      <Navbar />
      <Box position="absolute" zIndex="docked" w="100%" maxW="100vw" overflow="hidden">
        <Container maxW="landingMax" px={defaultPx(32)} mt={[86, 86, 140]}>
          <Hero title="Page not found" subtitle="Sorry, we couldn't find the page you were looking for." />
          <Divider my={16} />
          <Wrap justify="center" spacing={[4, 8]} mb={16}>
            {LINKS.map(({ href, title }) => (
              <WrapItem key={href}>
                <Link href={href} passHref>
                  <Text
                    as="a"
                    fontSize={['lg', 'xl']}
                    fontWeight="semibold"
                    fontFamily="hero"
                    color="purple.900"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {title}
                  </Text>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Container>
        <NewFooter />
      </Box>
    </>
  );
}
