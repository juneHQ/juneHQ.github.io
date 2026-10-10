import React, { useState } from 'react';

export function CouponHero({ sponsor }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(sponsor.code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto font-hero max-w-7xl py-12 sm:px-6 sm:py-1 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="w-full max-w-md text-center lg:text-left lg:flex-auto lg:py-32 mt-12 lg:mt-0 mb-8 lg:mb-0">
          <h1 className="font-black text-primary w-full lg:max-w-full text-[54px] leading-[64px] lg:text-[72px] lg:leading-[80px]">
            {sponsor.name}'s followers <br className="hidden lg:block" />
            get 25% off
          </h1>
          <p className="mt-4 sm:mt-6 font-semibold sm:text-lg lg:text-lg font-hero leading-8 text-black-500">
            June is the free and simple way to launch your product, understand your users and reduce churn
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-y-4 gap-x-6">
            <p className="text-sm font-medium text-gray-500">25% off your first year</p>
          </div>
        </div>
        <div className="w-full lg:ml-16 lg:flex-auto lg:py-32 lg:max-w-lg">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center lg:text-left relative">
            <div className="absolute right-[-10px] top-[-60px] lg:right-[-80px] lg:top-[-80px]">
              <img
                className="h-38 w-38 rounded-full border-4 border-white shadow-lg"
                src={sponsor.profileImage}
                alt={sponsor.name}
              />
            </div>
            <h3 className="font-black text-primary w-full mt-20 lg:mt-0">{sponsor.name}</h3>
            <p className="text-sm text-gray-600">{sponsor.title}</p>
            <blockquote className="mt-4 text-lg font-medium text-gray-700">{`"${sponsor.quote}"`}</blockquote>
            <div className="mt-6">
              <button
                onClick={copyCodeToClipboard}
                className={`w-full py-2 px-4 border rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isCopied ? 'bg-purple-900 text-white' : 'bg-white text-gray-900 hover:bg-gray-300'
                }`}
              >
                {isCopied ? 'Code Copied!' : 'Copy discount code'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
