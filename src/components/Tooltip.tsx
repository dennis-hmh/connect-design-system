import React, { useState } from 'react';

type TooltipProps = {
  label: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="connect__tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="connect__tooltip" aria-label={label}>
          {label}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
