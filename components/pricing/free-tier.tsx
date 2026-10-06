import { CheckIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { Tooltip } from '@chakra-ui/react';

const includedFeatures = [
  'Unlimited seats',
  'All templates',
  'Unlimited saved reports and audiences',
  '30,000 MAU included',
  'Slack integration',
  'Online support',
];

export function FreeTier() {
  return (
    <div className="bg-white pt-20 pb-12 sm:pt-32 sm:pb-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-2 text-5xl font-hero font-black tracking-tight text-gray-900 sm:text-6xl sm:leading-[75px]">
            Product analytics, for free
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-2xl font-hero font-bold leading-8 text-gray-900">
          Transparent pricing that scales with premium features and CRM integrations
        </p>
        <div className="flex p-1 items-center mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-hero font-bold tracking-tight text-gray-900">Free plan</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              All of our user-level features are available to you on this plan, no restrictions
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-hero font-semibold leading-6 text-gray-900">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-6 text-gray-600">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-gray-900" aria-hidden="true" />
                  {feature === "30'000 MAU included" ? (
                    <Tooltip
                      label="Monthly active users (MAU) are people who perform events in your app within the last 30 days"
                      placement="top"
                    >
                      <span className="flex items-center">
                        {feature}
                        <InformationCircleIcon className="h-4 w-4 ml-2 text-gray-400" aria-hidden="true" />{' '}
                      </span>
                    </Tooltip>
                  ) : (
                    feature
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-[#F9E2FB] py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-hero font-semibold text-[#560059]">Up to 30,000 MAU</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-hero font-bold tracking-tight text-[#560059]">Free</span>
                </p>
                <a
                  href="https://analytics.june.so/start"
                  className="mt-10 block w-full rounded-[10px] bg-[#560059] px-3 py-2 text-center text-sm font-hero font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 duration-300 ease-in-out"
                >
                  Get started
                </a>
                <p className="mt-6 text-xs font-hero leading-5 text-gray-600"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
