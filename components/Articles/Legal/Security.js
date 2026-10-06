import { Box, UnorderedList, ListItem, Text } from '@chakra-ui/react';

function Security() {
  return (
    <Box>
      <Text>
        We follow the following guidelines for SMBs from {` `}
        <Text textDecoration="underline" as="a" href="https://www.enisa.europa.eu/">
          ENISA
        </Text>{' '}
      </Text>
      <UnorderedList>
        <ListItem>
          An access control system applicable to all users accessing the IT system should be implemented. The system
          should allow creating, approving, reviewing and deleting user accounts.
        </ListItem>
        <ListItem>
          The use of common user accounts should be avoided. In cases where this is necessary, it should be ensured that
          all users of the common account have the same roles and responsibilities.
        </ListItem>
        <ListItem>
          An authentication mechanism should be in place, allowing access to the IT system (based on the access control
          policy and system). As a minimum a username/password combination should be used. Passwords should respect a
          certain (configurable) level of complexity.
        </ListItem>
        <ListItem>
          The access control system should have the ability to detect and not allow the usage of passwords that don’t
          respect a certain (configurable) level of complexity.
        </ListItem>
        <ListItem>User passwords must be stored in a “hashed” form.</ListItem>
        <ListItem>
          Log files should be activated for each system/application used for the processing of personal data. They
          should include all types of access to data (view, modification, deletion).
        </ListItem>
        <ListItem>
          Database and applications servers should be configured to run using a separate account, with minimum OS
          privileges to function correctly.
        </ListItem>
        <ListItem>
          Database and applications servers should only process the personal data that are actually neededs to process
          in order to achieve its processing purposes.
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default Security;
