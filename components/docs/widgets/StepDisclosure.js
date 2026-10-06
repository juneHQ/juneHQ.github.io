import {
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Badge,
  Text,
} from '@chakra-ui/react';
import { useAuth } from 'unbundled-core/hooks/useAuth';

export default function StepDisclosure({ title, children }) {
  const { app } = useAuth();

  return (
    <div>
      <Text mt={4} mb={2} fontSize="xs" color="gray.600" textTransform="uppercase" fontWeight="bold">
        Technical Tasks
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton alignItems="center" px={0} _hover={{ backgroundColor: 'transparent' }}>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Flex
                  h={6}
                  w={6}
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  backgroundColor={'white'}
                  borderColor={'gray.200'}
                  borderRadius="full"
                  textAlign="center"
                  fontSize="xs"
                  color="gray.600"
                  mr={2}
                >
                  1
                </Flex>
                <p>{title}</p>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={0}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
