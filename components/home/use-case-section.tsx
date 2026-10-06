import React from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { IUseCaseCard, UseCaseCard } from 'components/home/use-case-card';

const SyncNotificationIcon = ({ color: fill }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 14.25L6.75 17.25C6.75 18.0456 7.06607 18.8087 7.62868 19.3713C8.19129 19.9339 8.95435 20.25 9.75 20.25L17.25 20.25C18.0456 20.25 18.8087 19.9339 19.3713 19.3713C19.9339 18.8087 20.25 18.0456 20.25 17.25L20.25 9.75C20.25 8.95435 19.9339 8.19129 19.3713 7.62868C18.8087 7.06607 18.0456 6.75 17.25 6.75L9.75 6.75C8.95435 6.75 8.19129 7.06607 7.62868 7.62868C7.06607 8.19129 6.75 8.95435 6.75 9.75L6.75 12.75L1.5 12.75C1.30109 12.75 1.11032 12.829 0.96967 12.9697C0.829017 13.1103 0.75 13.3011 0.75 13.5C0.75 13.6989 0.829017 13.8897 0.96967 14.0303C1.11032 14.171 1.30109 14.25 1.5 14.25L6.75 14.25ZM6.75 14.25L6.75 12.75L12.44 12.75L10.72 11.03C10.6463 10.9613 10.5872 10.8785 10.5462 10.7865C10.5052 10.6945 10.4832 10.5952 10.4814 10.4945C10.4796 10.3938 10.4982 10.2938 10.5359 10.2004C10.5736 10.107 10.6297 10.0222 10.701 9.95096C10.7722 9.87974 10.857 9.8236 10.9504 9.78588C11.0438 9.74816 11.1438 9.72963 11.2445 9.73141C11.3452 9.73318 11.4445 9.75523 11.5365 9.79622C11.6285 9.83721 11.7113 9.89631 11.78 9.97L14.78 12.97C14.9204 13.1106 14.9993 13.3012 14.9993 13.5C14.9993 13.6987 14.9204 13.8894 14.78 14.03L11.78 17.03C11.7113 17.1037 11.6285 17.1628 11.5365 17.2038C11.4445 17.2448 11.3452 17.2668 11.2445 17.2686C11.1438 17.2704 11.0438 17.2518 10.9504 17.2141C10.857 17.1764 10.7722 17.1203 10.701 17.049C10.6297 16.9778 10.5736 16.893 10.5359 16.7996C10.4982 16.7062 10.4796 16.6062 10.4814 16.5055C10.4832 16.4048 10.5052 16.3055 10.5462 16.2135C10.5872 16.1215 10.6463 16.0387 10.72 15.97L12.44 14.25L6.75 14.25Z"
      fill={fill}
    />
    <path
      d="M21.7504 16.849C22.2066 16.5857 22.5855 16.2069 22.8488 15.7506C23.1121 15.2943 23.2506 14.7768 23.2504 14.25L23.2504 6.75C23.2504 5.95435 22.9343 5.19129 22.3717 4.62868C21.8091 4.06607 21.046 3.75 20.2504 3.75L12.7504 3.75C11.6404 3.75 10.6704 4.353 10.1514 5.25L17.2504 5.25C18.4438 5.25 19.5884 5.7241 20.4323 6.56802C21.2763 7.41193 21.7504 8.55652 21.7504 9.75L21.7504 16.849Z"
      fill={fill}
    />
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.24973 9C5.24973 7.20979 5.96089 5.4929 7.22676 4.22703C8.49263 2.96116 10.2095 2.25 11.9997 2.25C13.7899 2.25 15.5068 2.96116 16.7727 4.22703C18.0386 5.4929 18.7497 7.20979 18.7497 9V9.75C18.7497 11.873 19.5497 13.807 20.8677 15.27C20.9498 15.361 21.0084 15.4707 21.0383 15.5896C21.0681 15.7084 21.0685 15.8328 21.0391 15.9518C21.0098 16.0708 20.9518 16.1808 20.8702 16.2722C20.7885 16.3636 20.6857 16.4335 20.5707 16.476C19.0267 17.046 17.4107 17.466 15.7397 17.719C15.7774 18.2331 15.7086 18.7495 15.5377 19.2359C15.3668 19.7222 15.0974 20.1681 14.7464 20.5457C14.3955 20.9233 13.9704 21.2245 13.4978 21.4304C13.0252 21.6364 12.5152 21.7427 11.9997 21.7427C11.4842 21.7427 10.9742 21.6364 10.5016 21.4304C10.029 21.2245 9.60399 20.9233 9.25302 20.5457C8.90205 20.1681 8.6327 19.7222 8.4618 19.2359C8.29089 18.7495 8.22211 18.2331 8.25973 17.719C6.61138 17.4692 4.99272 17.0524 3.42873 16.475C3.31386 16.4326 3.21113 16.3627 3.12949 16.2715C3.04786 16.1802 2.98981 16.0703 2.96041 15.9515C2.93101 15.8326 2.93117 15.7084 2.96086 15.5896C2.99055 15.4708 3.04887 15.3611 3.13073 15.27C4.49754 13.7567 5.25281 11.7892 5.24973 9.75V9ZM9.75173 17.9C9.73894 18.2032 9.78761 18.5058 9.89481 18.7897C10.002 19.0736 10.1655 19.3329 10.3755 19.5519C10.5856 19.771 10.8377 19.9453 11.1168 20.0644C11.3959 20.1835 11.6963 20.2448 11.9997 20.2448C12.3032 20.2448 12.6035 20.1835 12.8826 20.0644C13.1618 19.9453 13.4139 19.771 13.6239 19.5519C13.8339 19.3329 13.9974 19.0736 14.1046 18.7897C14.2118 18.5058 14.2605 18.2032 14.2477 17.9C12.7521 18.0347 11.2474 18.0347 9.75173 17.9Z"
      fill="#005900"
    />
  </svg>
);

const HeartIcon = ({ color: fill }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.645 20.9099L11.638 20.9069L11.616 20.8949C11.4873 20.8241 11.3596 20.7515 11.233 20.6769C9.71081 19.7724 8.28827 18.7099 6.989 17.5069C4.688 15.3599 2.25 12.1739 2.25 8.24995C2.25 5.32195 4.714 2.99995 7.688 2.99995C8.51475 2.9959 9.33178 3.17829 10.0783 3.53355C10.8249 3.88882 11.4817 4.40782 12 5.05195C12.5184 4.40768 13.1754 3.88861 13.9221 3.53334C14.6689 3.17807 15.4861 2.99575 16.313 2.99995C19.286 2.99995 21.75 5.32195 21.75 8.24995C21.75 12.1749 19.312 15.3609 17.011 17.5059C15.7117 18.7089 14.2892 19.7715 12.767 20.6759C12.6404 20.7508 12.5127 20.8238 12.384 20.8949L12.362 20.9069L12.355 20.9109L12.352 20.9119C12.2436 20.9694 12.1227 20.9994 12 20.9994C11.8773 20.9994 11.7564 20.9694 11.648 20.9119L11.645 20.9099Z"
      fill={fill || '#003D5A'}
    />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 6.375C4.5 5.28098 4.9346 4.23177 5.70818 3.45818C6.48177 2.6846 7.53098 2.25 8.625 2.25C9.71902 2.25 10.7682 2.6846 11.5418 3.45818C12.3154 4.23177 12.75 5.28098 12.75 6.375C12.75 7.46902 12.3154 8.51823 11.5418 9.29182C10.7682 10.0654 9.71902 10.5 8.625 10.5C7.53098 10.5 6.48177 10.0654 5.70818 9.29182C4.9346 8.51823 4.5 7.46902 4.5 6.375ZM14.25 8.625C14.25 8.18179 14.3373 7.74292 14.5069 7.33344C14.6765 6.92397 14.9251 6.55191 15.2385 6.23851C15.5519 5.92512 15.924 5.67652 16.3334 5.50691C16.7429 5.3373 17.1818 5.25 17.625 5.25C18.0682 5.25 18.5071 5.3373 18.9166 5.50691C19.326 5.67652 19.6981 5.92512 20.0115 6.23851C20.3249 6.55191 20.5735 6.92397 20.7431 7.33344C20.9127 7.74292 21 8.18179 21 8.625C21 9.52011 20.6444 10.3785 20.0115 11.0115C19.3786 11.6444 18.5201 12 17.625 12C16.7299 12 15.8715 11.6444 15.2385 11.0115C14.6056 10.3785 14.25 9.52011 14.25 8.625ZM1.5 19.125C1.5 17.2353 2.25067 15.4231 3.58686 14.0869C4.92306 12.7507 6.73533 12 8.625 12C10.5147 12 12.3269 12.7507 13.6631 14.0869C14.9993 15.4231 15.75 17.2353 15.75 19.125V19.128L15.749 19.247C15.7469 19.3742 15.7125 19.4987 15.6489 19.6089C15.5854 19.7191 15.495 19.8114 15.386 19.877C13.3452 21.106 11.0073 21.7536 8.625 21.75C6.153 21.75 3.839 21.066 1.865 19.877C1.75585 19.8115 1.66517 19.7193 1.60149 19.6091C1.53781 19.4989 1.50323 19.3743 1.501 19.247L1.5 19.125ZM17.25 19.128L17.249 19.272C17.2434 19.6053 17.1638 19.9332 17.016 20.232C18.7617 20.3397 20.5054 19.9916 22.076 19.222C22.1975 19.1626 22.3006 19.0715 22.3745 18.9583C22.4485 18.8451 22.4904 18.7141 22.496 18.579C22.5313 17.7402 22.3494 16.9066 21.9679 16.1588C21.5864 15.4109 21.0183 14.7743 20.3185 14.3105C19.6188 13.8467 18.8111 13.5715 17.9738 13.5115C17.1364 13.4515 16.2977 13.6087 15.539 13.968C16.6522 15.4566 17.2522 17.2662 17.249 19.125L17.25 19.128Z"
      fill="#003D5A"
    />
  </svg>
);


const cards: IUseCaseCard[] = [
  {
    step: 1,
    title: 'Walk in customer calls with more context',
    description: 'Know exactly how they’re using your product',
    imageUrl: '/home/use-case/context.png',
    imageUrlMobile: '/home/use-case/context-mobile.png',
    backgroundColor: '#C9F0FF',
    imageBg: '#C9F0FF',
    textColor: '#003D5A',
    attributes: [
      { icon: <HeartIcon color={'#003D5A'} />, name: 'See the features customers love' },
      { icon: <UsersIcon />, name: "Know who is and isn't adopting" },
    ],
  },
  {
    step: 2,
    title: 'Get proactive alerts',
    description: 'Catch churn before it happens. Get alerted when top accounts slip before it’s too late.',
    imageUrl: '/home/use-case/alerts.png',
    imageUrlMobile: '/home/use-case/alerts-mobile.png',
    backgroundColor: '#DAF9D4',
    imageBg: '#DAF9D4',
    textColor: '#005900',
    attributes: [
      { icon: <HeartIcon color={'#005900'} />, name: 'Organize accounts by health' },
      { icon: <BellIcon />, name: 'Get alerts when customers enter/exit audiences' },
    ],
  },
  {
    step: 3,
    title: 'Integrate your CRM',
    description: 'Enrich your CRM with usage metrics & build your health score',
    imageUrl: '/home/use-case/integrations.png',
    imageUrlMobile: '/home/use-case/integrations-mobile.png',
    backgroundColor: '#F9E2FB',
    imageBg: '#F9E2FB',
    imageBgClassname: 'w-[783px]',
    textColor: '#560059',
    attributes: [
      {
        icon: <SyncNotificationIcon color={'#560059'} />,
        name: 'Sync data to and from   •   HubSpot   •   Attio  •   Salesforce',
      },
    ],
  },
];


export const UseCaseSection = () => {
  const logos = [
    { src: '/logos-q3/twilio-segment.svg', alt: 'Twilio Logo' },
    { src: '/logos-q3/posthog.svg', alt: 'PostHog Logo' },
    { src: '/logos-q3/amplitude.svg', alt: 'Amplitude Logo' },
    { src: '/logos-q3/mixpanel.svg', alt: 'Mixpanel Logo' },
    { src: '/logos-q3/june.svg', alt: 'june Logo' },
  ];

  const [selectedUseCase, setSelectedUseCase] = React.useState(0);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = React.useState(false);

  const handleUseCaseSelect = (index: number) => {
    setSelectedUseCase(index);
    setIsMobileDropdownOpen(false); // Close dropdown on selection
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="px-[24px] justify-center items-center text-[#0d131b] font-hero h-fit mt-20 md:mt-[162px]">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="md:max-w-[361px] rounded-2xl">
          <div className="justify-start text-[#0d131b] text-[32px] font-black leading-10 px-0 md:px-6">
            3 things you will achieve in 7 days
          </div>

          <div className="justify-start gap-2 pt-6 hidden md:flex md:flex-col">
            {cards.map((card, index) => (
              <div
                key={card.step} // Use a unique key, step or index
                onClick={() => setSelectedUseCase(index)}
                className={clsx(
                  'pl-6 py-4 rounded-2xl cursor-pointer transition-all duration-150 ease-in-out',
                  'text-base leading-[19px]',
                  selectedUseCase === index
                    ? 'bg-white shadow-[0px_2px_1px_0px_rgba(13,19,27,0.05)] outline-[#F8F9FA]' // Selected style
                    : '', // Hover style for non-selected
                )}
              >
                <div
                  className={clsx(
                    'font-bold justify-start tracking-normal transition-all duration-150 ease-in-out',
                    selectedUseCase === index ? 'text-[#6868f7]' : 'text-[#0d131b]',
                  )}
                >
                  {card.title}
                </div>
                <div className={clsx('font-normal text-base text-[#0d131b] mt-[6px] justify-start')}>
                  {card.description}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Use Case Dropdown */}
          <div className="mt-6 md:hidden w-full relative">
            {/* Trigger */}
            <div
              className={clsx(
                'cursor-pointer transition-colors duration-200 ease-in-out w-full h-auto py-4 px-6 box-border flex justify-between items-start',
                'bg-white',
                isMobileDropdownOpen
                  ? 'rounded-t-2xl shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25)]'
                  : 'rounded-2xl shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)]',
              )}
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              <div className="flex-grow">
                <div
                  className={clsx(
                    'font-bold justify-start tracking-normal',
                    'text-[#6868f7]', // Keep selected title color consistent
                    'max-w-[282px] md:max-w-full leading-[22px]',
                  )}
                >
                  {cards[selectedUseCase].title}
                </div>
                <div className={clsx('font-normal text-[#0d131b] mt-[6px] justify-start text-base leading-[19px]')}>
                  {cards[selectedUseCase].description}
                </div>
              </div>
              <div className="flex-shrink-0 h-full flex flex-col justify-start">
                <motion.svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  variants={chevronVariants}
                  animate={isMobileDropdownOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.3 }}
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.7797 6.22007C11.9201 6.3607 11.999 6.55132 11.999 6.75007C11.999 6.94882 11.9201 7.13945 11.7797 7.28007L8.52968 10.5301C8.38906 10.6705 8.19843 10.7494 7.99968 10.7494C7.80093 10.7494 7.61031 10.6705 7.46968 10.5301L4.21968 7.28007C4.0872 7.1379 4.01508 6.94985 4.01851 6.75555C4.02194 6.56125 4.10065 6.37586 4.23806 6.23845C4.37547 6.10104 4.56086 6.02233 4.75516 6.0189C4.94946 6.01547 5.13751 6.08759 5.27968 6.22007L7.99968 8.94007L10.7197 6.22007C10.8603 6.07962 11.0509 6.00073 11.2497 6.00073C11.4484 6.00073 11.6391 6.07962 11.7797 6.22007Z" fill="#0D131B"/>
                </motion.svg>
              </div>
            </div>

            {/* Dropdown List */}
            <AnimatePresence>
              {isMobileDropdownOpen && (
                <motion.div
                  key="mobile-usecase-dropdown-list"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl z-10 overflow-hidden border-x border-b border-gray-200"
                  style={{ transformOrigin: 'top' }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={`mobile-usecase-${card.step}`}
                      onClick={() => handleUseCaseSelect(index)}
                      className={clsx(
                        'pl-6 py-4 cursor-pointer transition-colors duration-150 ease-in-out',
                        'text-base leading-[19px] hover:bg-gray-50',
                        selectedUseCase === index ? 'bg-gray-100' : '', // Optional: different highlight for selected in dropdown
                      )}
                    >
                      <div
                        className={clsx(
                          'font-bold justify-start tracking-normal max-w-[282px] leading-[22px]',
                          selectedUseCase === index ? 'text-[#6868f7]' : 'text-[#0d131b]',
                        )}
                      >
                        {card.title}
                      </div>
                      <div className={clsx('font-normal text-[#0d131b] mt-[6px] justify-start leading-[19px]')}>
                        {card.description}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <UseCaseCard
          step={cards[selectedUseCase].step}
          title={cards[selectedUseCase].title}
          description={cards[selectedUseCase].description}
          imageUrl={cards[selectedUseCase].imageUrl}
          backgroundColor={cards[selectedUseCase].backgroundColor}
          imageBg={cards[selectedUseCase].imageBg}
          imageBgClassname={cards[selectedUseCase].imageBgClassname}
          attributes={cards[selectedUseCase].attributes}
          textColor={cards[selectedUseCase].textColor}
          imageUrlMobile={cards[selectedUseCase].imageUrlMobile}
        />
      </div>

      <div className="md:flex w-full justify-center mt-16 hidden">
        <div className="flex h-[32px] gap-12 flex-row items-start">
          <div className="font-hero font-medium text-[#ADB5BD] tracking-normal text-2xl h-full grid place-content-center">
            Just connect
          </div>
          <div className="relative gap-12 flex">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img className="object-contain" src={logo.src} alt={logo.alt} />
              </div>
            ))}
            {/* <div className='absolute h-[32px] w-full right-0 top-0 bg-[linear-gradient(90deg,#FAFAFA_0%,rgba(250,250,250,0)_25%,rgba(250,250,250,0)_50%,rgba(250,250,250,0)_75%,#FAFAFA_100%)]'>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-6 relative overflow-hidden block md:hidden items-start">
        <div className="font-hero font-medium text-[#ADB5BD] tracking-normal text-2xl h-full">Just connect</div>
        <div className="max-w-[1192px] overflow-hidden w-full relative">
          <div
            className="absolute left-0 z-20 pointer-events-none w-full h-[72px] top-[0px]"
            style={{
              background:
                'linear-gradient(90deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 25%, rgba(250, 250, 250, 0) 75%, #FAFAFA 100%)',
            }}
          ></div>
          <div className="flex gap-7 animate-infinite-scroll hover:pause-animation-on-hover w-fit">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-[80px] w-fit">
                <img className="object-contain max-w-[150px] max-h-[60px]" src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
