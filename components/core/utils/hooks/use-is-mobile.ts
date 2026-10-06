import { useEffect, useState } from 'react';
import { checkTouchScreen } from '../check-touch-screen';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (navigator) {
      const isTouch = checkTouchScreen(navigator);
      setIsMobile(isTouch);
    }
  }, []);

  return isMobile;
}
