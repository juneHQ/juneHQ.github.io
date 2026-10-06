import { Flex, Text, Tooltip } from '@chakra-ui/react';

import HelpCircle from '../Icon/Interface/HelpCircle';

interface IHeaderProps {
  label: string;
  labelTooltip?: string;
  helpText?: string;
}

export const Header: React.FC<IHeaderProps> = ({ label, labelTooltip, helpText }) => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Flex align="center">
        <Text fontWeight="600" color="gray.600" fontSize="sm">
          {label}
        </Text>
        {labelTooltip && (
          <Tooltip px={2} py={1} label={labelTooltip} placement="right" borderRadius="lg">
            <HelpCircle h={4} w={4} color="gray.600" ml={1} />
          </Tooltip>
        )}
      </Flex>
      {helpText ? (
        <Text color="gray.600" fontSize="xs" fontWeight="medium">
          {helpText}
        </Text>
      ) : undefined}
    </Flex>
  );
};
