/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createIcon } from '@chakra-ui/icons';
import logos from './logos';
import illustrations from './illustrations';
import icons from './icons';
import { IIcon } from './Icon.types';

function Icon({ iconType = null, name, iconStylingProps, ...props }: IIcon) {
  let iconSvg;
  switch (iconType) {
    case 'icon':
      iconSvg = icons[name];
      break;
    case 'logo':
      iconSvg = logos[name];
      break;
    case 'illustration':
      iconSvg = illustrations[name];
      break;
    default:
      iconSvg = icons[name];
      break;
  }

  if (process.env.NODE_ENV === 'test') return <></>;

  const IconComponent = createIcon(iconSvg);
  return <IconComponent {...iconStylingProps} {...props} />;
}

export default Icon;
