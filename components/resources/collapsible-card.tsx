import { classNames } from 'lib/utils';
import { useState } from 'react';

export const CollapsibleCard = ({
  isOpenByDefault,
  title,
  children,
  colors,
}: {
  isOpenByDefault: boolean;
  title: string;
  children: React.ReactNode;
  colors: {
    bg: string;
    border: string;
    text: string;
    icon: string;
  };
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={classNames(
        'flex flex-col gap-6 border-2 relative rounded-2xl px-8 py-5 overflow-hidden w-full',
        colors.bg,
        colors.border,
      )}
    >
      <img
        alt="Cloud"
        src="/cloud.png"
        className="block w-[420px] max-w-none absolute overflow-auto top-[-120px] left-[-100px]"
      />
      <div
        className={classNames(
          'flex justify-between items-center font-black text-xl relative cursor-pointer',
          colors.text,
        )}
        onClick={handleToggle}
      >
        {title}
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isOpen ? 'rotate-180' : 'rotate-0'}
        >
          <path
            d="M1.5 9.75L9 2.25L16.5 9.75"
            stroke={colors.icon}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>{children}</div>
    </aside>
  );
};
