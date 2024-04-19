import React, { ReactNode } from 'react';

type GapSizes = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface GridProps {
  children: ReactNode;
  gap?: GapSizes;
  gutter?: boolean | GapSizes;
  className?: string;
  style?: string;
}

const Grid: React.FC<GridProps> = ({ children, gap, className }) => {
  // Supported gaps are our spacer sizes
  const gapSizes: { [key in GapSizes]: string } = {
    xl: 'var(--connect-spacer-xl)',
    lg: 'var(--connect-spacer-lg)',
    md: 'var(--connect-spacer-md)',
    sm: 'var(--connect-spacer-sm)',
    xs: 'var(--connect-spacer-xs)',
  };

  // If gap is not provided or the value is not defined in gapSizes, default to 'var(--grid-gap)'
  const gridGap = gap ? gapSizes[gap] : 'var(--grid-gap)';

  const styles = {
    gap: gridGap,
  };

  return (
    <section className={className} style={styles}>
      {children}
    </section>
  );
};

export default Grid;
