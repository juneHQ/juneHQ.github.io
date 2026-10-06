import { Box, Heading, Text } from '@chakra-ui/react';

function slugify(s, separator = '-') {
  return s
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .trim()
    .replace(/\s+/g, separator);
}

export function PageHeading({ heading, subheading }) {
  return (
    <Box mb={10}>
      <Heading fontSize="3xl" fontWeight={600} mb={3}>
        {heading}
      </Heading>
      <Heading fontSize={'lg'} fontWeight={400} color="gray.600">
        {subheading}
      </Heading>
    </Box>
  );
}

export function Paragraph({ children, ...props }) {
  return (
    <Text color="gray.700" fontSize="sm" mb={3} {...props}>
      {children}
    </Text>
  );
}

export function Title({ children }) {
  return (
    <Box mt={8} display="flex" alignItems="center" mb={2} id={slugify(children)}>
      <Heading fontSize="2xl" fontWeight={600}>
        {children}
      </Heading>
    </Box>
  );
}

export function Subtitle({ children }) {
  return (
    <Box mt={6} display="flex" alignItems="center" mb={2} id={slugify(children)}>
      <Heading fontSize="xl" fontWeight={600}>
        {children}
      </Heading>
    </Box>
  );
}

export function List({ children, ...props }) {
  // Note: using Text as a parent would emit incorrect HTML when server-side rendering.
  return (
    <ul style={{ color: 'var(--chakra-colors-gray-600)', marginBottom: '1em', marginLeft: '1.5rem' }}>{children}</ul>
  );
}

export function ListItem({ children }) {
  return (
    // style with bullets in tailwind
    <li className="list-disc mb-1">
      <Text color="gray.700" fontSize="sm">
        {children}
      </Text>
    </li>
  );
}

export function InlineCode({ children }) {
  return <code className="px-1 py-1 font-semibold text-xs bg-gray-100 rounded-xl">{children}</code>;
}

export default function Block({ title, subtitle, children }) {
  return (
    <Box>
      <Box>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Box>
      {children}
    </Box>
  );
}
