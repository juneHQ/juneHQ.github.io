import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoints = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      };

      const updatedScreenSizes = {
        xs: width >= breakpoints.xs,
        sm: width >= breakpoints.sm,
        md: width >= breakpoints.md,
        lg: width >= breakpoints.lg,
        xl: width >= breakpoints.xl,
      };

      setScreenSize(updatedScreenSizes);
    };

    handleResize(); // Set initial screen size

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
