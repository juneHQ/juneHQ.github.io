import { Input } from '@chakra-ui/react';
import { connectSearchBox } from 'react-instantsearch-dom';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

function SearchBox({ refine }) {
  const debouncedRefine = useCallback(
    debounce((e) => refine(e.target.value), 300),
    [],
  );

  return <Input borderRadius="lg" placeholder="Search the docs..." onChange={debouncedRefine} />;
}

export default connectSearchBox(SearchBox);
