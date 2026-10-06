interface TitleProps {
  icon: string;
  alt: string;
  title: string;
  bgColor?: string;
  textColor?: string; // Optional prop for text color
}

export default function Title({ icon, alt, title, bgColor, textColor }: TitleProps) {
  return (
    <div
      className="flex items-center text-[16px] text-lg font-semibold rounded-[20px] shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)] py-4 px-6 gap-2"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className={`grid w-[24px] h-[24px]`}>
        <img src={icon} alt={alt} className="place-self-center" />
      </div>
      <div
        className={`flex-1 font-hero font-black text-sm uppercase grid place-content-center`}
        style={{
          color: textColor || '#0D131B',
        }}
      >
        {title}
      </div>
    </div>
  );
}
