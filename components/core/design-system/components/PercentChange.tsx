import { Flex, StyleProps, Text } from '@chakra-ui/react';

import { ArrowUp } from './Icon/Arrows/ArrowUp';
import { ArrowDown } from './Icon/Arrows/ArrowDown';

interface IPercentChangeProps extends StyleProps {
  percentChange: number;
  changeText?: string;
  reverseColor?: boolean;
}

export const PercentChange = ({
  percentChange,
  changeText,
  reverseColor = false,
  ...styleProps
}: IPercentChangeProps) => {
  let ChangeIcon;
  let insightColor = 'gray.600';
  let increased = reverseColor ? percentChange < 0 : percentChange >= 0;

  if (increased) {
    ChangeIcon = ArrowUp;
    insightColor = 'green.500';
  } else {
    ChangeIcon = ArrowDown;
    insightColor = 'red.500';
  }

  if (percentChange && percentChange !== 0) {
    return (
      <Flex align="center" {...styleProps}>
        <Flex borderRadius="md" justify="center" align="center">
          <ChangeIcon color={insightColor} />
          <Text fontSize="xs" fontWeight="semibold" color={insightColor}>
            {percentChange}%
          </Text>
        </Flex>
        {changeText && (
          <Text ml={1} fontSize="xs" color="gray.600">
            {changeText}
          </Text>
        )}
      </Flex>
    );
  }
  return (
    <Flex align="center" {...styleProps}>
      <Flex borderRadius="md" justify="center" align="center">
        <Text ml={1} fontSize="xs" fontWeight="semibold" color={`gray.600`}>
          0%
        </Text>
      </Flex>
      <Text ml={1} fontSize="xs" color="gray.600">
        {changeText}
      </Text>
    </Flex>
  );
};
