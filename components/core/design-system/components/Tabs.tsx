import { Tab, TabList, TabListProps, TabPanel, TabPanelProps, TabProps, Tabs, TabsProps } from '@chakra-ui/react';

export const StyledTabs: React.FC<TabsProps> = (props) => {
  const { children, ...styledProps } = props;
  return (
    <Tabs p={0} {...styledProps}>
      {children}
    </Tabs>
  );
};

export const StyledTabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, ...styledProps } = props;
  return (
    <TabPanel p={0} {...styledProps}>
      {children}
    </TabPanel>
  );
};

export const StyledTabList: React.FC<TabListProps> = (props) => {
  const { children, ...styledProps } = props;
  return (
    <TabList
      border="none"
      borderBottom={0}
      mb={6}
      height={'3rem'}
      background={'gray.50'}
      borderRadius="lg"
      alignItems={'center'}
      padding={'3px'}
      paddingTop={'2px'}
      {...styledProps}
    >
      {children}
    </TabList>
  );
};

export const StyledTab: React.FC<TabProps> = (props) => {
  const { children, ...styledProps } = props;

  const activeStyledProps = {
    background: 'white',
    border: '1px solid',
    borderColor: 'gray.100',
    borderRadius: 'lg',
    height: '100%',
    fontWeight: 'medium',
    color: 'gray.800',
  };

  return (
    <Tab
      width={'50%'}
      fontSize="sm"
      fontWeight={'400'}
      color={'gray.600'}
      _selected={activeStyledProps}
      _active={activeStyledProps}
      _focusVisible={activeStyledProps}
      {...styledProps}
    >
      {children}
    </Tab>
  );
};
