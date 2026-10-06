import { Box, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useAuth } from 'unbundled-core/hooks/useAuth';
import { AuthContext } from 'Context/Auth';

export default function Widget({ children, ...props }) {
  const { loggedIn } = useAuth();
  const { currentApp } = useContext(AuthContext);

  if (currentApp === null && loggedIn) {
    return (
      <Box
        mt={4}
        py={6}
        rounded={'lg'}
        overflowX={'auto'}
        whiteSpace={'pre-line'}
        px={6}
        background={'gray.50'}
        textAlign={'center'}
        fontFamily={'sans-serif'}
        {...props}
      >
        <Heading fontSize="md" fontWeight={600}>
          Select an app to begin.
        </Heading>
      </Box>
    );
  }

  return React.cloneElement(children, { appId: currentApp ? currentApp.id : null });
}
