import { Input, Button, Flex, Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

function EmailCta() {
  const newPColor = 'rgba(36,31,71,0.8)';
  const newInputAreaBG = 'rgba(36,31,71,0.05)';
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    await fetch(`${process.env.JUNE_API_HOST}/inbound_subscribe?email=${email}`, {
      mode: 'no-cors',
      origin: '*',
      cache: 'no-cache',
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    setEmail('');
    setIsSubscribed(!isSubscribed);
  };

  return (
    <form onSubmit={subscribe}>
      <Flex direction="column">
        <Text fontWeight={600} color="#000000" textAlign={['center', 'center', 'left']} fontSize={18} mb={4}>
          Sign up for weekly updates and tips
        </Text>
        <Text fontWeight={500} color={newPColor} textAlign={['center', 'center', 'left']}>
          Subscribe to receive our <br /> weekly changelog and playbooks by email
        </Text>
        <Flex align={['center', 'center', 'flex-start']} direction="column">
          <Flex pt={4}>
            <Input
              id="email-input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              variant="filled"
              h={50}
              bg={newInputAreaBG}
              fontWeight={500}
            />
            <Button
              type="submit"
              w="40%"
              colorScheme="purple"
              h={50}
              borderRadius={6}
              ml={2}
              fontSize={16}
              fontWeight={600}
            >
              Get started
            </Button>
          </Flex>
          <Flex opacity={isSubscribed ? 1 : 0} transition="opacity 1s ease-in-out" pt={4} align="center">
            <Image pr={2} src="/check.svg" />
            <Text fontSize="sm" fontWeight={500} color={newPColor}>
              Awesome you are now subscribed!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}

export default EmailCta;
