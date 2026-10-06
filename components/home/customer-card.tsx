import React from 'react';
import clsx from 'clsx';

interface Company {
  name: string;
  feedBack: string;
  customer: string;
  position: string;
  avatarSrc: string;
  logoSrc: string;
  storyUrl?: string;
}

interface CustomerCardProps {
  company: Company;
  onClick: () => void;
  isActive: boolean;
}

export const CustomerCard = ({ company, onClick, isActive }: CustomerCardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex-shrink-0 w-[322px] md:w-[720px] h-[669px] md:h-[280px] relative bg-white rounded-2xl shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)] overflow-hidden flex cursor-pointer transition-transform duration-300 ease-in-out',
        // isActive ? "scale-105 z-10" : "scale-100" // Optional: visual cue for active card
      )}
    >
      <div className="hidden md:flex">
        <div className="shadow-[0px_2px_1px_0px_rgba(13,19,27,0.05)] p-3">
          <img
            className="w-[208px] h-[256px] rounded-2xl"
            style={{
              maxWidth: 'unset'
            }}
            src={company.avatarSrc}
            alt={`${company.customer} avatar`}
            width={208}
            height={256}
          />
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <img className="h-8" src={company.logoSrc} alt={`${company.name} logo`} />
            <div className="justify-start text-[#0d131b] text-[24px] font-black leading-8 mt-4">"</div>
            <div className="justify-start text-[#0d131b] text-lg font-normal leading-[26px] max-w-[480px]">
              {company.feedBack}
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="justify-start text-[#0d131b] text-lg font-black leading-[24px]">
              <div>{company.customer},</div>
              <div>{company.position}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col justify-start p-4 gap-6 text-[#0D131B] font-hero">
        <div className="shadow-[0px_2px_1px_0px_rgba(13,19,27,0.05)] rounded-[14px] overflow-hidden">
          <img
            className="h-[153px] w-[290px] object-cover"
            src={company.avatarSrc}
            alt={`${company.customer} avatar`}
          />
        </div>
        <div className="flex justify-start">
          <img className="h-8" src={company.logoSrc} alt={`${company.name} logo`} />
        </div>
        <div>
          <div className="justify-start text-[32px] font-black leading-10">"</div>
          <div className="max-h-[204px] text-2xl leading-[34px]">{company.feedBack}</div>
        </div>
        <div className="justify-start text-2xl font-black leading-[32px] mt-auto">
          {company.customer}, {company.position}
        </div>
      </div>
    </div>
  );
};

export type { Company }; 