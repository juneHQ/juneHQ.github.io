import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { SDK, useSdkStore } from "../sdk.store";
import CodeBlock, { Highlighter } from "../CodeBlock";

const SimpleTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`window.analytics.track('Signed In', {
  browser: 'chrome'
});`}
    >
      <Highlighter
        language="javascript"
        code={`window.analytics.track('Signed In', {
  browser: 'chrome'
});`}
      />
    </CodeBlock>
  );
};

const ReactTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.track('Signed In', {
  browser: 'chrome'
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.track('Signed In', {
  browser: 'chrome'
});`}
      />
    </CodeBlock>
  );
};

const NodeTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.track({
  userId: 'USER_ID',
  event: 'Signed In',
  properties: {
    browser: 'chrome'
  }
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.track({
  userId: 'USER_ID',
  event: 'Signed In',
  properties: {
    browser: 'chrome'
  }
});`}
      />
    </CodeBlock>
  );
};

const PythonTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.track(
  user_id="USER_ID",
  event="Signed In",
  properties={"browser": "chrome"},
)`}
    >
      <Highlighter
        language="python"
        code={`analytics.track(
  user_id="USER_ID",
  event="Signed In",
  properties={"browser": "chrome"},
)`}
      />
    </CodeBlock>
  );
};

const RubyTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`Analytics.track(
  user_id: 'USER_ID',
  event: 'Signed In',
  properties: {
    browser: 'chrome'
  }
)`}
    >
      <Highlighter
        language="coffeescript"
        code={`Analytics.track(
  user_id: 'USER_ID',
  event: 'Signed In',
  properties: {
    browser: 'chrome'
  }
)`}
      />
    </CodeBlock>
  );
};

const HTTPTrackInstructions = ({ writeKey = 'YOUR_WRITE_KEY' }) => {
  return (
    <CodeBlock
      raw={`
curl https://api.june.so/sdk/track
    -H "Content-Type: application/json"
    -H "Authorization: Basic ${writeKey}"
    -X POST

{
  "userId": "USER_ID",
  "event": "Signed in",
  "properties": {
    "browser": "chrome",
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}
      `}
    >
      <Highlighter
        language="curl"
        code={`curl https://api.june.so/sdk/track
-H "Content-Type: application/json"
-H "Authorization: Basic ${writeKey}"
-X POST

{
  "userId": "USER_ID",
  "event": "Signed in",
  "properties": {
    "browser": "chrome",
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}`}
      />
    </CodeBlock>
  );
};

export function MultiLanguageUserTrackScript() {
  const { sdk, setSdk } = useSdkStore();
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
            <Text fontSize="sm" mt={3}>
              <WarningTwoIcon color="yellow.400" /> In the following example, it's important to call the .identify call
              before the .group call, because the .group call will attach the current identified user.
            </Text>
            <SimpleTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <ReactTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <NodeTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <PythonTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <RubyTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <HTTPTrackInstructions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
