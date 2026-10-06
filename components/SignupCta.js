import { Flex, Text, Button, Image } from '@chakra-ui/react';
import SignupCtaMobile from 'components/SignupCtaMobile';

function SignupCta() {
  return (
    <Flex minH="80vh" textAlign="center" direction="column" align="center" justify={['center']}>
      <Flex h="100%" w="100%" justify="center" align="center" pt={[0, '5px']}>
        <Flex h="100%" minH={['50vh', '50vh']} direction="column" align="center" justify="center" mt={[24, 0]}>
          <Image h={20} src="/june-logo-symbol-only.svg" />
          <Flex mt={(24, 8)}>
            <Text
              style={{
                WebkitAnimationName: 'Header',
                animationFillMode: 'both',
                animationDuration: '1.5s',
                animationDelay: '0s',
                animationName: 'Header',
              }}
              fontSize={['3xl', '4xl', '5xl', '6xl']}
              fontFamily="Heading Font"
              lineHeight="shorter"
              color="#21216D"
            >
              Get started with June today.
            </Text>
          </Flex>
          <Text
            mt={2}
            fontSize="xl"
            display={['none', 'block']}
            overflowX="hidden"
            color="#21216D"
            maxW="70%"
            style={{
              WebkitAnimationName: 'Header',
              animationFillMode: 'both',
              animationDuration: '1.5s',
              WebkitAnimationDelay: '0.4s',
              animationDelay: '0.4s',
              animationName: 'Header',
            }}
          >
            June is instant product analytics. We automatically generate graphs for the metrics you should track, just
            connect your Segment account.
          </Text>
          <Flex
            w="100%"
            justify="center"
            mt={8}
            display={['flex', 'none']}
            style={{
              WebkitAnimationName: 'Header',
              animationFillMode: 'both',
              animationDuration: '1.5s',
              WebkitAnimationDelay: '0.6s',
              animationDelay: '0.6s',
              animationName: 'Header',
            }}
          >
            <SignupCtaMobile />
          </Flex>
          <Flex
            w="100%"
            justify="center"
            mt={8}
            display={['none', 'flex']}
            style={{
              WebkitAnimationName: 'Header',
              animationFillMode: 'both',
              animationDuration: '1.5s',
              WebkitAnimationDelay: '0.6s',
              animationDelay: '0.6s',
              animationName: 'Header',
            }}
          >
            <a href={`${process.env.JUNE_APP_HOST}/start`}>
              <Button
                _hover={{
                  boxShadow: 'rgb(80 63 205 / 50%) 0px 1px 30px',
                  transition: 'all 0.1s ease 0s',
                }}
                bg="#6868F7"
                colorScheme="purple"
                size="lg"
                px={[4, 16]}
                h="64px"
                className="g-conversion-button"
              >
                <Flex align="center" justify="center">
                  Get started
                </Flex>
              </Button>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default SignupCta;
