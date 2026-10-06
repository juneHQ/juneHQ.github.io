import { Text, Box, Tabs, Tab, TabList, TabPanels, TabPanel, UnorderedList, ListItem } from '@chakra-ui/react';

import CodeBlock, { Highlighter } from '../CodeBlock';
import { SDK, useSdkStore } from '../sdk.store';

const SimpleIdentifyInstructions = () => {
  return (
    <CodeBlock
      raw={`window.analytics.identify('USER_ID', {
  email: 'test@example.com',
  // Optional
  name: 'Joe Bloggs',
  avatar: 'https://avatar.com/asd809sdhoif9as10nc29.png'
  // Add anything else about the user here
});`}
    >
      <Highlighter
        language="javascript"
        code={`window.analytics.identify('USER_ID', {
  email: 'test@example.com',
  // Optional
  name: 'Joe Bloggs',
  avatar: 'https://avatar.com/asd809sdhoif9as10nc29.png'
  // Add anything else about the user here
});`}
      />
    </CodeBlock>
  );
};

const ReactIdentifyInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.identify('USER_ID', {
    email: 'test@example.com',
    // Optional
    name: 'Joe Bloggs',
    avatar: 'https://avatar.com/asd809sdhoif9as10nc29.png'
    // Add anything else about the user here
  }
);`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.identify('USER_ID',{
    email: 'test@example.com',
    // Optional
    name: 'Joe Bloggs',
    avatar: 'https://avatar.com/asd809sdhoif9as10nc29.png'
    // Add anything else about the user here
  });`}
      />
    </CodeBlock>
  );
};

const NodeIdentifyInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.identify({
  userId: 'USER_ID',
  traits: {
    email: 'test@example.com',
    // Optional
    name: 'Joe Bloggs',
    avatar: 'https://avatar.com/asd809sdhoif9as10nc29.png'
    // Add anything else about the user here
  }
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.identify({
  userId: 'USER_ID',
  traits: {
    email: 'test@example.com',
    // Optional
    name: 'Joe Bloggs',
    avatar: 'https://avatar.com/asd809sdhoif9as10nc29.png'
    // Add anything else about the user here
  }
});`}
      />
    </CodeBlock>
  );
};

const PythonIdentifyInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.identify(
  user_id="USER_ID",
  traits={
    "email": "test@example.com",
    # Optional
    "name": "Joe Bloggs",
    "avatar": "https://avatar.com/0sd9fsd8y97a0sf99asd.png",
    # Add anything else about the user here
  },
)`}
    >
      <Highlighter
        language="python"
        code={`analytics.identify(
  user_id="USER_ID",
  traits={
    "email": "test@example.com",
    # Optional
    "name": "Joe Bloggs",
    "avatar": "https://avatar.com/0sd9fsd8y97a0sf99asd.png",
    # Add anything else about the user here
  },
)`}
      />
    </CodeBlock>
  );
};

const RubyIdentifyInstructions = () => {
  return (
    <CodeBlock
      raw={`Analytics.identify(
  user_id: 'USER_ID',
  traits: { 
    email: "test@example.com"
    # Optional
    name: "Joe Bloggs",
    avatar: "https://avatar.com/d78979as8hlsa9088f.png"
    # Add anything else about the user here
  }
)`}
    >
      <Highlighter
        language="coffeescript"
        code={`Analytics.identify(
  user_id: 'USER_ID',
  traits: { 
    email: "test@example.com"
    # Optional
    name: "Joe Bloggs",
    avatar: "https://avatar.com/d78979as8hlsa9088f.png"
    # Add anything else about the user here
  }
)`}
      />
    </CodeBlock>
  );
};

const HTTPIdentifyInstructions = ({ writeKey = 'YOUR_WRITE_KEY' }) => {
  return (
    <CodeBlock
      raw={`
curl https://api.june.so/sdk/identify
    -H "Content-Type: application/json"
    -H "Authorization: Basic ${writeKey}"
    -X POST

{
  "userId": "USER_ID",
  "groupId": "GROUP_ID",
  "traits": {
    "email": "test@example.com",
    # Optional
    "name": "Joe Bloggs",
    "avatar": "https://avatar.com/0sd9fsd8y97a0sf99asd.png",
    # Add anything else about the user here
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}
      `}
    >
      <Highlighter
        language="curl"
        code={`curl https://api.june.so/sdk/identify
-H "Content-Type: application/json"
-H "Authorization: Basic ${writeKey}"
-X POST

{
  "userId": "USER_ID",
  "traits": {
    "email": "test@example.com",
    # Optional
    "name": "Joe Bloggs",
    "avatar": "https://avatar.com/0sd9fsd8y97a0sf99asd.png",
    # Add anything else about the user here
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}`}
      />
    </CodeBlock>
  );
};

export function MultiLanguageIdentifyScript() {
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
            <SimpleIdentifyInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <ReactIdentifyInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <NodeIdentifyInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <PythonIdentifyInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <RubyIdentifyInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <HTTPIdentifyInstructions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
