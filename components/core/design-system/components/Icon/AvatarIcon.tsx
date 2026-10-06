import React from 'react';

import { StyleProps } from '@chakra-ui/react';
/* eslint-disable react/jsx-props-no-spreading */
import { createIcon } from '@chakra-ui/icons';

import avatars from './avatars';

interface IAvatarIcon extends StyleProps {
  name: string;
}

function AvatarIcon({ name, ...props }: IAvatarIcon) {
  const iconSvg = avatars[name];

  const IconComponent = createIcon(iconSvg);
  return <IconComponent {...props} />;
}

export default AvatarIcon;
