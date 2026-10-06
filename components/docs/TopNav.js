import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Context/Auth';
import { useAuth } from 'unbundled-core/hooks/useAuth';
import Search from './search/Search';
import { default as JuneMenu } from './Menu';

export default function TopNav() {
  const [navOpen, setNavOpen] = useState(false);
  const btnRef = useRef();
  const { currentApp, setCurrentApp } = useContext(AuthContext);
  const { loggedIn, apps } = useAuth();

  const onOpen = () => setNavOpen(true);
  const onClose = () => setNavOpen(false);

  return (
    <>
      <Drawer trapFocus={false} isOpen={navOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="gray.50" py={12}>
          <DrawerCloseButton />
          <DrawerBody>
            <JuneMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack alignItems={'center'} py={4} mb={8}>
        <Button mr={4} display={{ base: 'block', md: 'none' }} onClick={onOpen}>
          <HamburgerIcon w={4} h={4} />
        </Button>
        <Search />
        <Spacer />
        {!loggedIn && (
          <Button
            ml={4}
            size="sm"
            as="a"
            href="https://analytics.june.so/login?next=http://june.so/docs"
            fontWeight={600}
            fontSize={14}
            colorScheme="purple"
          >
            Log in
          </Button>
        )}
        {loggedIn && currentApp && (
          <>
            <Button
              display={{ base: 'none', md: 'flex' }}
              ml={4}
              size="sm"
              as="a"
              href={`${process.env.JUNE_APP_HOST}/a/${currentApp.id}/getting-started`}
              variant="ghost"
            >
              Your write keys
            </Button>
          </>
        )}
      </HStack>
    </>
  );
}
