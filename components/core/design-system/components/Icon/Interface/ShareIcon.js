import React from 'react';

interface ShareIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const ShareIcon: React.FC<ShareIconProps> = ({ 
  className,
  width = "24",
  height = "24",
  color = "currentColor"
}) => {
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.55285 10.1132C9.59438 11.1547 9.59438 12.8434 8.55285 13.8849C7.51132 14.9264 5.82267 14.9264 4.78114 13.8849C3.73961 12.8434 3.73961 11.1547 4.78114 10.1132C5.82267 9.07165 7.51132 9.07165 8.55285 10.1132"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2189 4.78115C20.2604 5.82268 20.2604 7.51133 19.2189 8.55286C18.1774 9.59439 16.4887 9.59439 15.4472 8.55286C14.4057 7.51133 14.4057 5.82268 15.4472 4.78115C16.4887 3.73962 18.1774 3.73962 19.2189 4.78115"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2189 15.4472C20.2604 16.4887 20.2604 18.1773 19.2189 19.2189C18.1774 20.2604 16.4887 20.2604 15.4472 19.2189C14.4057 18.1773 14.4057 16.4887 15.4472 15.4472C16.4887 14.4056 18.1774 14.4056 19.2189 15.4472"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04 10.8096L14.96 7.84961"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04 13.1895L14.96 16.1495"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
