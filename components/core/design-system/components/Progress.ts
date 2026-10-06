import { ProgressProps } from '@chakra-ui/react';

const baseStyle = ({ colorScheme }: Pick<ProgressProps, 'colorScheme'>) => {
  return {
    filledTrack: {
      bg: `${colorScheme}.400`,
    },
  };
};

const Progress = {
  parts: ['filledTrack'],
  baseStyle: baseStyle,
};

export default Progress;
