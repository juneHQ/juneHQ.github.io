import { Box, BoxProps, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { AnimatedCard } from './AnimatedCard';
import CompanyJuneLogoIcon from 'components/core/design-system/components/Icon/Logos/CompanyJuneLogoIcon';
import { motion } from 'framer-motion';
import { SlackLogo } from 'components/core/design-system/components/Icon/Logos/SlackLogo';

const SLACK_MESSAGES = [
  <Text key={'des'} fontSize="sm">
    🐳{' '}
    <Text color={'#1264a3'} as="span">
      des@intercom.com
    </Text>{' '}
    just{' '}
    <Text color="#1264a3" as="span" textTransform="lowercase">
      signed up
    </Text>
  </Text>,
  <Text key={'ben'} fontSize="sm">
    🕰{' '}
    <Text color={'#1264a3'} as="span">
      ben@intercom.com
    </Text>{' '}
    just{' '}
    <Text color="#1264a3" as="span" textTransform="lowercase">
      signed up
    </Text>{' '}
  </Text>,
  <Text key={'sam'} fontSize="sm">
    💌{' '}
    <Text color={'#1264a3'} as="span">
      sam@openai.com
    </Text>{' '}
    just{' '}
    <Text color="#1264a3" as="span" textTransform="lowercase">
      invited a teammate
    </Text>{' '}
  </Text>,
  <Text key={'patrick'} fontSize="sm">
    🔥{' '}
    <Text color={'#1264a3'} as="span">
      patrick@stripe.com
    </Text>{' '}
    just{' '}
    <Text color="#1264a3" as="span" textTransform="lowercase">
      signed up
    </Text>{' '}
  </Text>,
];

const SlackCard = (props: { _box?: BoxProps; time: string; message: React.ReactNode }) => {
  return (
    <Box cursor={'pointer'} bg={'white'} p={'4'} rounded={'lg'} boxShadow={'0px 0px 4px rgba(0, 0, 0, 0.1)'}>
      <HStack align={'start'}>
        <CompanyJuneLogoIcon fontSize={32} />
        <VStack align={'start'}>
          <HStack>
            <Text fontSize={'sm'} fontWeight={'semibold'} color={'landing.black'}>
              June
            </Text>
            <Text fontSize={10} fontWeight={'semibold'} color={'gray.600'} bg={'gray.100'} px={'1'} rounded={'sm'}>
              APP
            </Text>
            <Text fontSize={'sm'} color={'gray.600'}>
              {props.time}
            </Text>
          </HStack>
          {props.message}
        </VStack>
      </HStack>
    </Box>
  );
};

export function SlackLive() {
  const [currentMessage, setCurrentMessage] = useState(0);

  const handleNextMessage = () => {
    if (currentMessage === SLACK_MESSAGES.length - 1) {
      setCurrentMessage(0);
    } else {
      setCurrentMessage(currentMessage + 1);
    }
  };

  const CurrentMessage = SLACK_MESSAGES[currentMessage];

  return (
    <AnimatedCard ctaText="See your new companies" bgType="pale" p={[10, 10, 20]}>
      <Flex flexDir="column" justify="center" h="full" w="full">
        <VStack spacing={8}>
          <Box display={['none', 'none', 'block']}>
            <SlackLogo fontSize={64} />
          </Box>
          <VStack align={'stretch'} w={'full'}>
            <Text fontWeight="bold" px={2}>
              #live-activity
            </Text>
            <motion.div
              layout
              key={currentMessage}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.35 }}
              onClick={handleNextMessage}
            >
              <SlackCard time="10:30 AM" message={CurrentMessage} />
            </motion.div>
          </VStack>
        </VStack>
      </Flex>
    </AnimatedCard>
  );
}
