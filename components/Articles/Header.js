import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

function Header({ text }) {
  return (
    <>
      <Text
        w={['70%']}
        fontSize={['4xl', '4xl', '6xl', '5xl', '6xl']}
        fontWeight={700}
        textAlign="center"
        lineHeight={['shorter']}
        mt={[8]}
        display={['none', 'block']}
      >
        {text}
      </Text>
      <Text
        w={['auto']}
        fontSize={['4xl']}
        fontWeight={700}
        textAlign="center"
        lineHeight={['1']}
        my={[16]}
        px={[8]}
        display={['block', 'none']}
      >
        {text}
      </Text>
    </>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
