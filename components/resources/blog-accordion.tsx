import React, { useState } from "react";

export const BlogAccordion = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-hero mt-12 rounded-[20px] overflow-hidden w-full max-w-[313px] lg:max-w-[948px] xl:max-w-[1128px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]">
      <div
        className="relative flex justify-between items-center bg-gradient-to-t from-transparent via-transparent to-cyan-500/50 w-full px-6 lg:px-8 py-8 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          src="/cloud.png"
          alt="Small floating cloud"
          className="absolute w-[932px] h-[460px] max-w-[932px] right-0 top-[-332px] top-0 "
        />
        <h2 className="relative text-xl font-black text-gray-900">{title}</h2>
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
      <div className={open ? 'block' : 'hidden'}>
        <div className="pb-6 lg:pb-8 px-6 lg:px-8" dangerouslySetInnerHTML={{ __html: body || '' }} />
      </div>
    </div>
  );
};
