import { useRouter } from 'next/dist/client/router';
import { useAuth } from 'unbundled-core/hooks/useAuth';
import WarningBanner from './WarningBanner';
import { Button } from '@chakra-ui/react';

export default function TokenWarning() {
  const { query } = useRouter();
  const { loggedIn } = useAuth();
  return !loggedIn && query?.token ? (
    <WarningBanner
      title="You're not logged in"
      description={
        <div>
          <p>
            A teammate shared these installation docs with your unique install script. However, to test your
            integration, you must be logged in.
          </p>
          <Button as="a" href="https://analytics.june.so/login" mt={2}>
            Login
          </Button>
        </div>
      }
    />
  ) : null;
}
