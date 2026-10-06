import Image from "next/image";

export const UnderstandCustomer = () => {
  return (
    <div className="flex flex-col gap-y-[44px] lg:gap-y-[64px] px-[24px] items-center mt-16 lg:mt-40 text-primary font-hero">
      <div>
        <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black text-center">
          Get close to your most important customers
        </h2>
        <p className="mt-[8px] lg:mt-[16px] text-primary text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-center">
          Get a full view of their activity so you can upsell and retain them.
          <br className="hidden lg:block" />
          Help them be successful using your product.
        </p>
      </div>
      <div className="drop-shadow-image">
        <Image src="/understand-customer/understand-customer.png" alt="Feature" width={1192} height={708} />
      </div>
    </div>
  );
};
