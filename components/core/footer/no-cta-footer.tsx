import React, { useState } from 'react';
import { classNames } from 'lib/utils';
import { ICMSMetaDescription } from 'lib/hooks/useMetaDescriptions';
import { motion } from 'framer-motion';
import { FooterBoardingPass } from './footer-boarding-pass';
import { FooterAccordion } from './footer-accordion';
import { SimpleCta } from './simple-cta';

type NewFooterProps = {
  hideCTA?: boolean;
  className?: string;
  metaDescription?: ICMSMetaDescription;
};

export const NoCtaFooter = ({ hideCTA = false, className = '', metaDescription }: NewFooterProps) => {
  const [openEasterEgg, setOpenEasterEgg] = useState(false);

  return (
    <div className={classNames('flex flex-col items-center mt-[32px] lg:mt-2 font-hero', className)}>
      <div className="flex flex-col items-center">
        <FooterBoardingPass hideCTA={hideCTA} />

        {metaDescription?.hasAccordion && (
          <div className="px-4 lg:px-8 w-full">
            <FooterAccordion title={metaDescription.accordionTitle} body={metaDescription.accordionBody} />
          </div>
        )}
      </div>

      <div className="w-full bg-white from-[#8AE7FD]">
        <div className="m-auto lg:px-8 flex flex-col relative h-[848px] lg:h-[691px] w-[345px] lg:w-full items-center font-normal text-primary text-[24px] lg:text-[32px] leading-[42px]">
          <div className="mt-10 w-full flex justify-center">
            <SimpleCta />
          </div>
          <div
            id="backed-by"
            className={`hidden ${openEasterEgg ? '' : 'lg:block'} absolute bottom-[90px] left-[280px] z-20`}
          >
            <img src="/footer/backed-by.svg" alt="Backed-by" />
          </div>
          <div className="lg:absolute flex flex-col lg:flex-row justify-between bottom-[64px] w-full lg:px-[80px] items-center">
            <div className="hidden lg:flex lg:visible lg:relative bottom-[312.58px] lg:bottom-auto gap-x-[40px] left-[12px] lg:left-auto lg:gap-x-[62px] items-center">
              <div className="transition duration-300 ease-in-out transform">
                <img src="/footer/june.svg" alt="June" />
              </div>
              <div
                className={`relative overflow-visible transition duration-300 ease-in-out transform ${
                  openEasterEgg ? '' : ''
                }`}
                onClick={() => setOpenEasterEgg(!openEasterEgg)}
              >
                {/* (Commented-out motion.img for Michael) */}
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: openEasterEgg ? 1 : 0,
                  }}
                  transition={{ duration: 1 }}
                  style={{ rotate: '4deg' }}
                  className={`absolute ${
                    openEasterEgg ? '' : 'pointer-events-none'
                  } flex justify-center items-center z-20 bottom-[34.06px] -left-[74.55px] w-[358px] h-[483px] object-cover`}
                >
                  <img src="/footer/easter-egg.svg" alt="Y" className="absolute pointer-events-none" />
                  <div className="mb-[82.22px] relative flex justify-center items-center h-16 w-[64px] shadow-[inset_0_-2px_4px_0_rgba(0,0,0,0.20)] overflow-hidden rounded-full text-primary bg-white transition">
                    <img className="w-12 h-12" src="/play-icon.svg" alt="Arrow-secondary" />
                  </div>
                </motion.div>
                <img className="relative bottom-0 left-0 z-30" src="/footer/y.svg" alt="Y" />
              </div>
            </div>

            {/* Social and security icons (links removed) */}
            <div className="flex absolute lg:relative bottom-[140.98px] lg:bottom-auto gap-x-[16px] lg:gap-x-[38px] items-center">
              <span className="transition duration-300 ease-in-out transform">
                <img src="/footer/aicpa.svg" alt="Aicpa" />
              </span>
              <span className="transition duration-300 ease-in-out transform">
                <img src="/footer/lock.svg" alt="Lock" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
