import React from 'react';
import NextImage from 'next/image';
import { PlugAndRunCardProps } from 'components/core/plug-and-run-card';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const FRESHPAINT_WALKTHROUGH_COMPONENTS: Omit<PlugAndRunCardProps, 'order'>[] = [
  {
    title: 'Connect to Freshpaint',
    durationText: '2 minutes',
    serviceLogo: '/integrations/freshpaint-words-logo.png',
    description: 'Connect your Freshpaint sources and start sending your live product data into June.',
    content: (
      <VStack pl={3} h="full">
        <HStack spacing={10} mt="29px" mb={6}>
          <Box>
            <NextImage
              width={40}
              height={40}
              src="/integrations/freshpaint-logo.png"
              alt="freshpaint"
              objectFit="contain"
            />
          </Box>
          <Box>
            <NextImage width={14} height={14} src="/icons/left-right-arrows.svg" alt="arrows" objectFit="contain" />
          </Box>
          <Box>
            <NextImage width={40} height={40} src="/june-logo-symbol-only.svg" alt="june" objectFit="contain" />
          </Box>
        </HStack>
        <Box
          bg="white"
          shadow="0px 2px 1px rgba(13, 19, 27, 0.05), 0px 0px 1px rgba(13, 19, 27, 0.25)"
          borderTopLeftRadius="lg"
          width="full"
          height="full"
          pl={4}
          pt={4}
          pb="26px"
        >
          <VStack spacing={4} w="full">
            <VStack align="start" w="full" spacing={1}>
              <HStack w="full" spacing={32}>
                <Text whiteSpace="nowrap" fontSize="sm" fontWeight="medium" color="#070B1F">
                  Add more sources
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color="primary"
                  textDecor="underline"
                  textUnderlineOffset="2px"
                  whiteSpace="nowrap"
                >
                  Ask a teammate
                </Text>
              </HStack>
              <Text fontSize="sm" color="#6A6D7D" whiteSpace="nowrap">
                Connect your freshpaint account
              </Text>
            </VStack>
            <Box w="full" bg="gray.50" py="13px" pl={4} pr="25px" borderLeftRadius="lg">
              <Box
                bg="white"
                shadow="0px 0.636364px 2.24px rgba(33, 40, 54, 0.16)"
                borderRadius="6px"
                px={4}
                py={2}
                minW={80}
              >
                <HStack justify="center">
                  <NextImage
                    width={18}
                    height={18}
                    src="/integrations/freshpaint-logo.png"
                    alt="freshpaint"
                    objectFit="contain"
                  />
                  <Text fontWeight="medium" whiteSpace="nowrap">
                    Add your first source
                  </Text>
                </HStack>
              </Box>
            </Box>
          </VStack>
        </Box>
      </VStack>
    ),
  },
  {
    title: 'Import historical data',
    durationText: '2 minutes',
    serviceLogo: '/integrations/freshpaint-words-logo.png',
    description: 'Get your historical data into June to get a full view of your progress.',
    content: (
      <VStack align="start" pl={3} pt={6} h="full" spacing={4}>
        <Text fontWeight="semibold" fontSize="xs" color="#6A6D7D" textTransform="uppercase">
          Integrations
        </Text>
        <Box
          bg="white"
          shadow="0px 2px 1px rgba(13, 19, 27, 0.05), 0px 0px 1px rgba(13, 19, 27, 0.25)"
          borderTopLeftRadius="lg"
          width="full"
          height="full"
        >
          <HStack pt={2} pl={4} borderBottom="1px solid #ECEDF3">
            <Box px={4} py={2} borderBottom="1px solid #070B1F" mb="-1px">
              <Text lineHeight={1.71} color="#070B1F">
                Source
              </Text>
            </Box>
            <Box px={4} py={2}>
              <Text lineHeight={1.71} color="#6A6D7D">
                Destination
              </Text>
            </Box>
          </HStack>
          <VStack pl={6} pt={3.5} spacing="18px" w="full" h="full">
            <Box
              w="full"
              bg="purple.50"
              border="2px"
              borderColor="purple.300"
              borderRightWidth={0}
              borderRadius="6px"
              borderRightRadius={0}
              shadow="0px 2px 4px rgba(104, 104, 247, 0.2)"
              py={6}
              pl={6}
              flexShrink={0}
            >
              <HStack spacing={6}>
                <Box>
                  <NextImage
                    width={64}
                    height={64}
                    src="/integrations/freshpaint-logo-big.png"
                    alt="freshpaint"
                    objectFit="contain"
                  />
                </Box>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="semibold" color="#070B1F">
                    Freshpaint replay
                  </Text>
                  <Text fontSize="sm" color="#6A6D7D" whiteSpace="nowrap">
                    Import in June your historical data
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Box
              w="full"
              h="full"
              bg="white"
              border="1px solid #ECEDF3"
              borderRightWidth={0}
              borderTopLeftRadius="lg"
            />
          </VStack>
        </Box>
      </VStack>
    ),
  },
  {
    title: 'Get insight',
    durationText: 'Instant',
    serviceLogo: '/logos/slack.svg',
    description:
      'Keep your team aligned. Celebrate milestones with event notifications, and track your growth with weekly digests.',
    content: (
      <VStack
        mt="11px"
        ml="13px"
        bg="white"
        shadow="0px 2px 1px rgba(13, 19, 27, 0.05), 0px 0px 1px rgba(13, 19, 27, 0.25)"
        borderTopLeftRadius="lg"
        h="full"
        spacing={6}
      >
        {/* Today divider */}
        <Box pos="relative" h="1px" w="full" bg="#DFDFDF" mt={7}>
          <Box
            pos="absolute"
            left="45%"
            transform="translateY(-50%)"
            bg="white"
            border="1px solid #DFDFDF"
            shadow="0px 1px 1px rgba(0, 0, 0, 0.05)"
            borderRadius="full"
            px="17px"
            py="7px"
          >
            <HStack spacing={1}>
              <Text fontFamily="Lato" fontWeight="bold" fontSize={13} color="#1D1C1D">
                Today
              </Text>
              <ChevronDownIcon />
            </HStack>
          </Box>
        </Box>
        {/* Slack message */}
        <Box pl="23px" h="full">
          <HStack spacing={1.5} align="start">
            <Box flexShrink={0}>
              <NextImage width={40} height={40} src="/june-logo-symbol-only.svg" alt="june" />
            </Box>
            <Box>
              <HStack>
                <Text fontFamily="Lato" fontSize={15} fontWeight="extrabold" color="#1D1C1D">
                  June
                </Text>
                <Box bg="#E2E2E2" p={1}>
                  <Text fontFamily="Lato" fontSize="xs" fontWeight="medium" color="#575757">
                    APP
                  </Text>
                </Box>
                <Text fontFamily="Lato" fontSize="xs" fontWeight="medium" color="#6F6F6F">
                  6:49 PM
                </Text>
              </HStack>
              <Text fontFamily="Lato" fontSize={15} color="#000">
                Hey there 👋 I have succesfully joined this channel! I’ll start sending a daily digest on the feature
                usage of the Feature adoption- report loaded report
              </Text>
            </Box>
          </HStack>
          <Box pos="relative" w="full" sx={{ aspectRatio: '6' }}>
            <NextImage src="/home/walkthrough/slack-graph.svg" alt="slack graph" layout="fill" objectFit="cover" />
          </Box>
        </Box>
      </VStack>
    ),
  },
];
