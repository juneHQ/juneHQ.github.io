import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';

const faqs = [
  {
    question: 'Is June right for me?',
    answer: 'If preventing even a single customer from churning saves you $50K, then it could be a great fit',
  },
  {
    question: 'Do I really need it?',
    answer:
      "If you have a large user base but make only a small amount per user, or if your product is more 'set-and-forget', then another solution will be much better",
  },
  {
    question: 'Will you help me to set it up?',
    answer:
      'We’ll do whatever it takes to help you fully understand your customers’ usage while minimizing the need for your engineering resources. Setup fees vary based on implementation complexity',
  },
  {
    question: 'Do you have a startup plan?',
    answer:
      'No. June is a great fit for companies with at least $1M of ARR. If you’re earlier in your startup journey, you might be better off with a cheaper solution',
  },
];

export function FaqPricing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={faq.question} className="pt-6" defaultOpen={index != 5}>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
