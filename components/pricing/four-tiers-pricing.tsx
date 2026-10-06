import { useState } from 'react';
import { CheckIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { Tooltip } from '@chakra-ui/react';

const frequencies = [{ value: 'monthly', label: 'Monthly', priceSuffix: '/month' }];
const tiers = [
  {
    name: 'Growth',
    id: 'tier-growth',
    href: 'https://analytics.june.so/start',
    price: { monthly: '$149' },
    description: 'Best for B2B SaaS startups looking for PMF',
    extra: 'Everything in Free plus',
    features: [
      'Company-level analytics',
      'Custom insights with June AI',
      'Multiple home views',
      '2,000 active users per month included',
      '$15 every additional 1,000',
      'AI powered email and domain enrichment',
      'No credit card required',
    ],
    mostPopular: false,
    cta: 'Start 14-day free trial',
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: 'https://analytics.june.so/start',
    price: { monthly: '$349' },
    description: 'Get more from your data to scale your business',
    extra: 'Everything in Growth plus',
    features: [
      'Automatic CRM sync',
      'Computed traits',
      '5,000 active users per month included',
      '$15 every additional 1,000',
      'Priority support',
      'No credit card required',
    ],
    mostPopular: true,
    cta: 'Start 14-day free trial',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: 'https://calendly.com/alberto-junedotso',
    price: { monthly: 'Custom' },
    description: "June's personalised queries and data management",
    features: ['Dedicated data engineer', 'Salesforce integration', 'Custom queries', 'Data-warehouse integration'],
    mostPopular: false,
    cta: 'Talk to sales',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function FourTierPricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mx-auto mt-6 max-w-2xl text-center text-2xl font-hero font-bold leading-8 text-gray-900">
          More into the B2B angle? Try our paid plans for detailed customer profiles, CRM sync and more to retain and
          upsell your customers on a 1:1 basis
        </h2>
        <div className="mt-16 flex justify-center"></div>
        <div className="font-hero isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8',
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-gray-900 font-bold' : 'text-gray-900 font-semibold',
                  'text-lg leading-8',
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                {tier.name !== 'Enterprise' && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                )}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-primary ring-1 ring-inset ring-primary hover:bg-gray-50',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-105 duration-300 ease-in-out',
                )}
              >
                {tier.cta}
              </a>
              <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.extra}</p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {tier.name === 'Growth' && feature === '2,000 active users per month included' ? (
                      <Tooltip
                        label="Monthly active users are identified users that triggered any action in the last 30 days"
                        placement="top"
                      >
                        <span className="flex items-center">
                          {feature}
                          <InformationCircleIcon className="h-4 w-4 ml-2 text-gray-400" aria-hidden="true" />{' '}
                        </span>
                      </Tooltip>
                    ) : tier.name === 'Pro' && feature === '5,000 active users per month included' ? (
                      <Tooltip
                        label="Monthly active users are identified users that triggered any action in the last 30 day"
                        placement="top"
                      >
                        <span className="flex items-center">
                          {feature}
                          <InformationCircleIcon className="h-4 w-4 ml-2 text-gray-400" aria-hidden="true" />
                        </span>
                      </Tooltip>
                    ) : tier.name === 'Free' && feature === '1,000 active users per month included' ? (
                      <Tooltip
                        label="Monthly active users (MAU) are people who perform events in your app within the last 30 days. If your events exceed 1 million in a single month, upgrading to the Growth plan is required, even if your MAU count is below 1,000"
                        placement="top"
                      >
                        <span className="flex items-center">
                          {feature}
                          <InformationCircleIcon className="h-4 w-4 ml-2 text-gray-400" aria-hidden="true" />{' '}
                        </span>
                      </Tooltip>
                    ) : tier.name === 'Growth' && feature === '$15 every additional 1,000' ? (
                      <Tooltip
                        label="The Growth plan includes up to 1,000 track events per MAU. Exceeding this limit, we will calculate your MAU based on the monthly tracked events (total number of events / 1,000)"
                        placement="top"
                      >
                        <span className="flex items-center">
                          {feature}
                          <InformationCircleIcon className="h-4 w-4 ml-2 text-gray-400" aria-hidden="true" />{' '}
                        </span>
                      </Tooltip>
                    ) : tier.name === 'Pro' && feature === '$15 every additional 1,000' ? (
                      <Tooltip
                        label="The Pro plan includes up to 1,000 track events per MAU. Exceeding this limit, we will calculate your MAU based on the monthly tracked events (total number of events / 1,000)"
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
          ))}
        </div>
      </div>
    </div>
  );
}
