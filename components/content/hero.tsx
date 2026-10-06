import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <VStack spacing={4} align="center">
      <Heading 
        as="h1" 
        fontSize={["4xl", "5xl", "6xl"]} 
        fontFamily="hero" 
        fontWeight="black" 
        color="purple.900"
        textAlign="center"
      >
        {title}
      </Heading>
      <Text 
        fontSize={["xl", "2xl"]} 
        color="purple.900" 
        fontWeight="semibold" 
        fontFamily="hero" 
        maxWidth="xl"
        textAlign="center"
      >
        {subtitle}
      </Text>
      <HStack>
        <Text
          as="a"
          fontSize={["lg", "xl"]}
          color="primary"
          href="https://x.com/intent/follow?screen_name=JuneDotSo"
          target="_blank"
          rel="noopener noreferrer"
          fontFamily="hero"
        >
          Follow us on X
        </Text>
      </HStack>
    </VStack>
  );
};
