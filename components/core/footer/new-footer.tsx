import React from 'react';
import { classNames } from 'lib/utils';
import { ICMSMetaDescription } from 'lib/hooks/useMetaDescriptions';
import { FooterBoardingPass } from './footer-boarding-pass';
import { Tooltip } from '@chakra-ui/react';

type NewFooterProps = {
  hideCTA?: boolean;
  className?: string;
  metaDescription?: ICMSMetaDescription;
};

export const NewFooter = ({ hideCTA = false, className = '', metaDescription }: NewFooterProps) => {
  return (
    <div className={classNames('w-full flex justify-center mt-20 md:mt-40', className)}>
      <div className={'flex flex-col items-center font-hero max-w-screen md:max-w-[1192px]'}>
        <div className="flex flex-col items-center w-full px-6 xl:px-0">
          <FooterBoardingPass hideCTA={hideCTA} />
        </div>
        <div className="mt-12 md:mt-20 xl:gap-[127px] md:px-0 text-[#151531] text-lg font-normal font-hero grid grid-cols-2 xl:flex justify-start px-6 gap-12 ">
          <div>
            <div className="font-hero font-black text-sm tracking-wide text-[#151531] pb-[32px] whitespace-nowrap">
              PRODUCT
            </div>
            <div className="gap-4 flex flex-col">
              <a href="/pricing" rel="noopener noreferrer" target="_blank" id="" className="whitespace-nowrap">
                Pricing
              </a>
              <a
                href="https://help.june.so/en"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Help Center
              </a>
            </div>
          </div>

          <div>
            <div className="font-hero font-black text-sm tracking-wide text-[#151531] pb-[32px] whitespace-nowrap">
              INTEGRATIONS
            </div>
            <div className="gap-4 flex flex-col">
              <a
                href="/integration/attio"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Attio
              </a>
              <a
                href="/integration/hubspot"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                HubSpot
              </a>
              <a
                href="/integration/salesforce"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Salesforce
              </a>
            </div>
          </div>

          <div>
            <div className="font-hero font-black text-sm tracking-wide text-[#151531] pb-[32px] whitespace-nowrap">
              RESOURCES
            </div>
            <div className="gap-4 flex flex-col">
              <a href="/guides" rel="noopener noreferrer" target="_blank" id="" className="whitespace-nowrap">
                Guides
              </a>
              <a href="/blog" rel="noopener noreferrer" target="_blank" id="" className="whitespace-nowrap">
                Blog
              </a>
              <a
                href="https://www.june.so/benchmarks"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Benchmarks
              </a>
              <a
                href="https://changelog.june.so"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Changelog
              </a>
              <a href="/customer-stories" rel="noopener noreferrer" target="_blank" id="" className="whitespace-nowrap">
                Customers
              </a>
              <a href="/docs" rel="noopener noreferrer" target="_blank" id="" className="whitespace-nowrap">
                Developer docs
              </a>
            </div>
          </div>

          <div>
            <div className="font-hero font-black text-sm tracking-wide text-[#151531] pb-[32px] whitespace-nowrap">
              THE FUN STUFF
            </div>
            <div className="gap-4 flex flex-col">
              <a
                href="https://www.linkedin.com/company/junedotso/"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                LinkedIn
              </a>
              <a
                href="https://school.june.so"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                June school
              </a>
              <a
                href="https://twitter.com/JuneDotSo"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/@junedotso/videos"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                YouTube
              </a>
              <Tooltip label="Ferruccio our CTO helped make this app">
                <a
                  href="https://balloonguthealth.com"
                  className="whitespace-nowrap"
                >
                  The Balloon App
                </a>
              </Tooltip>
            </div>
          </div>

          <div>
            <div className="font-hero font-black text-sm tracking-wide text-[#151531] pb-[32px] whitespace-nowrap">
              THE FUN-ER STUFF
            </div>
            <div className="gap-4 flex flex-col">
              <a
                href="https://help.june.so/en/articles/6823521-privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Privacy
              </a>
              <a href="/security" rel="noopener noreferrer" target="_blank" id="" className="whitespace-nowrap">
                Security
              </a>
              <a
                href="https://help.june.so/en/articles/6823511-terms-of-service"
                rel="noopener noreferrer"
                target="_blank"
                id=""
                className="whitespace-nowrap"
              >
                Terms
              </a>
              <a href="https://www.g2.com/fr/products/june-analytics/reviews" rel="noopener noreferrer" id="" className="flex gap-2 whitespace-nowrap">
                <img src="/footer/g2-seek.svg" alt="g2-seek" />
                <img src="/footer/five-star.svg" alt="five-star" />
                4.9 / 5
              </a>
              <a href="/security" rel="noopener noreferrer" id="" className="flex gap-2 whitespace-nowrap">
                <img src="/footer/soc.svg" alt="soc2" />
                SOC 2 Type II
              </a>
              <a href="/security" rel="noopener noreferrer" className="flex gap-2 whitespace-nowrap" id="">
                <img src="/footer/gdpr.svg" alt="gdpr" />
                GDPR Compliant
              </a>
            </div>
          </div>
        </div>
        <div className="my-20 relative px-6">
          <img src="/footer/june-footer.svg" alt="June" />
        </div>
      </div>
    </div>
  );
};
