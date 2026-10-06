import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const AnonymousIcon = createIcon({
  viewBox: '0 0 32 32',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#CED4DA" />
      <path
        fill="#fff"
        d="M23.052 20a2.896 2.896 0 1 1-5.79.208 1.413 1.413 0 0 0-1.157-.498 1.412 1.412 0 0 0-1.158.498 2.854 2.854 0 1 1-.203-1.332 3.114 3.114 0 0 1 2.768 0A2.895 2.895 0 0 1 23.052 20ZM19.833 9.815A1.737 1.737 0 0 0 18.357 9h-4.504a1.737 1.737 0 0 0-1.476.816l-2.02 3.236h11.496l-2.02-3.236Zm3.798 3.815H8.579a.579.579 0 0 0 0 1.158H23.63a.58.58 0 0 0 0-1.158Z"
      />
    </svg>
  ),
});

export default AnonymousIcon;
