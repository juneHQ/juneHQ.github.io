import { Box } from '@chakra-ui/react';
import { ReactNode, useEffect, useRef } from 'react';
import styles from './hover-effect.module.css';

export interface HoverEffectProps {
  children: ReactNode;
  hoverBorderColor?: string;
  hoverGlowColor?: string;
  staticBgColor?: string;
  staticBorderColor?: string;
}

export function HoverEffect({
  children,
  hoverBorderColor,
  hoverGlowColor,
  staticBorderColor,
  staticBgColor,
}: HoverEffectProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (staticBorderColor) containerRef.current.style.setProperty('--static-border', staticBorderColor);
    if (staticBgColor) containerRef.current.style.setProperty('--static-bg', staticBgColor);

    function mouseMoveEvent(e) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.x;
      const y = e.clientY - rect.y;
      containerRef.current.style.setProperty('--x', `${x}px`);
      containerRef.current.style.setProperty('--y', `${y}px`);
      if (hoverBorderColor) containerRef.current.style.setProperty('--hover-border', hoverBorderColor);
      if (hoverGlowColor) containerRef.current.style.setProperty('--hover-glow', hoverGlowColor);
    }

    containerRef.current.addEventListener('mousemove', mouseMoveEvent);
    return () => {
      containerRef.current?.removeEventListener?.('mousemove', mouseMoveEvent);
    };
  }, []);

  return (
    <Box ref={containerRef} className={styles.container}>
      <Box className={styles.border} />
      <Box className={styles.background} />
      <Box className={styles.glow} />
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
}
