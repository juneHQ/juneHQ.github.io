import { Center, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { connectStateResults } from 'react-instantsearch-dom';

function SearchResults({ searchState, searchResults, onClose = () => {} }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <div>
      {!validQuery && (
        <Center>
          <Text color="gray.600">Search anything in our docs...</Text>
        </Center>
      )}
      {searchResults?.hits.length === 0 && validQuery && (
        <Center>
          <Text color="gray.600">Nothing found.</Text>
        </Center>
      )}
      {searchResults?.hits.length > 0 &&
        validQuery &&
        searchResults.hits.map((hit) => (
          <LinkBox
            as="article"
            py={4}
            px={2}
            key={hit.objectID}
            _hover={{ bg: 'gray.50' }}
            borderRadius="lg"
            transition="background-color 0.2s ease-in-out"
            cursor="pointer"
            onClick={onClose}
          >
            <Heading size="md" mb={1}>
              <LinkOverlay href={`/${hit.absoluteUrl}${hit.location}`}>{hit.heading}</LinkOverlay>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              "...{hit.text}..."
            </Text>
          </LinkBox>
        ))}
    </div>
  );
}

export default connectStateResults(SearchResults);
