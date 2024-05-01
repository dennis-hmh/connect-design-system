import React from 'react';

type GapSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface GridProps {
  children: React.ReactNode;
  gap?: GapSizes;
  gutter?: boolean | GapSizes;
  className?: string;
  style?: string;
  dataTestId?: string;
}

const Grid: React.FC<GridProps> = ({ children, gap, gutter, className, dataTestId }) => {
  // Supported gaps are our spacer sizes
  const gapSizes: { [key in GapSizes]: string } = {
    xs: 'var(--connect-spacer-xs)',
    sm: 'var(--connect-spacer-sm)',
    md: 'var(--connect-spacer-md)',
    lg: 'var(--connect-spacer-lg)',
    xl: 'var(--connect-spacer-xl)',
  };

  // If gap is not provided or the value is not defined in gapSizes, default to 'var(--grid-gap)'
  const gridGap = gap ? gapSizes[gap] : 'var(--grid-gap)';

  const styles = {
    gap: gridGap,
  };

  const additionalClassName = gutter === true ? 'connect__grid-gutter' : '';

  return (
    <section
      className={`${className || ''} connect__grid ${additionalClassName}`}
      style={styles}
      data-test-id={dataTestId}
    >
      {children}
    </section>
  );
};

export default Grid;
