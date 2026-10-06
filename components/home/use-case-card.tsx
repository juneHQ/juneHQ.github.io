import clsx from "clsx";

export interface IUseCaseCard {
  step: number;
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  imageBg: string;
  imageBgClassname?: string;
  imageUrlMobile?: string;
  textColor: string;
  attributes: {
    icon: React.ReactNode;
    name: string;
  }[];
}

export const UseCaseCard: React.FC<IUseCaseCard> = (props) => (
  <>
    <div
      style={{
        // backgroundColor: props.backgroundColor,
        backgroundImage: props.imageUrl ? `url(${props.imageUrl})` : undefined,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={clsx('hidden md:flex flex-col gap-6 max-w-[831px] lg:w-[831px] md:h-[559px] h-[503px] rounded-3xl pt-6 overflow-hidden pl-3')}
    >
      <div className="justify-center gap-8 hidden md:flex">
        {/* attributes from spaced apart */}
        {props.attributes.map((attribute, index) => (
          <div key={index} className="flex gap-2 font-hero font-black">
            <div className="text-[#6868f7]">{attribute.icon}</div>
            <div className={`text-[${props.textColor}]`}>{attribute.name}</div>
          </div>
        ))}
      </div>
    </div>
    <div
      className={`flex md:hidden h-[503px] w-full rounded-[11px]`}
      style={{
        backgroundImage: props.imageUrlMobile ? `url(${props.imageUrlMobile})` : undefined,
        backgroundSize: 'cover',
        // backgroundPosition: 'start',
        backgroundRepeat: 'no-repeat',
      }}
    >
    </div>
  </>
);