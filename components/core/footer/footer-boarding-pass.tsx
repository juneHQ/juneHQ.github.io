import React, { useEffect, useState } from 'react';
import { classNames } from 'lib/utils';
import clsx from 'clsx';

type NewFooterProps = {
  hideCTA?: boolean;
};

type NearestAirport = {
  name: string;
  city: string;
  country: string;
};

type TicketProps = {
  nearestAirport: NearestAirport;
  currentTime: string;
  isBackTicket?: boolean;
};

const TicketMobile = ({ nearestAirport, currentTime, isBackTicket }: TicketProps) => (
  <div
    className={clsx(
      'flex shadow-[0_2px_10px_0_rgba(13,19,27,0.1),0_0_2px_0_rgba(13,19,27,0.2)] bg-white h-[200px] lg:w-[400px] xl:w-[497px] rounded-tl-[12px] overflow-hidden font-hero',
      // if back ticket is true, extend the width to the right
      isBackTicket ? '!w-[373px]' : '',
    )}
  >
    <div className="w-[50px] h-[200px] bg-[#FFA340] p-[10px] flex-shrink-0">
      <img src="/footer/ticket-barcode.svg" width={30} height={180} className="" alt="Barcode" />
    </div>
    <div className="relative flex flex-col font-hero font-black text-primary p-[16px] pb-[8.5px] w-[305px]">
      <div className="text-[26px] leading-[33px] flex w-full justify-between">
        <div className="flex gap-4">
          <div>{nearestAirport.name}</div>
          <div className="grid place-content-center">
            <img className="" height={26} width={28} src="/footer/plane.svg" alt="Plane" />
          </div>
          <div className="">AMPL</div>
        </div>

        <div className="relative items-center justify-center h-[31px]">
          <img className="relative" width={31} height={31} src="/footer/logo-background.svg" alt="Background" />
          <img
            className="absolute top-[6.5px] left-[7.2px]"
            width={17}
            height={18}
            src="/footer/june-logo-white.svg"
            alt="June"
          />
        </div>
      </div>
      <div className="mt-[20px] text-[8px] leading-[9px] text-gray-400 flex w-full">
        <div>FROM</div>
        <div className="absolute left-[119px]">TO</div>
      </div>
      <div className="mt-[8px] flex text-[12px] leading-[18px] font-bold h-[60px] w-full items-center border-t-[1px] border-gray-200">
        <div className="w-[162px] h-full flex items-center">{nearestAirport.city}</div>

        <div className="absolute flex items-center left-[101px] border-l-[1px] border-gray-200 h-[60px] pl-[16px]">
          Amplitude
        </div>
      </div>
      <div className="mt-[16px] text-[8px] leading-[9px] text-gray-400 flex w-full">
        <div>DEPARTURE</div>
        <div className="absolute left-[119px]">FLIGHT</div>
      </div>
      <div className="mt-[8px] flex text-[12px] leading-[18px] font-bold h-[60px] w-full items-center border-t-[1px] border-gray-200">
        <div className="w-[162px] h-full flex items-center">10:00 PM</div>
        <div className="absolute flex items-center left-[101px] border-l-[1px] border-gray-200 h-[60px] pl-[16px]">
          Aug 8th 2025
        </div>
      </div>
    </div>
  </div>
);

const TicketDesktop = ({ nearestAirport, currentTime, isBackTicket }: TicketProps) => (
  <div
    className={clsx(
      'flex shadow-[0_2px_10px_0_rgba(13,19,27,0.1),0_0_2px_0_rgba(13,19,27,0.2)] bg-white h-[306px] lg:w-[400px] xl:w-[497px] rounded-tl-[12px] overflow-hidden font-hero',
      // if back ticket is true, extend the width to the right
      isBackTicket ? '!w-[515px]' : '',
    )}
  >
    <div className="w-[77px] h-[306px] bg-[#FFA340] p-4 flex-shrink-0">
      <img src="/footer/ticket-barcode.svg" className="" alt="Barcode" />
    </div>
    <div className="relative flex flex-col w-full font-hero font-black text-primary p-[24px] pb-[13px]">
      <div className="text-[40px] leading-[50px] flex w-full justify-between">
        <div className="flex gap-6">
          <div>{nearestAirport.name}</div>
          <div className="grid place-content-center">
            <img className="" src="/footer/plane.svg" alt="Plane" />
          </div>
          <div className="">AMPL</div>
        </div>

        <div className="relative items-center justify-center hidden xl:flex">
          <img className="relative" src="/footer/logo-background.svg" alt="Background" />
          <img className="absolute" src="/footer/june-logo-white.svg" alt="June" />
        </div>
      </div>
      <div className="mt-[32px] text-[12px] leading-[14.32px] text-gray-400 flex w-full">
        <div>FROM</div>
        <div className="absolute left-[213px]">TO</div>
      </div>
      <div className="mt-[12px] flex text-[18px] leading-[28px] font-bold h-[60px] w-full items-center border-t-[1px] border-gray-200">
        <div className="w-[162px] h-full flex items-center">{nearestAirport.city}</div>

        <div className="absolute flex items-center left-[189px] border-l-[1px] border-gray-200 h-[60px] pl-[24px]">
          Amplitude
        </div>
      </div>
      <div className="mt-[16px] text-[12px] leading-[14.32px] text-gray-400 flex w-full">
        <div>DEPARTURE</div>
        <div className="absolute left-[213px]">FLIGHT DATE</div>
      </div>
      <div className="mt-[12px] flex text-[18px] leading-[28px] font-bold h-[60px] w-full items-center border-t-[1px] border-gray-200">
        <div className="w-[162px] h-full flex items-center">10:00 PM</div>
        <div className="absolute flex items-center left-[189px] border-l-[1px] border-gray-200 h-[60px] pl-[24px]">
          Aug 8th 2025
        </div>
      </div>
    </div>
  </div>
);

export const FooterBoardingPass = ({ hideCTA = false }: NewFooterProps) => {
  const [currentTime, setCurrentTime] = useState('');
  const [nearestAirport, setNearestAirport] = useState<{
    name: string;
    city: string;
    country: string;
  }>({
    name: 'JUN',
    city: 'June',
    country: 'JUN',
  });

  useEffect(() => {
    const getTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      setCurrentTime(formattedTime);
    };
    getTime();
  }, []);
 
  return (
    <div
      className={classNames(
        'relative w-full overflow-hidden h-[524px] md:h-[580px] lg:h-[346px] xl:w-[1192px] p-6 lg:p-16 text-white rounded-[20px] bg-[#6868F7] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]',
        hideCTA ? 'hidden' : undefined,
      )}
    >
      <div className="flex flex-col ">
        <div className="font-black text-[32px] leading-[36px] lg:text-[40px] lg:leading-[50px] font-hero">
          <h2>June is joining Amplitude</h2>
        </div>
        <div className="text-[18px] tracking-[-0.015em] font-hero font-medium md:font-bold leading-[28px] w-[290px] lg:w-[480px] md:mt-2 mt-3">
          <p>After 5 years of building June, we're joining Amplitude to continue our mission of helping companies build better products.</p>
        </div>
        <div className="absolute bottom-0 lg:hidden -right-[14px] -rotate-[4deg]">
          <TicketMobile nearestAirport={nearestAirport} currentTime={currentTime} isBackTicket />
        </div>
        <div className="absolute bottom-0 right-0 lg:hidden">
          <TicketMobile nearestAirport={nearestAirport} currentTime={currentTime} />
        </div>
        <div className="hidden absolute lg:block bottom-0 -right-[14px] -rotate-[4deg]">
          <TicketDesktop nearestAirport={nearestAirport} currentTime={currentTime} isBackTicket />
        </div>
        <div className="hidden absolute lg:block bottom-0 right-0">
          <TicketDesktop nearestAirport={nearestAirport} currentTime={currentTime} />
        </div>
      </div>
    </div>
  );
};
