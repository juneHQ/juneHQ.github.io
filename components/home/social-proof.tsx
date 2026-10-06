import { PageSectionProps } from "types/page-section-props";
import { HoverEffectProps } from "components/home/components/hover-effect";
import { Box, Flex, TextProps } from "@chakra-ui/react";

interface SocialProps extends PageSectionProps {
  _hoverEffect?: Pick<HoverEffectProps, 'staticBorderColor' | 'staticBgColor'>;
  _hoverTitle?: TextProps;
  _hoverDescription?: TextProps;
}

export const SocialProof = (props: SocialProps) => {
  const logos = [
    { src: '/logos-q3/attio.svg', alt: 'Attio Logo' },
    { src: '/logos-q3/causal.svg', alt: 'Causal Logo' },
    { src: '/logos-q3/humaans.svg', alt: 'Humaans Logo' },
    { src: '/logos-q3/railway.svg', alt: 'Railway Logo' },
    { src: '/logos-q3/reveal.svg', alt: 'Reveal Logo' },
    { src: '/logos-q3/rootly.svg', alt: 'Rootly Logo' },
    { src: '/logos-q3/tacto.svg', alt: 'Tacto Logo' },
    { src: '/logos-q3/knack.svg', alt: 'Knack Logo' },
    { src: '/logos-q3/snackmagic.svg', alt: 'Snackmagic Logo' },
    { src: '/logos-q3/stravito.svg', alt: 'Stravito Logo' },
    { src: '/logos-q3/vessl.svg', alt: 'Vessl Logo' },
    { src: '/logos-q3/xano.svg', alt: 'Xano Logo' },
  ];

  return (
    <Box bg="landing.almostBlack.500" {...props._wrapper} display={['block', 'block', 'block']} maxW="1192px" mx="auto">
      <Flex flexDirection="column" justifyContent={'center'} alignItems="center">
        <Box
          pos="relative"
          w="full"
          display="flex"
          flexDirection="column"
          alignItems="start"
          height="auto"
          pt={[0, 0, 0]}
          mb={[0, 0, '120px']}
        >
          <div 
            className="absolute left-0 z-10 pointer-events-none w-full h-[72px] top-[56px]"
            style={{
              background:
                'linear-gradient(90deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 25%, rgba(250, 250, 250, 0) 75%, #FAFAFA 100%)',
            }}
          ></div>
          <div className="text-start text-[#ADB5BD] font-medium font-hero w-[345px] lg:w-full px-6 xl:px-0 text-2xl tracking-normal pt-0 md:pt-2">
            <h2>Trusted by teams at</h2>
          </div>
          <div className="mt-6 relative overflow-hidden">
            <div className="max-w-[1192px] overflow-hidden w-full">
              <div className="flex gap-12 animate-infinite-scroll hover:pause-animation-on-hover w-fit">
                {[...logos, ...logos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center h-[80px] w-fit">
                    <img className="object-contain max-w-[207px]" src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </Box>
  );
};
