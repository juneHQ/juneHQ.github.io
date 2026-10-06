import { Flex, Skeleton } from '@chakra-ui/react';

import { Header } from './Header';

interface ILoadingProps {
  label?: string;
  labelTooltip?: string;
  helpText?: string;
}

export const Loading: React.FC<ILoadingProps> = ({ label, labelTooltip, helpText }) => {
  return (
    <Flex
      py={5}
      px={5}
      mt={3}
      align="flex-start"
      justify="space-between"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.200"
      bg="white"
      direction="column"
    >
      {label && labelTooltip && helpText && <Header label={label} labelTooltip={labelTooltip} helpText={helpText} />}
      <Skeleton my={2} width="60px" height="20px" borderRadius="lg" />
      <Skeleton width="150px" height="20px" borderRadius="lg" />
    </Flex>
  );
};

export default Loading;
