import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SDK, useSdkStore } from "../sdk.store";
import CodeBlock, { Highlighter } from "../CodeBlock";

const SimpleGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`window.analytics.group('amazon.com', {
  group_type: 'company',
  // Add anything else about the company here
  ...
});`}
    >
      <Highlighter
        language="javascript"
        code={`window.analytics.group('amazon.com', {
  group_type: 'company',
  // Add anything else about the company here
  ...
});`}
      />
    </CodeBlock>
  );
};

const ReactGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.group('amazon.com',
{
  group_type: 'company',
  // Add anything else about the company here
  ...
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.group('amazon.com',
{
  group_type: 'company',
  // Add anything else about the company here
  ...
});`}
      />
    </CodeBlock>
  );
};

const NodeGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.group({
  groupId: 'amazon.com',
  traits: {
    group_type: 'company',
    // Add anything else about the company here
    ...
  },
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.group({
  groupId: 'amazon.com',
  traits: {
    group_type: 'company',
    // Add anything else about the company here
    ...
  },
});`}
      />
    </CodeBlock>
  );
};

const PythonGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.group(
  group_id="amazon.com",
  traits={
    "group_type": "company",
    # Add anything else about the company here
    ...
  },
)`}
    >
      <Highlighter
        language="python"
        code={`analytics.group(
  group_id="amazon.com",
  traits={
    "group_type": "company",
    # Add anything else about the company here
    ...
  },
)`}
      />
    </CodeBlock>
  );
};

const RubyGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`Analytics.group(
  group_id: 'amazon.com',
  traits: {
    group_type: "company",
    # Add anything else about the company here
    ...
  }
)`}
    >
      <Highlighter
        language="coffeescript"
        code={`Analytics.group(
  group_id: 'amazon.com',
  traits: {
    group_type: "company",
    # Add anything else about the company here
    ...
  }
)`}
      />
    </CodeBlock>
  );
};

const HTTPGroupInstructions = ({ writeKey }) => {
  return (
    <CodeBlock
      raw={`
curl https://api.june.so/sdk/group
    -H "Content-Type: application/json"
    -H "Authorization: Basic ${writeKey}"
    -X POST

{
  "groupId": "amazon.com",
  "traits": {
    "group_type": "company"
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}
      `}
    >
      <Highlighter
        language="curl"
        code={`curl https://api.june.so/sdk/group
-H "Content-Type: application/json"
-H "Authorization: Basic ${writeKey}"
-X POST

{
  "groupId": "amazon.com",
  "traits": {
    "group_type": "company"
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}`}
      />
    </CodeBlock>
  );
};

export function MultiLanguageGroupTypeScript({ appId }) {
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

  const TabIndexes: SDK[] = ['Browser', 'React', 'NodeJS', 'Python', 'Ruby', 'HTTP'];
  const indexFromStore = TabIndexes.indexOf(sdk);

  return (
    <Box py={4}>
      <Tabs index={indexFromStore < 0 ? 0 : indexFromStore} colorScheme={'purple'}>
        <TabList>
          {TabIndexes.map(
            (tab, index) =>
              tab && (
                <Tab
                  key={index}
                  onClick={() => {
                    setSdk(tab);
                  }}
                >
                  {tab}
                </Tab>
              ),
          )}
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <SimpleGroupInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <ReactGroupInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <NodeGroupInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <PythonGroupInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <RubyGroupInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <HTTPGroupInstructions writeKey={token || 'YOUR_WRITE_KEY'} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
