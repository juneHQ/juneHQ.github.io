import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';
import Layout from './Layout';
import { List, ListItem, InlineCode, PageHeading, Paragraph, Subtitle, Title } from './Blocks';
import { MdxCodeBlock } from './CodeBlock';

function JuneLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a className="docs__link">{children}</a>
    </Link>
  );
}

const components = {
  h1: Title,
  h2: Subtitle,
  p: Paragraph,
  a: JuneLink,
  pre: MdxCodeBlock,
  ul: List,
  li: ListItem,
  code: InlineCode,
};

export default function MdxLayout({ heading, subheading = null, children }) {
  return (
    <MDXProvider components={components}>
      <Layout heading={heading} subheading={subheading}>
        {heading && <PageHeading heading={heading} subheading={subheading} />}
        {children}
      </Layout>
    </MDXProvider>
  )
}
