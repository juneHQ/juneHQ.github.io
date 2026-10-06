import React from 'react';
import Link from 'next/link';

export const HowToGetStarted = () => {
  return (
    <div className="flex flex-col items-center mt-40 mb-40 font-hero text-primary">
      <div className="w-[345px] lg:w-[800px] flex-col items-center px-0 lg:px-6 lg:px-0 tracking-tight">
        <div>
          <div className="text-[56px] text-center w-full leading-[66px] lg:text-6xl lg:leading-[106px] font-black lg:whitespace-nowrap">
            <h2>How to get started</h2>
          </div>
          <div className="relative">
            <div className="font-black mt-8 lg:mt-16">
              <h3 className="!text-2xl !leading-6 lg:!text-3xl lg:!leading-6">Already have a tool in place?</h3>
            </div>
            <div className="mt-2 lg:mt-4">
              <p className="text-xl leading-8 lg:text-2xl lg:leading-8 font-medium">
                Set up June in 2 mins. Don't believe us? Here is a{' '}
                <a
                  href="https://www.youtube.com/watch?v=SKFrb4KPbEE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-purple-500 cursor-pointer hover:underline"
                >
                  2 minute video
                </a>{' '}
                showing it. Connect Segment, Amplitude, Mixpanel, or implement one of our SDKs.
              </p>
            </div>
            <img
              className="absolute top-[27.87px] -left-[193.94px] rotate-2 hidden lg:flex"
              src="/home/get-started/avatar1.svg"
              alt="Avatar"
            />
            <img
              className="absolute -top-[44.94px] -right-[135.06px] -rotate-2 hidden lg:flex"
              src="/home/get-started/avatar2.svg"
              alt="Avatar"
            />
            <img
              className="absolute top-[100.06px] -right-[193.04px] rotate-2 hidden lg:flex"
              src="/home/get-started/avatar3.svg"
              alt="Avatar"
            />
            <img
              className="absolute -bottom-[252.06px] -left-[194.13px] rotate-2 hidden lg:flex"
              src="/home/get-started/soc.svg"
              alt="SOC II"
            />
            <img
              className="absolute -bottom-[311.87px] -right-[193.06px] -rotate-2 hidden lg:flex"
              src="/home/get-started/gdpr.svg"
              alt="GDPR"
            />
          </div>
          <div className="relative lg:hidden">
            <div className="absolute -left-[84px] flex justify-between w-full gap-x-[76px] mt-8">
              <img className="rotate-2" src="/home/get-started/avatar1.svg" alt="Avatar" />
              <img className="-rotate-2" src="/home/get-started/avatar2.svg" alt="Avatar" />
              <img className="rotate-2" src="/home/get-started/avatar3.svg" alt="Avatar" />
            </div>
          </div>
          <div className="font-black mt-[181px] lg:mt-16">
            <h3 className="!text-2xl !leading-6 lg:!text-3xl lg:!leading-6">
              Is June your first product analytics tool?
            </h3>
          </div>
          <div className="mt-2 lg:mt-4">
            <p className="text-xl leading-8 lg:text-2xl lg:leading-8 font-medium">
              Set up June with our easy to add snippet. It takes{' '}
              <a
                href="https://www.youtube.com/watch?v=SKFrb4KPbEE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-purple-500 cursor-pointer hover:underline"
              >
                less than 30 minutes
              </a>{' '}
              and we give your engineer everything they need to get started quickly and{' '}
              <Link href="/security">
                <a
                  className="font-black text-purple-500 cursor-pointer hover:underline "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  securely
                </a>
              </Link>
              .
            </p>
          </div>
          <div className="mt-2 lg:mt-4">
            <p className="text-xl leading-8 lg:text-2xl lg:leading-8 font-medium">
              We can provide both a SOC 2 report and can help you make sure you are GDPR compliant.
            </p>
          </div>
        </div>
        <div className="w-[345px] lg:w-[664px] mx-auto h-[101px] lg:h-[140px] mt-[30px] lg:mt-[64px] bg-primary text-white font-black text-[18px] lg:text-[32px] flex items-center justify-center rounded-[20px] -rotate-2">
          <span className="text-[#DA6DE7]">analytics</span>.track(‘
          <span className="text-[#00B0FF]">Customer Inbox</span>’)
        </div>
        <img
          className="relative top-[38px] lg:top-[62px] mx-auto"
          src="/home/get-started/easy-to-add.svg"
          alt="Easy-to-add"
        />
      </div>
    </div>
  );
};
