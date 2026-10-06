import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SDK, useSdkStore } from "../sdk.store";
import CodeBlock, { Highlighter } from "../CodeBlock";

const SimpleGroupTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`window.analytics.track('signed_in', {
  method: 'sso',
  plan: 'enterprise',
  groups: {
    group: 'group_id',
    department: 'department_id',
    project: 'project_id'
  }
});`}
    >
      <Highlighter
        language="javascript"
        code={`window.analytics.track('signed_in', {
  method: 'sso',
  plan: 'enterprise',
  groups: {
    group: 'group_id',
    department: 'department_id',
    project: 'project_id'
  }
});`}
      />
    </CodeBlock>
  );
};

const ReactGroupTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.track('signed_in', {
  method: 'sso',
  plan: 'enterprise',
  groups: {
    group: 'group_id',
    department: 'department_id',
    project: 'project_id'
  }
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.track('signed_in', {
  method: 'sso',
  plan: 'enterprise',
  groups: {
    group: 'group_id',
    department: 'department_id',
    project: 'project_id'
  }
});`}
      />
    </CodeBlock>
  );
};

const NodeGroupTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.track({
  userId: 'USER_ID',
  event: 'signed_in',
  properties: {
    method: 'sso',
    plan: 'enterprise',
    groups: {
      group: 'group_id',
      department: 'department_id',
      project: 'project_id'
    }
  }
});`}
    >
      <Highlighter
        language="javascript"
        code={`analytics.track({
  userId: 'USER_ID',
  event: 'signed_in',
  properties: {
    method: 'sso',
    plan: 'enterprise',
    groups: {
      group: 'group_id',
      department: 'department_id',
      project: 'project_id'
    }
  }
});`}
      />
    </CodeBlock>
  );
};

const PythonGroupTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`analytics.track(
  user_id="USER_ID",
  event="signed_in",
  properties={
    "method": "sso",
    "plan": "enterprise",
    "groups": {
      "group": "group_id",
      "department": "department_id",
      "project": "project_id"
    }
  }
)`}
    >
      <Highlighter
        language="python"
        code={`analytics.track(
  user_id="USER_ID",
  event="signed_in",
  properties={
    "method": "sso",
    "plan": "enterprise",
    "groups": {
      "group": "group_id",
      "department": "department_id",
      "project": "project_id"
    }
  }
)`}
      />
    </CodeBlock>
  );
};

const RubyGroupTrackInstructions = () => {
  return (
    <CodeBlock
      raw={`Analytics.track(
  user_id: 'USER_ID',
  event: 'signed_in',
  properties: {
    method: 'sso',
    plan: 'enterprise',
    groups: {
      group: 'group_id',
      department: 'department_id',
      project: 'project_id'
    }
  }
)`}
    >
      <Highlighter
        language="coffeescript"
        code={`Analytics.track(
  user_id: 'USER_ID',
  event: 'signed_in',
  properties: {
    method: 'sso',
    plan: 'enterprise',
    groups: {
      group: 'group_id',
      department: 'department_id',
      project: 'project_id'
    }
  }
)`}
      />
    </CodeBlock>
  );
};

const HTTPGroupTrackInstructions = ({ writeKey = 'YOUR_WRITE_KEY' }) => {
  return (
    <CodeBlock
      raw={`
curl https://api.june.so/sdk/track
    -H "Content-Type: application/json"
    -H "Authorization: Basic ${writeKey}"
    -X POST

{
  "userId": "USER_ID",
  "event": "signed_in",
  "properties": {
    "method": "sso",
    "plan": "enterprise",
    "groups": {
      "group": "group_id",
      "department": "department_id",
      "project": "project_id"
    }
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
  "event": "signed_in",
  "properties": {
    "method": "sso",
    "plan": "enterprise",
    "groups": {
      "group": "group_id",
      "department": "department_id",
      "project": "project_id"
    }
  },
  "timestamp": "2012-12-02T00:31:38.208Z"
}`}
      />
    </CodeBlock>
  );
};

export function MultiLanguageGroupTrackScript() {
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
            <SimpleGroupTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <ReactGroupTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <NodeGroupTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <PythonGroupTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <RubyGroupTrackInstructions />
          </TabPanel>
          <TabPanel p={0}>
            <HTTPGroupTrackInstructions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
