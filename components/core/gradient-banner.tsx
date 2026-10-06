import { classNames } from 'lib/utils';

interface Props {
  url: string;
  alt: string;
  _wrapper?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const GradientBanner = ({ url, alt, gradientFrom = 'secondary', gradientTo = 'transparent' }: Props) => {
  return (
    <div className="relative w-full">
      <img src={url} alt={alt} sizes="100%" className="rounded-t-2xl object-cover" />
      <div
        className={classNames(
          `absolute transition bottom-0 left-0 right-0 h-full bg-gradient-to-t from-${gradientFrom} to-${gradientTo}`,
        )}
      ></div>
    </div>
  );
};
