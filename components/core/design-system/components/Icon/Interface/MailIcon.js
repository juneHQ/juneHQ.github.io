import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const MailIcon = createIcon({
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="1.25"
        d="M2.5 5.667v0c0 .5.25.917.667 1.25l5 3.417c1.166.75 2.583.75 3.75 0l5-3.334c.333-.416.583-.833.583-1.333v0c0-.833-.667-1.5-1.5-1.5H4c-.833 0-1.5.667-1.5 1.5Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="1.25"
        d="M2.5 5.834v8.333c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V5.834M2.988 15.343l5.079-5.078M11.965 10.3l5.043 5.044"
      />
    </svg>
  ),
  viewBox: '0 0 20 20',
});

export default MailIcon;
