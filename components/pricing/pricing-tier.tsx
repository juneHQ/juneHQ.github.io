import { useState, useEffect } from 'react';
import {
  BanknotesIcon,
  BellAlertIcon,
  BoltIcon,
  CheckIcon,
  IdentificationIcon,
  InboxArrowDownIcon,
  InformationCircleIcon,
  LifebuoyIcon,
  PresentationChartBarIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { Switch } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const tiers = [
  {
    name: 'All-in-one',
    id: 'tier-pro',
    priceMonthly: '$499',
    priceYearly: '$349',
    description: 'Everything you need as a growing B2B SaaS company',
    features: [
      {
        text: 'Company-level Analytics',
        image: '/pricing/company_analytics.png',
        bgColor: 'bg-[#C9F0FF]',
        textColor: 'text-[#003D5A]',
        icon: <UsersIcon className="h-5 w-5" />,
      },
      {
        text: 'Product Analytics',
        image: '/pricing/product_analytics.png',
        bgColor: 'bg-[#F9E2FB]',
        textColor: 'text-[#560059]',
        icon: <PresentationChartBarIcon className="h-5 w-5" />,
      },
      {
        text: 'Salesforce, HubSpot and Attio integrations',
        image: '/pricing/crm.png',
        bgColor: 'bg-[#DAF9D4]',
        textColor: 'text-[#005900]',
        icon: <BanknotesIcon className="h-5 w-5" />,
      },
      {
        text: 'Custom insights with SQL & AI',
        image: '/pricing/june_ai.png',
        bgColor: 'bg-[#FFF5C7]',
        textColor: 'text-[#a68716]',
        icon: <SparklesIcon className="h-5 w-5" />,
      },
      {
        text: 'Computed traits',
        image: '/pricing/computed_traits.png',
        bgColor: 'bg-[#DAF9D4]',
        textColor: 'text-[#005900]',
        icon: <BoltIcon className="h-5 w-5" />,
      },
      {
        text: '1:1 support and onboarding',
        image: '/pricing/support.png',
        bgColor: 'bg-[#FFD2E1]',
        textColor: 'text-[#800000]',
        icon: <LifebuoyIcon className="h-5 w-5" />,
      },
      {
        text: 'Company and audience alerts',
        image: '/pricing/alerts.png',
        bgColor: 'bg-[#C9F0FF]',
        textColor: 'text-[#003D5A]',
        icon: <BellAlertIcon className="h-5 w-5" />,
      },
      {
        text: 'Embed API',
        image: '/pricing/api.png',
        bgColor: 'bg-[#F9E2FB]',
        textColor: 'text-[#560059]',
        icon: <PuzzlePieceIcon className="h-5 w-5" />,
      },
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function PricingTier() {
  const [isYearly, setIsYearly] = useState(true);
  const [hoveredFeature, setHoveredFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hoveredFeature === null) {
        setHoveredFeature(0);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [hoveredFeature]);

  return (
    <div className="relative isolate bg-white px-3 pt-12 sm:pt-16 lg:px-4">
      <div className="mx-auto max-w-4xl text-center mt-16 lg:mt-20">
        <h1 className="mt-2 text-5xl font-hero font-black tracking-tight text-gray-900 sm:text-6xl sm:leading-[75px]">
          Let's retain your customers
        </h1>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-2xl font-hero font-bold leading-8 text-gray-900">
        We're a team of product people who will work with you to get the perfect setup for your company
      </p>
      <div className="flex justify-center my-8"></div>
      <div className="mx-auto max-w-4xl">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-[#DAF9D4] shadow-2xl'
                : 'bg-white shadow-md sm:mx-8 lg:mx-0 border border-[#DAF9D4]',
              'rounded-3xl p-8 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-[#005900]' : 'text-[#003D5A]',
                'text-2xl font-hero font-bold tracking-tight',
              )}
            >
              {tier.name}
            </h3>
            <p
              className={classNames(
                tier.featured ? 'text-[#005900]' : 'text-[#003D5A]',
                'mt-2 font-hero text-base leading-7',
              )}
            >
              {tier.description}
            </p>
            <div className="flex flex-row justify-between gap-4">
              <div>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? 'text-[#005900]' : 'text-[#003D5A]',
                    'mt-4 space-y-3 font-hero text-sm leading-6 sm:mt-10',
                  )}
                >
                  {tier.features.map((feature, index) => (
                    <li
                      key={feature.text}
                      className={`flex gap-x-3 font-semibold cursor-pointer p-2 rounded-lg transition-all duration-200 items-center ${
                        hoveredFeature === index ? `${feature.bgColor} ${feature.textColor}` : 'hover:bg-gray-100'
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <span className={`${feature.textColor} ${feature.bgColor} rounded-md p-1`}>{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:block md:block mt-8">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={hoveredFeature}
                    src={tiers[0].features[hoveredFeature ?? 0].image}
                    alt={tiers[0].features[hoveredFeature ?? 0].text}
                    className="h-[450px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
