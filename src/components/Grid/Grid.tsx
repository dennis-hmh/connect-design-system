import React from 'react';

type GapSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type GridProps = {
  children: React.ReactNode;
  gap?: GapSizes;
  gutter?: boolean;
  className?: string;
  style?: string;
  dataTestId?: string;
};

export const Grid: React.FC<GridProps> = ({ children, gap, gutter, className, dataTestId }) => {
  // Supported gaps are our spacer sizes
  const gapSizes: { [key in GapSizes]: string } = {
    xs: 'var(--connect__spacer-xs)',
    sm: 'var(--connect__spacer-sm)',
    md: 'var(--connect__spacer-md)',
    lg: 'var(--connect__spacer-lg)',
    xl: 'var(--connect__spacer-xl)',
  };

  // If gap is not provided or the value is not defined in gapSizes, default to 'var(--grid-gap)'
  const gridGap = gap ? gapSizes[gap] : 'var(--grid-gap)';

  const styles = {
    gap: gridGap,
    width: 'var(--theme__connect-grid-width, 100%)',
  };

  const additionalClassName = gutter === true ? 'connect__grid-gutter' : '';

  return (
    <section
      className={`${className || ''} connect__grid ${additionalClassName}`}
      style={styles}
      data-testid={dataTestId}
    >
      {children}
    </section>
  );
};
