import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SDK, useSdkStore } from "../sdk.store";
import CodeBlock, { Highlighter } from "../CodeBlock";

const SimpleGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`window.analytics.group('GROUP_ID', {
  group_type: 'department',
  name: 'Engineering',
  headcount: 25,
  location: 'San Francisco',
  budget: 1000000
  // Add anything else about the department here
});`}
    >
      <Highlighter
        language="javascript"
        code={`window.analytics.group('GROUP_ID', {
  group_type: 'department',
  name: 'Engineering',
  headcount: 25,
  location: 'San Francisco',
  budget: 1000000
  // Add anything else about the department here
});`}
      />
    </CodeBlock>
  );
};

const ReactGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.group('GROUP_ID', {
  group_type: 'department',
  name: 'Engineering',
  headcount: 25,
  location: 'San Francisco',
  budget: 1000000
  // Add anything else about the department here
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.group('GROUP_ID', {
  group_type: 'department',
  name: 'Engineering',
  headcount: 25,
  location: 'San Francisco',
  budget: 1000000
  // Add anything else about the department here
});`}
      />
    </CodeBlock>
  );
};

const NodeGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.group({
  groupId: 'GROUP_ID',
  traits: {
    group_type: 'department',
    name: 'Engineering',
    headcount: 25,
    location: 'San Francisco',
    budget: 1000000
    // Add anything else about the department here
  }
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.group({
  groupId: 'GROUP_ID',
  traits: {
    group_type: 'department',
    name: 'Engineering',
    headcount: 25,
    location: 'San Francisco',
    budget: 1000000
    // Add anything else about the department here
  }
});`}
      />
    </CodeBlock>
  );
};

const PythonGroupInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.group(
  group_id="GROUP_ID",
  traits={
    "group_type": "department",
    "name": "Engineering",
    "headcount": 25,
    "location": "San Francisco",
    "budget": 1000000,
    # Add anything else about the department here
  },
)`}
    >
      <Highlighter
        language="python"
        code={`analytics.group(
  group_id="GROUP_ID",
  traits={
    "group_type": "department",
    "name": "Engineering",
    "headcount": 25,
    "location": "San Francisco",
    "budget": 1000000,
    # Add anything else about the department here
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
  group_id: 'GROUP_ID',
  traits: {
    group_type: "department",
    name: "Engineering",
    headcount: 25,
    location: "San Francisco",
    budget: 1000000
    # Add anything else about the department here
  }
)`}
    >
      <Highlighter
        language="coffeescript"
        code={`Analytics.group(
  group_id: 'GROUP_ID',
  traits: {
    group_type: "department",
    name: "Engineering",
    headcount: 25,
    location: "San Francisco",
    budget: 1000000
    # Add anything else about the department here
  }
)`}
      />
    </CodeBlock>
  );
};

const HTTPGroupInstructions = ({ writeKey = 'YOUR_WRITE_KEY' }) => {
  return (
    <CodeBlock
      raw={`
curl https://api.june.so/sdk/group
    -H "Content-Type: application/json"
    -H "Authorization: Basic ${writeKey}"
    -X POST

{
  "groupId": "GROUP_ID",
  "traits": {
    "group_type": "department",
    "name": "Engineering",
    "headcount": 25,
    "location": "San Francisco",
    "budget": 1000000,
    # Add anything else about the department here
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
  "groupId": "GROUP_ID",
  "traits": {
    "group_type": "department",
    "name": "Engineering",
    "headcount": 25,
    "location": "San Francisco",
    "budget": 1000000,
    # Add anything else about the department here
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}`}
      />
    </CodeBlock>
  );
};

export function MultiLanguageCustomGroupScript() {
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
            <HTTPGroupInstructions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
