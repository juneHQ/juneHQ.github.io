import React, { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <span className="has-tooltip relative">
      <span className="tooltip rounded-lg shadow-lg bg-gray-900 w-[250px] absolute">
        {content}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
