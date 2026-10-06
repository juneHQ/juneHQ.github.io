import React from 'react';
import { PageSectionProps } from 'types/page-section-props';
import { SectionHeader } from '../core/section-header';

interface LogoCloudProps extends PageSectionProps {
  title?: React.ReactNode;
  _hoverEffect?: Pick<HoverEffectProps, 'staticBorderColor' | 'staticBgColor'>;
  _hoverTitle?: TextProps;
  _hoverDescription?: TextProps;
}

export function LogoCloud(props: LogoCloudProps) {
  const logos = [
    { src: '/logos-q3/railway.svg', alt: 'Railway' },
    { src: '/logos-q3/causal.svg', alt: 'Causal' },
    { src: '/logos-q3/humaans.svg', alt: 'Humaans' },
    { src: '/logos-q3/snackmagic.svg', alt: 'Snackmagic' },
    { src: '/logos-q3/reveal.svg', alt: 'Reveal' },
    { src: '/logos-q3/stravito.svg', alt: 'Stravito' },
  ];

  return (
    <div className="bg-white py-1 sm:py-8 mt-8">
      <div className="mx-auto max-w-7xl px-12 lg:px-16 mt-1 md:mt-0">
        {/* Title */}
        {props.title && (
          <div className="flex justify-center text-center">
            <SectionHeader
              title={props.title}
              _title={{
                textAlign: 'center',
                fontSize: ['32px', '32px', '44px'],
              }}
            />
          </div>
        )}
        <div className="text-center hidden lg:block text-primary font-hero font-black w-[345px] text-[24px] leading-[34px] lg:w-full lg:px-0 lg:text-[40px] lg:leading-[50px]">
          <h3>Trusted by next-gen B2B SaaS</h3>
        </div>
        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-[150px] h-[80px]">
              <img className="object-contain w-full h-full" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
