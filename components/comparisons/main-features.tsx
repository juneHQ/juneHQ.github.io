import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Built for B2B SaaS',
    description:
      'June is focused on account-level insights. Get every single metric at an account-level too: from retention to activation. Deep dive into the accounts to understand how engaged they are. ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure',
    description:
      'We take your security seriously and take measures to ensure your data stays safe. This is why we are SOC2 type 2 and we are happy to sign a DPA with you follow GDPR guidelines',
    icon: LockClosedIcon,
  },
  {
    name: 'Assistence',
    description:
      "Data analytics is not always simple. And that's why we’re always available to hop on a call with you to answer a question or fix a problem.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

export function MainFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Finally a product analytics tool that you would actually use
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            June make simple things simple and complex ones possible
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
