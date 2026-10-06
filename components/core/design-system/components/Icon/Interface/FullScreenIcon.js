import React from 'react';
import { createIcon } from '@chakra-ui/icons';

const FullScreenIcon = createIcon({
  viewBox: '0 0 14 14',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
      <path
        fill="currentColor"
        d="M9.061.816v.677h2.464L9.76 3.258 7.998 5.019l.49.493.493.49 1.761-1.762 1.765-1.765V4.94H13.86V.14H9.061v.676ZM3.254 9.763l-1.761 1.762V9.061H.14V13.86H4.939V12.507H2.475l1.749-1.749c.96-.96 1.745-1.761 1.745-1.777 0-.02-.212-.248-.476-.51l-.474-.473-1.765 1.765Z"
      />
    </svg>
  ),
});

export default FullScreenIcon;
