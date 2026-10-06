import { Text, Box, Tabs, Tab, TabList, TabPanels, TabPanel, Flex } from '@chakra-ui/react';
import ScriptGenerator from './ScriptGenerator';
import CodeBlock, { Highlighter } from '../CodeBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { InfoIcon } from '@chakra-ui/icons';
import { useSdkStore, SDK } from '../sdk.store';

const ReactInstallationInstructions = () => {
  return (
    <CodeBlock raw={'npm install @june-so/analytics-next --save'}>
      <Highlighter language="bash" code={'npm install @june-so/analytics-next --save'} />
    </CodeBlock>
  );
};

const ReactConfigurationInstructions = ({ writeKey }) => {
  return (
    <Flex w="full" direction="column">
      <CodeBlock
        raw={`// Import June SDK:
    import { AnalyticsBrowser } from '@june-so/analytics-next';

    // Near the entrypoint of your app, instantiate AnalyticsBrowser:
    let analytics = AnalyticsBrowser.load({
      writeKey: '${writeKey}',
    });`}
      >
        <Highlighter
          language="javascript"
          code={`// Import June SDK:
import { AnalyticsBrowser } from '@june-so/analytics-next';

// Near the entrypoint of your app, instantiate AnalyticsBrowser:
let analytics = AnalyticsBrowser.load({
  writeKey: '${writeKey}',
});`}
        />
      </CodeBlock>
      <Text mb={2} fontSize="2xl" fontWeight="semibold">
        Using React
      </Text>
      <Text>Implement a hook that can be used throughout your React app:</Text>
      <CodeBlock
        raw={`import { useEffect, useState } from 'react';
import { AnalyticsBrowser } from '@june-so/analytics-next';

export function useJune(writeKey) {
  const [analytics, setAnalytics] = useState(undefined);

  useEffect(() => {
    const loadAnalytics = async () => {
      let response = AnalyticsBrowser.load({
        writeKey,
      });
      setAnalytics(response);
    };
    loadAnalytics();
  }, [writeKey]);

  return analytics;
}`}
      >
        <Highlighter
          language="javascript"
          code={`import { useEffect, useState } from 'react';
import { AnalyticsBrowser } from '@june-so/analytics-next';

export function useJune(writeKey) {
  const [analytics, setAnalytics] = useState(undefined);

  useEffect(() => {
    const loadAnalytics = async () => {
      let response = AnalyticsBrowser.load({
        writeKey,
      });
      setAnalytics(response);
    };
    loadAnalytics();
  }, [writeKey]);

  return analytics;
}`}
        />
      </CodeBlock>
      <Text>Now you can use the hook in any component, like:</Text>
      <CodeBlock
        raw={`import { useCallback } from 'react';
import { useJune } from './useJune';

function PurchaseButton() {
  const analytics = useJune('${writeKey}');

  const trackPurchase = useCallback(() => {
    if (analytics) analytics.track('Purchase Event');
  }, [analytics]);

  return <button onClick={trackPurchase}>Purchase coat</button>;
}`}
      >
        <Highlighter
          language="javascript"
          code={`import { useCallback } from 'react';
import { useJune } from './useJune';

function PurchaseButton() {
  const analytics = useJune('${writeKey}');

  const trackPurchase = useCallback(() => {
    if (analytics) analytics.track('Purchase Event');
  }, [analytics]);

  return <button onClick={trackPurchase}>Purchase coat</button>;
}`}
        />
      </CodeBlock>
      <Text mb={2} fontSize="2xl" fontWeight="semibold">
        Using NextJS
      </Text>
      <Text>
        For a NextJS app, the best approach is installing the NPM package rather than using the inlined script. Tracking
        is rather similar to the React example above. You can reuse the hook above in your NextJS app, here's how:
      </Text>
      <CodeBlock
        raw={`import { useCallback } from 'react';
import { useJune } from './useJune';

function PurchaseButton() {
  const analytics = useJune('${writeKey}');

  const trackPurchase = useCallback(() => {
    if (analytics) analytics.track('Purchase Event');
  }, [analytics]);

  return <button onClick={trackPurchase}>Purchase coat</button>;
}`}
      >
        <Highlighter
          language="javascript"
          code={`import { useCallback } from 'react';
import { useJune } from './useJune';

function PurchaseButton() {
  const analytics = useJune('${writeKey}');

  const trackPurchase = useCallback(() => {
    if (analytics) analytics.track('Purchase Event');
  }, [analytics]);

  return <button onClick={trackPurchase}>Purchase coat</button>;
}`}
        />
      </CodeBlock>
      <Text>For tracking pageview events, you can do the following:</Text>
      <CodeBlock
        raw={`import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const analytics = useJune('${writeKey}');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (analytics) analytics.page(url);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [analytics]);

  return <Component {...pageProps} />;
}`}
      >
        <Highlighter
          language="javascript"
          code={`import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const analytics = useJune('${writeKey}');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (analytics) analytics.page(url);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [analytics]);

  return <Component {...pageProps} />;
}`}
        />
      </CodeBlock>
    </Flex>
  );
};

const NodeInstallationInstructions = () => {
  return (
    <CodeBlock raw={'npm install @june-so/analytics-node --save'}>
      <Highlighter language="bash" code={'npm install @june-so/analytics-node --save'} />
    </CodeBlock>
  );
};

const NodeConfigurationInstructions = ({ writeKey }) => {
  return (
    <CodeBlock
      raw={`// Import June SDK:
      import { Analytics } from '@june-so/analytics-node';

      // Instantiate the client:
      const analytics = new Analytics('${writeKey}');`}
    >
      <Highlighter
        language="javascript"
        code={`// Import June SDK:
import { Analytics } from '@june-so/analytics-node';

// Instantiate the client:
const analytics = new Analytics('${writeKey}');`}
      />
    </CodeBlock>
  );
};

const PythonInstallationInstructions = () => {
  return (
    <CodeBlock raw={'pip install june-analytics-python'}>
      <Highlighter language="bash" code={'pip install june-analytics-python'} />
    </CodeBlock>
  );
};

const PythonConfigurationInstructions = ({ writeKey }) => {
  return (
    <CodeBlock
      raw={`from june import analytics

    analytics.write_key = "${writeKey}"`}
    >
      <Highlighter
        language="python"
        code={`from june import analytics

analytics.write_key = "${writeKey}"`}
      />
    </CodeBlock>
  );
};

const RubyInstallationInstructions = () => {
  return (
    <CodeBlock raw={'gem install june-analytics-ruby'}>
      <Highlighter language="bash" code={'gem install june-analytics-ruby'} />
    </CodeBlock>
  );
};

const RubyConfigurationInstructions = ({ writeKey }) => {
  return (
    <Flex direction="column">
      <CodeBlock
        raw={`require 'june/analytics'

        Analytics = June::Analytics.new({
                                          write_key: '${writeKey}'
                                        })`}
      >
        <Highlighter
          language="coffeescript"
          code={`require 'june/analytics'

Analytics = June::Analytics.new({
  write_key: '${writeKey}'
})`}
        ></Highlighter>
      </CodeBlock>
      <Text>
        If you're using Rails, you can create a config/initializers/analytics_ruby.rb file and add the following code:
      </Text>
      <CodeBlock
        raw={`require 'june/analytics'

Analytics = June::Analytics.new({
  write_key: '${writeKey}',
  on_error: proc { |_status, msg| print msg },
  stub: !Rails.env.production?
})`}
      >
        <Highlighter
          language="coffeescript"
          code={`require 'june/analytics'

Analytics = June::Analytics.new({
  write_key: '${writeKey}',
  on_error: proc { |_status, msg| print msg },
  stub: !Rails.env.production?
})`}
        ></Highlighter>
      </CodeBlock>
    </Flex>
  );
};

const HTTPInstallInstructions = ({ writeKey }) => {
  return (
    <CodeBlock
      raw={`
curl https://api.june.so/sdk/{ENDPOINT: identify | track | group} \
    -H "Content-Type: application/json" \
    -H "Authorization: Basic ${writeKey}" \
    -X POST

{
  ...
}
      `}
    >
      <Highlighter
        language="curl"
        code={`curl https://api.june.so/sdk/{ENDPOINT: identify | track | group}
-H "Content-Type: application/json"
-H "Authorization: Basic ${writeKey}"
-X POST

{
  ...
}`}
      />
    </CodeBlock>
  );
};

export function MultiLanguageInstallScript({ appId }) {
  const { sdk, setSdk } = useSdkStore();
  const { query } = useRouter();
  const [{ token }, setTokenState] = useState({
    isLoading: false,
    token: query.token ? query.token : null,
    error: null,
  });

  async function getToken(id) {
    try {
      setTokenState({ isLoading: true, token: null, error: null });
      const req = await axios.get(`${process.env.JUNE_API_HOST}/sdk_keys/0`, {
        params: {
          app_id: id,
          name: 'Write key',
        },
        withCredentials: true,
      });
      setTokenState({ isLoading: false, token: req.data.key, error: null });
    } catch (e) {
      // TODO
    }
  }

  useEffect(() => {
    if (appId && !token) getToken(appId);
  }, [appId, token]);

  const TabIndexes: SDK[] = ['Browser', 'React', 'NodeJS', 'Python', 'Ruby'];
  const indexFromStore = TabIndexes.indexOf(sdk);

  return (
    <Box pt={4}>
      <Tabs index={indexFromStore < 0 ? 0 : indexFromStore} colorScheme={'purple'}>
        <TabList>
          {TabIndexes.map((tab, index) => (
            <Tab key={index} onClick={() => setSdk(tab)}>{tab}</Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text fontWeight={'medium'} mt={3}>
              <InfoIcon color="purple.400" /> {`Install this tracking script in the <head> tag of your website.`}
            </Text>
            <ScriptGenerator />
          </TabPanel>
          <TabPanel>
            <Text fontWeight={'medium'}>Install the npm package</Text>
            <ReactInstallationInstructions />
            <ReactConfigurationInstructions writeKey={token || 'YOUR_WRITE_KEY'} />
          </TabPanel>
          <TabPanel>
            <Text fontWeight={'medium'}>Install the SDK</Text>
            <NodeInstallationInstructions />
            <Text fontWeight={'medium'}>Configure the SDK</Text>
            <NodeConfigurationInstructions writeKey={token || 'YOUR_WRITE_KEY'} />
          </TabPanel>
          <TabPanel>
            <Text fontWeight={'medium'}>Install the SDK</Text>
            <PythonInstallationInstructions />
            <Text fontWeight={'medium'}>Configure the SDK</Text>
            <PythonConfigurationInstructions writeKey={token || 'YOUR_WRITE_KEY'} />
          </TabPanel>
          <TabPanel>
            <Text fontWeight={'medium'}>Install the SDK</Text>
            <RubyInstallationInstructions />
            <Text fontWeight={'medium'}>Configure the SDK</Text>
            <RubyConfigurationInstructions writeKey={token || 'YOUR_WRITE_KEY'} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
