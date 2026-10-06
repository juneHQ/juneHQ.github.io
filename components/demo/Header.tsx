import { SocialProof } from 'components/home/social-proof';
import { ArrowPathRoundedSquareIcon, BuildingOffice2Icon, DocumentChartBarIcon } from '@heroicons/react/20/solid';
import { Flex } from '@chakra-ui/react';
import { Form } from './Form';

const features = [
  {
    name: 'In-depth profiles for each of your customers',
    description:
      'Customisable dahsboards, that can be used to understand each of your customer for sales, customer success and user research.',
    color: '#003D5A',
    bgColor: '#C9F0FF',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'In sync with your tools',
    color: '#005900',
    bgColor: '#DAF9D4',
    description:
      'Build the full context about a customers by combining bug reports, notes, billing and feature engagment. All in the same place.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Provide high-level metrics for your product',
    color: '#560059',
    bgColor: '#F9E2FB',
    description:
      'Easy to understand high-level metrics for your product, that are easy to understand for everyone on your team.',
    icon: DocumentChartBarIcon,
  },
];

export const Header = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start max-w-[1192px]">
        <div className="overflow-hidden bg-white py-24 sm:pt-32 sm:pb-16 font-hero">
          <div className="md:px-6 lg:px-2">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="flex justify-end w-full">
                <div className="mx-auto max-w-xl lg:mx-0">
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                    Don't let a $50k churn catch you by surprise
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Connect with us and we'll help you better understand your customers
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="pl-4 flex gap-4">
                        <div className={`flex items-start justify-center`}>
                          <feature.icon
                            aria-hidden="true"
                            className={`rounded-full p-3 bg-[${feature.bgColor}] h-12 w-12 text-[${feature.color}]`}
                          />
                        </div>
                        <div className="flex flex-col">
                          <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="block mt-32 lg:my-0 lg:hidden">
            <SocialProof _wrapper={{ bg: 'white' }} />
          </div>
        </div>
        {/* Only show this on small screens */}

        <div className="sm:px-6 lg:px-0">
          <Flex
            minHeight="20vh"
            flexDirection="column"
            justifyContent="space-between"
            backgroundImage="radial-gradient(circle at center, #7b7bff1c 0, #ffffff 60%)"
          >
            <Form />
          </Flex>
        </div>
      </div>
    </div>
  );
};
