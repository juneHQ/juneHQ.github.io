import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView, logEvent } from '../components/lib/googleAnalytics';
import juneTheme from 'components/core/design-system/constants/theme';
import AuthProvider from 'Context/Auth';
import 'styles/globals.css';
import 'styles/resources.css';
import 'styles/customer-story.css';
import 'styles/feature-launches.css';
// Disable border for non-keyboard interactions
import 'focus-visible/dist/focus-visible';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('g-conversion-button')) {
        logEvent('Landing page - Signup button', 'Click');
      }
    });
    const handleRouteChange = (url) => {
      logPageView(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <AuthProvider>
        <ChakraProvider theme={juneTheme}>
          <>
            <Component {...pageProps} />
          </>
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
