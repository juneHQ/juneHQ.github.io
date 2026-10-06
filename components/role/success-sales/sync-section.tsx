import Image from "next/image";

export const SyncSection = () => {
  return (
    <div className="flex flex-col gap-y-[40px] lg:gap-y-[64px] px-[24px] items-center mt-16 lg:mt-40 text-primary font-hero">
      <div>
        <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black text-center">
          Everything you need to know in one place
        </h2>
        <p className="max-w-[500px] lg:max-w-full mt-[8px] lg:mt-[16px] text-primary text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-center">
          Your CRM already captures what customers say. June lets you see what they do.{' '}
          <br className="hidden lg:block" />
          So you can get a full view of your customers in one place.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center relative">
        <div className="drop-shadow-image leading-[0px]">
          <Image src="/sync/sync-from.png" alt="Sync" width={352} height={508} />
        </div>

        <svg
          className="hidden lg:block lg:mt-[-20px] mr-2"
          width="176"
          height="16"
          viewBox="0 0 176 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M175.707 8.70712C176.098 8.3166 176.098 7.68343 175.707 7.29291L169.343 0.928947C168.953 0.538423 168.319 0.538423 167.929 0.928947C167.538 1.31947 167.538 1.95264 167.929 2.34316L173.586 8.00002L167.929 13.6569C167.538 14.0474 167.538 14.6806 167.929 15.0711C168.319 15.4616 168.953 15.4616 169.343 15.0711L175.707 8.70712ZM-8.79463e-08 9L175 9.00002L175 7.00002L8.79463e-08 7L-8.79463e-08 9Z"
            fill="#77C09F"
          />
        </svg>

        <svg
          className="block lg:hidden mb-2"
          width="16"
          height="65"
          viewBox="0 0 16 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29289 64.7071C7.68341 65.0976 8.31658 65.0976 8.7071 64.7071L15.0711 58.3431C15.4616 57.9526 15.4616 57.3195 15.0711 56.9289C14.6805 56.5384 14.0474 56.5384 13.6569 56.9289L8 62.5858L2.34314 56.9289C1.95262 56.5384 1.31945 56.5384 0.92893 56.9289C0.538405 57.3195 0.538405 57.9526 0.92893 58.3431L7.29289 64.7071ZM7 -4.37114e-08L7 64L9 64L9 4.37114e-08L7 -4.37114e-08Z"
            fill="#77C09F"
          />
        </svg>

        <div className="drop-shadow-image leading-[0px]">
          <Image src="/sync/sync-to.png" alt="Sync" width={352} height={508} />
        </div>
        <div className="absolute lg:hidden right-[-12px] top-[-32px] flex items-center justify-center rounded-full w-[120px] h-[120px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[116px] h-[116px]">
            <Image src="/sync/june.svg" alt="June" width={56} height={60} />
          </div>
        </div>


        <div className="absolute lg:hidden right-[-12.5px] bottom-[-2px] flex items-center justify-center rounded-full w-[120px] h-[120px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[116px] h-[116px]">
            <Image src="/sync/hubspot.svg" alt="Hubspotr" width={64} height={64} />
          </div>
        </div>


        <div className="absolute lg:hidden right-[83.5px] bottom-[-23px] flex items-center justify-center rounded-full w-[120px] h-[120px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[116px] h-[116px]">
            <Image src="/sync/attio.svg" alt="Attio" width={56} height={46} />
          </div>
        </div>

        <div className="absolute lg:hidden right-[180px] bottom-[-53px] flex items-center justify-center rounded-full w-[120px] h-[120px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[116px] h-[116px]">
            <Image src="/sync/salesforce.svg" alt="Salesforce" width={64} height={64} />
          </div>
        </div>

        <div className="absolute hidden lg:flex items-center justify-center left-[-152px] bottom-[-120px] rounded-full w-[240px] h-[240px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[232px] h-[232px]">
            <Image src="/sync/june.svg" alt="June" width={112} height={120} />
          </div>
        </div>
        <div className="absolute hidden lg:flex items-center justify-center right-[-152px] bottom-[20px] rounded-full w-[200px] h-[200px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[192px] h-[192px]">
            <Image src="/sync/salesforce.svg" alt="Salesforce" width={115} height={80} />
          </div>
        </div>
        <div className="absolute hidden lg:flex items-center justify-center right-[-80px] bottom-[-120px] rounded-full w-[200px] h-[200px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[192px] h-[192px]">
            <Image src="/sync/attio.svg" alt="Attio" width={112} height={92} />
          </div>
        </div>
        <div className="absolute hidden lg:flex items-center justify-center right-[-152px] top-[-64px] rounded-full w-[240px] h-[240px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4]  drop-shadow-multi-colored">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-[232px] h-[232px]">
            <Image src="/sync/hubspot.svg" alt="Hubspot" width={128} height={128} />
          </div>
        </div>
      </div>
    </div>
  );
};
