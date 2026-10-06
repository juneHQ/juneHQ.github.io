import React from 'react';
import Icon from 'core/design-system/components/Icon';

import { Button, Flex, Progress, Text, Tooltip } from '@chakra-ui/react';

import Loading from './Stat/Loading';
import { Header } from './Stat/Header';
import { PercentChange } from './PercentChange';
import HelpCircle from './Icon/Interface/HelpCircle';

export const Stat = ({
  buttonText,
  changeText,
  changeTooltip,
  footer,
  headingTooltip,
  helpText,
  isLoading = false,
  label,
  mainCount,
  onButtonClick,
  percentChange,
  progressBarColor = 'purple',
  reverseChangeColor = false,
  showProgressBar = false,
  timerange,
  ...props
}: {
  buttonText?: string;
  changeText?: string;
  changeTooltip?: string;
  footer?: string;
  headingTooltip?: string;
  helpText?: string;
  isLoading: boolean;
  label: string;
  mainCount: string | number;
  onButtonClick: () => void;
  percentChange?: number;
  progressBarColor?: string;
  reverseChangeColor?: boolean;
  showProgressBar?: boolean;
  timerange?: string;
}) => {
  if (isLoading) {
    return <Loading label={label} labelTooltip={headingTooltip} helpText={helpText} />;
  }

  const isViewDisabled = !mainCount || mainCount === 0 || mainCount === '0%';

  return (
    <Flex
      p={5}
      align="flex-start"
      justify="space-between"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.100"
      bg="white"
      direction="column"
      {...props}
    >
      <Flex width="100%" align="center" justify="space-between">
        <Header label={label} labelTooltip={headingTooltip} helpText={helpText} />
        {buttonText && onButtonClick && (
          <Button
            px={4}
            mr={-2}
            variant="ghost"
            colorScheme="purple"
            rightIcon={<Icon iconType="icon" name="arrow-right-2" />}
            size="xs"
            onClick={onButtonClick}
            isDisabled={isViewDisabled}
          >
            {buttonText}
          </Button>
        )}
        {timerange && (
          <Text color="gray.600" fontSize="xs" w="30%" fontWeight="medium">
            {timerange}
          </Text>
        )}
      </Flex>
      <Flex my={1} align="baseline" justify="flex-start">
        <Text fontSize="2xl" fontWeight="medium">
          {mainCount}
        </Text>
      </Flex>
      {percentChange !== undefined && (
        <Flex align="center">
          <PercentChange percentChange={percentChange} changeText={changeText} reverseColor={reverseChangeColor} />
          {changeTooltip && (
            <Tooltip label={changeTooltip} placement="right">
              <HelpCircle ml={1} color="gray.600" />
            </Tooltip>
          )}
        </Flex>
      )}
      {showProgressBar && (
        <Progress
          colorScheme={progressBarColor}
          mt={4}
          value={typeof mainCount === 'string' ? parseInt(mainCount, 10) : mainCount}
          size="sm"
          borderRadius="lg"
          w="100%"
        />
      )}
      {footer && (
        <Flex align="flex-start" justify="space-between">
          <Text color={'gray.600'} fontSize="sm">
            {footer}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
