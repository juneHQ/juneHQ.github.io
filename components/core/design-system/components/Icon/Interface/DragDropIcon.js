import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const DragDropIcon = createIcon({
  path: (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1C16 0.447715 15.5523 0 15 0H1C0.447715 0 0 0.447715 0 1V1C0 1.55228 0.447715 2 1 2H15C15.5523 2 16 1.55228 16 1V1ZM16 7C16 6.44772 15.5523 6 15 6H1C0.447715 6 0 6.44772 0 7V7C0 7.55228 0.447715 8 1 8H15C15.5523 8 16 7.55228 16 7V7Z"
        fill="#868E96"
      />
    </svg>
  ),
});

export default DragDropIcon;
