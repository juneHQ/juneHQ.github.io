import clsx from 'clsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  className?: string;
}

const ChevronUp = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.22032 9.77993C4.07987 9.6393 4.00098 9.44868 4.00098 9.24993C4.00098 9.05118 4.07987 8.86055 4.22032 8.71993L7.47032 5.46993C7.61094 5.32948 7.80157 5.25059 8.00032 5.25059C8.19907 5.25059 8.38969 5.32948 8.53032 5.46993L11.7803 8.71993C11.9128 8.8621 11.9849 9.05015 11.9815 9.24445C11.9781 9.43875 11.8994 9.62414 11.7619 9.76155C11.6245 9.89896 11.4391 9.97767 11.2448 9.9811C11.0505 9.98453 10.8625 9.91241 10.7203 9.77993L8.00032 7.05993L5.28032 9.77993C5.13969 9.92038 4.94907 9.99927 4.75032 9.99927C4.55157 9.99927 4.36094 9.92038 4.22032 9.77993Z"
      fill="#0D131B"
    />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7797 6.22007C11.9201 6.3607 11.999 6.55132 11.999 6.75007C11.999 6.94882 11.9201 7.13945 11.7797 7.28007L8.52968 10.5301C8.38906 10.6705 8.19843 10.7494 7.99968 10.7494C7.80093 10.7494 7.61031 10.6705 7.46968 10.5301L4.21968 7.28007C4.0872 7.1379 4.01508 6.94985 4.01851 6.75555C4.02194 6.56125 4.10065 6.37586 4.23806 6.23845C4.37547 6.10104 4.56086 6.02233 4.75516 6.0189C4.94946 6.01547 5.13751 6.08759 5.27968 6.22007L7.99968 8.94007L10.7197 6.22007C10.8603 6.07962 11.0509 6.00073 11.2497 6.00073C11.4484 6.00073 11.6391 6.07962 11.7797 6.22007Z"
      fill="#0D131B"
    />
  </svg>
);

export function FaqSection({ className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items: FAQItem[] = [
    {
      question: 'How long does June take to set up?',
      answer:
        "2 minutes if you're using Segment, Rudderstack or Posthog. If you're on Mixpanel or Amplitude you can import your data to give it a shot. If you're starting from scratch take into account 1/2h of engineering.",
    },
    {
      question: "Can I get a human to help me if I'm stuck?",
      answer:
        "Absolutely, let's spin up a shared Slack channel and figure things out together. Product analytics can feel overwhelming, but we've got your back.",
    },
    {
      question: "How's it different from Mixpanel, Amplitude or Posthog?",
      answer:
        'June focuses on company-level analytics rather than just user level ones. Main users are from Customer Success and Sales teams.',
    },
    {
      question: 'How does it work with the CRM?',
      answer:
        'June makes your CRM a proper Customer Success Platform. It makes it easy to build health scores and trigger automations based on product usage data.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const answerVariants = {
    open: { opacity: 1, height: 'auto', marginTop: '8px', transition: { duration: 0.3, ease: 'easeInOut' } },
    collapsed: { opacity: 0, height: 0, marginTop: '0px', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div className="flex flex-col justify-center w-full mt-20 md:mt-40 px-6 xl:px-0">
      <h2 className="font-hero font-black tracking-normal text-[32px] md:text-[64px] flex justify-center leading-[40px] md:leading-[76px] text-[#0D131B]">
        FAQ
      </h2>
      <div className="flex justify-center mt-10">
        <div
          className={clsx(
            'w-full max-w-[1032px] bg-white rounded-3xl shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)]',
            className,
          )}
        >
          {items.map((item, index) => (
            <div key={index} className={clsx('px-6 pb-6')}>
              <button
                onClick={() => toggleItem(index)}
                className={clsx(
                  'flex justify-between items-center w-full text-left pt-6',
                  index !== 0 && 'border-t border-[#E9ECEF]',
                )}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 className="font-semibold text-base md:text-lg text-[#0D131B]">{item.question}</h4>
                <motion.span
                  className="ml-4 flex-shrink-0 text-[#0D131B]"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={answerVariants}
                    className="text-[#495057] overflow-hidden"
                  >
                    <p className="">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
