import { HStack, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth';

export function InstallationLink({ ...props }) {
  return (
    <Button as="a" href={`/docs/quickstart/install`} rel="noreferrer" colorScheme="purple" {...props}>
      See how to install the June SDK →
    </Button>
  );
}

export function IdentifyUsersLink({ ...props }) {
  return (
    <Button as="a" href={`/docs/quickstart/identify`} rel="noreferrer" colorScheme="purple" {...props}>
      See how to identify users →
    </Button>
  );
}

export function IdentifyGroupsLink({ ...props }) {
  return (
    <Button as="a" href={`/docs/advanced/group`} rel="noreferrer" colorScheme="purple" {...props}>
      See how to identify groups →
    </Button>
  );
}

export function TrackLink({ ...props }) {
  return (
    <Button as="a" href={`/docs/quickstart/track-event`} rel="noreferrer" colorScheme="purple" {...props}>
      See how to track user behaviour →
    </Button>
  );
}

export function TrackGroupLink({ ...props }) {
  return (
    <Button as="a" href={`/docs/advanced/track-event`} rel="noreferrer" colorScheme="purple" {...props}>
      See how to track group behaviour →
    </Button>
  );
}

export function ReadMoreLink({ href }) {
  const { currentApp } = useContext(AuthContext);
  return currentApp ? (
    <Text color="gray.600" fontSize="xs">
      <Link href={href}>
        <a target="_blank" rel="noreferrer">
          <Text display="inline-block" cursor="pointer" color="purple.500" fontWeight="semibold" fontSize="xs">
            Full guide
          </Text>
        </a>
      </Link>
    </Text>
  ) : null;
}

export function LinkGroup({ children }) {
  return (
    <HStack spacing={3} mt={-1} mb={3}>
      {children}
    </HStack>
  );
}
