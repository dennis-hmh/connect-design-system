import React from 'react';

type TooltipProps = {
  label: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className="connect__tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label={label}
    >
      {children}
    </div>
  );
};

export default Tooltip;
