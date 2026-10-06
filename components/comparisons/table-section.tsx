import { ClockIcon, HeartIcon } from "@heroicons/react/20/solid";
import { FeatureTable } from "./comparisonTable";

const features = [
  {
    name: 'Next gen.',
    description: "It's time to ditch your 15-year-old tool and embrace the next-gen of product analytics.",
    icon: ClockIcon,
  },
  {
    name: 'Support.',
    description:
      "Product analytics can be hard. For this reason, we're here to help you: cleaning up your data has never been easier.",
    icon: HeartIcon,
  },
];

export function FeatureComparison({ alternative }) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 font-hero">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Make the choice</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Buy what you actually need
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Stop paying for a tool that almost nobody exploits in your team. June might not have all the
                functionalities of {alternative.name}, but it helps your organization focus only on the relevant metrics
                in a simple way.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <FeatureTable name={alternative.name} features={alternative.comparisonFeatures} />
        </div>
      </div>
    </div>
  );
}
