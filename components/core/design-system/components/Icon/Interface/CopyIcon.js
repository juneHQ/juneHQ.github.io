import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const CopyIcon = createIcon({
  path: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6.83203"
        y="6.83008"
        width="11.6715"
        height="11.6715"
        rx="2"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83082 15.1676H5.16345C4.2426 15.1676 3.49609 14.4211 3.49609 13.5003V5.16345C3.49609 4.2426 4.2426 3.49609 5.16345 3.49609H13.5003C14.4211 3.49609 15.1676 4.2426 15.1676 5.16345V6.83082"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
});

export default CopyIcon;
