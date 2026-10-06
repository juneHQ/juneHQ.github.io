import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useHotkeys } from 'react-hotkeys-hook';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import searchClient from './searchClient';
import { InstantSearch } from 'react-instantsearch-dom';
import { SearchIcon } from '@chakra-ui/icons';

export default function Search({ refine }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useHotkeys(
    '/',
    (e) => {
      e.preventDefault();
      if (isOpen) return;
      onOpen();
    },
    { enabled: !isOpen, deps: [isOpen] },
  );

  return (
    <div>
      <SearchIcon display={{ base: 'block', md: 'none' }} onClick={onOpen} w={4} h={4} />
      <InputGroup size="md" onClick={onOpen} display={{ base: 'none', md: 'block' }}>
        <Input pr="4.5rem" borderRadius="lg" placeholder="Search the docs..." readOnly />
        <InputRightElement mr={2}>
          <Button h="1.75rem" size="sm" boxShadow={'xs'} color="purple.500" disabled>
            /
          </Button>
        </InputRightElement>
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <InstantSearch searchClient={searchClient} indexName="docs">
            <ModalHeader>
              <SearchBox />
            </ModalHeader>
            <ModalBody>
              <SearchResults onClose={onClose} />
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </InstantSearch>
        </ModalContent>
      </Modal>
    </div>
  );
}
