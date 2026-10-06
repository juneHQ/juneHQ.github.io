import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const EditIcon = createIcon({
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        d="m4.412 13.016 8.605-8.605a.833.833 0 0 1 1.178 0l1.396 1.396a.833.833 0 0 1 0 1.178l-8.606 8.604a.83.83 0 0 1-.588.244H4.168v-2.229a.83.83 0 0 1 .244-.588Z"
        clipRule="evenodd"
      />
      <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" d="m11.457 5.967 2.575 2.575" />
    </svg>
  ),
  viewBox: '0 0 20 20',
});

export default EditIcon;
