import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Logo({ src, w, h }) {
  return (
    <Flex px={[4, 0]} alignItems="center" justifyContent={'center'}>
      <img width={w} height={h} src={src} />
    </Flex>
  );
}

Logo.propTypes = {
  src: PropTypes.string,
};

export default Logo;
