import { HoverEffectProps } from 'components/home/components/hover-effect';
import { Box, TextProps, Container } from '@chakra-ui/react';
import { PageSectionProps } from 'types/page-section-props';
import { defaultPx } from '../core/utils/default-container-px';

interface SocialProps extends PageSectionProps {
  _hoverEffect?: Pick<HoverEffectProps, 'staticBorderColor' | 'staticBgColor'>;
  _hoverTitle?: TextProps;
  _hoverDescription?: TextProps;
}

export const SocialProof = (props: SocialProps) => {
  return (
    <Box bg="landing.almostBlack.500" {...props._wrapper} display={['block', 'block', 'block']}>
      <Container maxW="landingMax" px={defaultPx('170px')}>
        <div className="flex flex-col items-center">
          <div className="text-center text-primary font-hero font-black w-[345px] text-[24px] leading-[34px] lg:w-full lg:px-0 lg:text-[40px] lg:leading-[50px]">
            <h2>Trusted by the next-gen B2B SaaS</h2>
          </div>
          <div className="items-center hidden mt-12 lg:flex gap-x-16 justify-stretch">
            <img className="object-cover h-[32px]" src="/logos-q3/aleph.svg" alt="Aleph" />
            <img className="object-cover h-[28px]" src="/logos-q3/amie.svg" alt="Amie" />
            <img className="object-cover h-[35px]" src="/logos-q3/causal.svg" alt="Causal" />
            <img className="object-cover h-[48px]" src="/logos-q3/passionfroot.svg" alt="Passionfruit" />
            <img className="object-cover h-[32px]" src="/logos-q3/reveal.svg" alt="Reveal" />
            <img className="object-cover h-[32.75px]" src="/logos-q3/rootly.svg" alt="Rootly" />
          </div>

          <div className="relative w-[345px] flex flex-col items-start mx-auto mt-12 lg:hidden">
            <div className="flex items-center gap-x-[52.59px] ">
              <img src="/logos-q3/aleph.svg" alt="Aleph" />
              <img src="/logos-q3/causal.svg" alt="Causal" />
            </div>
            <div className="flex items-center relative left-[18.5px] gap-x-[41.21px] mt-[31.5px]">
              <img src="/logos-q3/amie.svg" alt="Amie" />
              <img src="/logos-q3/passionfroot.svg" alt="Passionfruit" />
            </div>
            <div className="flex items-center gap-x-[25.86px] mt-[25px]">
              <img className="-rotate-2" src="/logos-q3/reveal.svg" alt="Reveal" />
              <img src="/logos-q3/rootly.svg" alt="Rootly" />
            </div>
          </div>
          <div className="flex flex-col mt-20 lg:flex-row lg:gap-x-16 gap-y-8 lg:mt-20">
            <div className="flex flex-col items-center justify-center relative w-[209px] h-[63px] font-hero font-black text-primary leading-7 text-4">
              <img className="absolute" src="/laurel-wreath.svg" alt="Laurel Wreath" />
              <div>Product Hunt award</div>
              <div className="text-[24px] ">Winner</div>
            </div>
            <div className="flex flex-col items-center justify-center relative w-[209px] h-[63px] font-hero font-black text-primary leading-7 text-4">
              <img className="absolute" src="/laurel-wreath.svg" alt="Laurel Wreath" />
              <div>Fastest growing on</div>
              <div className="text-[24px] ">Segment</div>
            </div>
            <div className="flex flex-col items-center justify-center relative w-[209px] h-[63px] font-hero font-black text-primary leading-7 text-4">
              <img className="absolute" src="/laurel-wreath.svg" alt="Laurel Wreath" />
              <div>G2 High Performer</div>
              <div className="text-[24px] ">2024</div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
