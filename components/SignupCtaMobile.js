import { Box, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupCtaMobile({ noPadding, ctaText }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setErrorMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    setEmail('');
    router.push('/success');
  };

  const emailIsValid = validateEmail(email);

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <form onSubmit={subscribe} width="100%">
      <Flex justify={['center', 'flex-start']} display={['none', 'block']}>
        <Flex
          width={noPadding ? '100%' : '390px'}
          height="54px"
          bg="white"
          borderRadius="32px"
          alignItems="center"
          boxShadow="md"
        >
          <Input
            id="email-input"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your work email.."
            border="none"
            borderRadius="32px"
            _focus={{ border: 'none' }}
          />
          <Box
            width="100%"
            as="button"
            color="white"
            px={8}
            py="2"
            style={{
              background: 'linear-gradient(180deg, #B3A9FF 0%, #746EFF 100%)',
            }}
            borderRadius="32px"
            m={2}
            type="submit"
          >
            {ctaText || <>Get early access</>}
          </Box>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" display={['block', 'none']} direction="column" px={4}>
        <Input
          px={8}
          py="2"
          width="100%"
          height="54px"
          type="email"
          name="MERGE0"
          id="MERGE0"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Your work email..."
          border="1px"
          borderColor="gray.100"
          boxShadow="sm"
          bg="white"
          borderRadius="md"
          _focus={{ border: 'none' }}
        />
        <button
          type="submit"
          className="mt-4 py-4 px-4 md:px-16 h-14 w-full bg-primary text-white font-bold rounded-md transition-all hover:scale-105 duration-300 ease-in-out g-conversion-button"
        >
          Get started
        </button>
      </Flex>
      {errorMessage || undefined}
    </form>
  );
}
