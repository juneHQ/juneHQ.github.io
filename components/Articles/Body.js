import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

function Body({ children }) {
  return <ReactMarkdown components={ChakraUIRenderer()}>{children}</ReactMarkdown>;
}

Body.propTypes = {
  children: PropTypes.object,
};
export default Body;
