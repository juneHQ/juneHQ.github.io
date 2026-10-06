import { Button, ButtonProps, Text } from '@chakra-ui/react';

interface SidePanelButtonProps {
  label: string;
  isActive: boolean;

  _button?: ButtonProps;
  onClick: () => void;
}

export function SidePanelButton(props: SidePanelButtonProps) {
  return (
    <Button
      mr="2"
      mb="2"
      bg={props.isActive ? 'primary' : 'white'}
      border="1px solid #EEEEEE"
      rounded="md"
      px="2.5"
      h="10"
      cursor="pointer"
      _hover={{
        color: props.isActive ? 'primary' : 'white',
      }}
      onClick={props.onClick}
      {...props._button}
    >
      <Text whiteSpace="nowrap" fontWeight="medium" color={props.isActive ? 'white' : 'landing.almostBlack.500'}>
        {props.label}
      </Text>
    </Button>
  );
}
