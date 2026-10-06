import { Box, Button, useClipboard } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';

export const WRAPPER_PROPS = {
  background: 'purple.900',
  py: 5,
  px: 4,
  mb: 4,
  mt: 4,
  fontSize: 'sm',
  rounded: 'lg',
};

export function Highlighter({ code, language }) {
  const customTheme = {
    ...theme,
    plain: { ...theme.plain, backgroundColor: 'var(--chakra-colors-purple-900)' },
  };

  return (
    <Highlight {...defaultProps} theme={customTheme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <article className="line" key={i} {...getLineProps({ line, key: i })}>
              <div className="line-no">{i + 1}</div>
              <div className="line-content">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </article>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export function MdxCodeBlock({ children }) {
  const code = children.props.children.trim();
  const language = children.props.className?.replace('language-', '').trim();

  return (
    <CodeBlock raw={code}>
      <Highlighter language={language} code={code} />
    </CodeBlock>
  );
}

export default function CodeBlock({ children, wrapped = true, raw = '' }) {
  const { hasCopied, onCopy } = useClipboard(raw);

  return (
    <article>
      <Box position="relative" fontSize="sm" {...(wrapped ? WRAPPER_PROPS : {})}>
        <Box maxW="100%" overflowX={'scroll'}>
          {children}
        </Box>
        <Button size={'xs'} colorScheme="whiteAlpha" position="absolute" top={3} right={3} onClick={onCopy}>
          {hasCopied ? 'Copied!' : 'Copy'}
        </Button>
      </Box>
    </article>
  );
}
