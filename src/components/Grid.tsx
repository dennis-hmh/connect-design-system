import React, { ReactNode } from 'react';

type GapSizes = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface GridProps {
  children: ReactNode;
  gap?: GapSizes;
  gutter?: boolean | GapSizes;
  className?: string;
  style?: string;
  dataTestId?: string;
}

const Grid: React.FC<GridProps> = ({ children, gap, gutter, className, dataTestId }) => {
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

  const additionalClassName = gutter === true ? ' connect-gutter' : '';

  return (
    <section
      className={`${className || ''}${additionalClassName}`}
      style={styles}
      data-test-id={dataTestId}
    >
      {children}
    </section>
  );
};

export default Grid;
