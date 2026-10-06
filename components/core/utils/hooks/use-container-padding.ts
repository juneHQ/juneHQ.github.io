import { useToken } from '@chakra-ui/react';
import { getPxValue } from '../get-px-value';
import { useWindowSize } from './use-window-size';

export function useContainerPadding() {
  const [sectionMaxWInPx] = useToken('sizes', ['landingMax']);
  const size = useWindowSize();
  const sectionMaxW = getPxValue(sectionMaxWInPx);

  if (sectionMaxW > size.width) {
    return 0;
  }
  return (size.width - sectionMaxW) / 2;
}
