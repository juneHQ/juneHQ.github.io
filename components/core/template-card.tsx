import { AspectRatio, Box, BoxProps, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { GradientBadge } from 'components/core/gradient-badge';
import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

export const TEMPLATE_CARD_WIDTH_PX = 384;

export interface TemplateCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  /** Whether or not to add a "New" badge on the title */
  hasNewBadge?: boolean;
  previewHref: string;
  useTemplateHref: string;
  templateTypeBadge?: string;
  /** Custom styling for the wrapping component, which is Box */
  _wrapper?: BoxProps;
  /** The action to take when the user clicks the whole card */
  onClick?: () => void;
}

export function TemplateCard(props: TemplateCardProps) {
  return (
    <Box
      p={6}
      w={['full', 'full', TEMPLATE_CARD_WIDTH_PX + 'px']}
      borderRadius="md"
      borderWidth={1} // px
      borderColor="landing.borderGray"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05);"
      _hover={{
        borderWidth: 2, // px
        borderColor: 'purple.300',
        bg: 'purple.50',
        // 1.5rem === original p, 1px === gained borderWidth
        p: 'calc(1.5rem - 1px)',
        shadow: '0px 2px 4px rgba(104, 104, 247, 0.2)',
      }}
      role="group"
      pos="relative"
      {...props._wrapper}
    >
      {!!props.templateTypeBadge && (
        <Box pos="absolute" top={0} right={4} p={2} bg="purple.50" borderBottomRadius="4px">
          <Text color="primary" textTransform="uppercase" fontWeight="semibold" fontSize="xs">
            {props.templateTypeBadge}
          </Text>
        </Box>
      )}
      <VStack spacing={3} align="start" h="full" justifyContent="space-between">
        <VStack spacing={3} align="start" h="full" w="full">
          <HStack spacing={2}>
            <Heading as="h3" size="2xl" color="landing.black">
              {props.title}
            </Heading>
            {props.hasNewBadge && <GradientBadge title="New" />}
          </HStack>
          <Text color="landing.gray">{props.description}</Text>
          <AspectRatio ratio={146 / 47} width="full" bg="gray.50" borderRadius="base">
            <>{!!props.thumbnail && <NextImage src={props.thumbnail} alt={props.title} layout="fill" />}</>
          </AspectRatio>
        </VStack>
        <VStack spacing={3} align="start">
          <HStack spacing={4}>
            <Link href={props.previewHref || ''} passHref prefetch={false}>
              <Button as="a" variant="landingOutline" size="landingMd" borderColor="#E4E4E4" color="landing.gray">
                Preview
              </Button>
            </Link>
            <Button
              as="a"
              href={props.useTemplateHref}
              display="none"
              variant="landingSolid"
              size="landingMd"
              _groupHover={{ display: 'block' }}
            >
              Use this template
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
