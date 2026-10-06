import React, { useState } from 'react';

export const FooterAccordion = ({ title, body }: { title: string; body: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-hero -mt-8 pt-8 rounded-br-[20px] rounded-bl-[20px] w-full xl:max-w-[1192px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] bg-white">
      <div
        className="flex justify-between items-center w-full px-6 lg:px-8 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h1 className="text-sm leading-[17px] tracking-normal text-hero md:text-lg font-bold text-[#151531]">
          {title}
        </h1>
        <div className="hidden md:flex">
          <svg
            className={open ? 'rotate-180' : ''}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 15.75L12 8.25L19.5 15.75"
              stroke="#0D131B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="md:hidden">
          <svg
            className={open ? 'rotate-180' : ''}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 15.75L12 8.25L19.5 15.75"
              stroke="#0D131B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={open ? 'block' : 'hidden'}>
        <div
          className="pb-6 lg:pb-8 px-6 lg:px-8 text-lg footer-accordion-body"
          dangerouslySetInnerHTML={{ __html: body || '' }}
        />
      </div>
    </div>
  );
};
