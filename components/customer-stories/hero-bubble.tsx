import NextImage from 'next/image';
import { classNames } from 'lib/utils';

export const HeroBubble = ({ pp, color, text, image }) => {
  const colors = {
    purple: { text: 'text-third', bg: 'bg-secondary' },
    yellow: { text: 'text-[#5F2700]', bg: 'bg-[#FFE9C8]' },
    blue: { text: 'text-blue-500', bg: 'bg-blue-300' },
    pink: { text: 'text-[#800000]]', bg: 'bg-[#FFD2E1]' },
    green: { text: 'text-black', bg: 'bg-green-300' },
  };
  return (
    <div>
      <div className="flex gap-[8px] items-end">
        <div className="flex z-10 drop-shadow-lg flex-shrink-0 rounded-full overflow-hidden">
          <NextImage src={pp} width={40} height={40} />
        </div>
        <div
          className={classNames(
            'max-w-[280px] py-[7px] pl-[14px] pr-[20px] rounded-[15px] relative flex-shrink-0 drop-shadow-lg',
            colors[color]?.bg,
          )}
        >
          <div className={classNames('leading-[22px] font-normal text-[17px]', colors[color]?.text)}>{text}</div>
          <div className="absolute left-[-5px] bottom-0 w-[20px] h-[14px] flex">
            <NextImage src={`/customer-stories/tail-${color}.svg`} width={20} height={14} />
          </div>
          <div className="absolute top-[-28px] right-[-28px] drop-shadow-md">
            <NextImage src={image} width={56} height={56} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBubble;
