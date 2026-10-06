export const EndlessPossibilities = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-[24px] lg:gap-[48px] px-[24px] items-center justify-center mt-[148px] lg:mt-[280px] text-primary font-hero">
      <div className="relative flex items-center p-[2px] lg:p-[4px] justify-center w-full max-w-[572px] rounded-[20px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
        <div className="relative overflow-hidden w-full h-full pl-[24px] pt-[24px] lg:pl-[48px] lg:pt-[48px] bg-white rounded-[18px] lg:rounded-[16px]">
          <div className="pr-[24px] lg:pr-[48px]">
            <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
              Smart defaults
            </h2>
            <p className="mt-[8px] lg:mt-[16px] text-primary text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px]">
              Hit the ground running with pre-configured traits. No setup required.
            </p>
          </div>
          <div className="mt-[24px] lg:mt-[48px] p-[2px] lg:p-[4px] rounded-tl-[20px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] relative bottom-[-2px] lg:bottom-[-4px] right-[-2px] lg:right-[-4px] w-full lg:w-[524px] h-full lg:h-[426px] drop-shadow-multi-colored">
            <div className="relative w-full h-full bg-white rounded-tl-[18px] lg:rounded-tl-[16px]">
              <img src="/endless-possibilities/computed-traits.png" className="w-full h-full" alt="Computed Traits" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center p-[2px] lg:p-[4px] justify-center w-full max-w-[572px] rounded-[20px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] drop-shadow-multi-colored">
        <div className="relative overflow-hidden w-full h-full pl-[24px] pt-[24px] lg:pl-[48px] lg:pt-[48px] bg-white rounded-[18px] lg:rounded-[16px]">
          <div className="pr-[24px] lg:pr-[48px]">
            <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
              Make it yours
            </h2>
            <p className="mt-[8px] lg:mt-[16px] text-primary text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px]">
              Create your own traits based on product usage. No code required.
            </p>
          </div>
          <div className="mt-[24px] lg:mt-[48px] p-[2px] lg:p-[4px] rounded-tl-[20px] bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4] relative bottom-[-2px] lg:bottom-[-4px] right-[-2px] lg:right-[-4px] w-full lg:w-[524px] h-full lg:h-[426px] drop-shadow-multi-colored">
            <div className="relative w-full h-full bg-white rounded-tl-[18px] lg:rounded-tl-[16px]">
              <img src="/endless-possibilities/usage-trend.png" className="w-full h-full" alt="Computed Traits" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
