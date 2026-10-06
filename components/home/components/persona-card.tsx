import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Progress, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface PersonaCardProps {
  name: string;
  title: string;
  subtitle: string;
  moreLinkText: string;
  moreLink: string;
  accentColor: string;
  progress?: number;
}

export function PersonaCard(props: PersonaCardProps) {
  const accent500 = props.accentColor + '.500';

  return (
    <Box pos="relative" bg="landing.activeGray" borderRadius="md" p={6}>
      <VStack spacing={4} alignItems="flex-start">
        <Text fontSize="lg" fontWeight="semibold" lineHeight="22px" color={accent500}>
          {props.name}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" lineHeight="29px" color="landing.black">
          {props.title}
        </Text>
        <Text color="landing.gray">{props.subtitle}</Text>
        <Link href={props.moreLink} passHref prefetch={false}>
          <Button
            as="a"
            variant="link"
            leftIcon={<ArrowForwardIcon />}
            fontSize="md"
            fontWeight="bold"
            color={accent500}
            lineHeight="19px"
          >
            {props.moreLinkText}
          </Button>
        </Link>
      </VStack>
      <Progress
        pos="absolute"
        borderRadius="md"
        size="sm"
        value={props.progress || 0}
        width="full"
        bottom={0}
        left={0}
        colorScheme={props.accentColor}
      />
    </Box>
  );
}
