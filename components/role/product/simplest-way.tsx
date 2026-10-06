import Image from 'next/image';

export const SimplestWay = () => {
  return (
    <div className="flex flex-col gap-y-[44px] lg:gap-y-[64px] px-[24px] items-center mt-16 lg:mt-40 text-primary font-hero">
      <div>
        <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black text-center">
          The simplest way to measure feature usage
        </h2>
        <p className="mt-[8px] lg:mt-[16px] text-primary text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-center">
          Ready to launch your next big feature? Add an event in 2 minutes and know <br className="hidden lg:block" />
          who loves it, and who hasn’t come back to use it.
        </p>
      </div>
      <div className="drop-shadow-image">
        <Image src="/simplest-way/simplest-way.png" alt="Feature" width={1192} height={708} />
      </div>
    </div>
  );
};
