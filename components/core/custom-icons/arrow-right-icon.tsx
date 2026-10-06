import * as React from 'react';
import { SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M.5 8.5h15M10.5 3.5l5 5-5 5"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
