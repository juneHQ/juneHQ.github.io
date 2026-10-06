import { CurrencyDollarIcon, FireIcon, HandRaisedIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Activate',
    description:
      "Make sure the most promising signups get the care that they deserve. Even if you're doing PLG some accounts need the extra push ",
    href: '#',
    icon: FireIcon,
  },
  {
    name: 'Upsell',
    description:
      'Allow your sales team to close more by bubbling up PQLs. Timing in sales is everything and product usage data will make you more efficient',
    href: '#',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Prevent churn',
    description:
      "In B2B most of the revenue comes from few accounts. Monitoring activity and reaching our before it's too late will reduce churn",
    href: '#',
    icon: HandRaisedIcon,
  },
];

export function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Enable your sales</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Product usage data in your CRM
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Until today feeding the CRM with the right data was a 2-week long project. Right now, the new generation of
            B2B-SaaS tools is here and you can setup everything in a few minutes. No reverse ETL, no data warehouse.
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
                  <p className="mt-6">
                    {/* <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
