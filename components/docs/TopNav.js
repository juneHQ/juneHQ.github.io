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
import { useRef, useState } from 'react';
import Search from './search/Search';
import { default as JuneMenu } from './Menu';

export default function TopNav() {
  const [navOpen, setNavOpen] = useState(false);
  const btnRef = useRef();

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
      </HStack>
    </>
  );
}
