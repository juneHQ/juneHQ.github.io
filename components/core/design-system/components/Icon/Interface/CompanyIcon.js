import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const CompanyIcon = createIcon({
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="1.25"
        d="M18.503 18.504V4.57a1.072 1.072 0 0 0-1.448-1l-5.36 2.007A1.071 1.071 0 0 0 11 6.582v11.922"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="1.25"
        d="M6.309 5.373h1.876c.518 0 .938.42.938.938v1.876H5.37V6.31c0-.518.42-.938.938-.938v0Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="1.25"
        d="M7.249 3.496v1.876M3.496 18.503V9.124c0-.518.42-.937.938-.937h5.627c.518 0 .938.42.938.937v9.38M5.844 13.814h2.813M5.844 13.814h2.813M5.844 11h2.813M7.249 17.098v1.406M19.338 18.504H2.664M13.503 8.547v6.622M16.003 8.547v6.622"
      />
    </svg>
  ),
  viewBox: '0 0 22 22',
});

export default CompanyIcon;
