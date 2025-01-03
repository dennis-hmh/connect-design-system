import React from 'react';

interface BreakpointValues {
  startCol?: number;
  spanCol?: number;
  rowSpan?: number;
}

interface GridItemProps {
  children: React.ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  className?: string;
  dataTestId?: string;
}

const generateGridItemStyles = (
  breakpoint: string,
  values: BreakpointValues,
  previousValues: BreakpointValues,
) => {
  const startCol = values.startCol ?? previousValues.startCol ?? 1;
  const spanCol = values.spanCol ?? previousValues.spanCol ?? 12;
  const rowSpan = values.rowSpan ?? previousValues.rowSpan ?? null;

  const styles: { [key: string]: any } = {
    [`--connect__grid-item-${breakpoint}-start-col`]: startCol,
    [`--connect__grid-item-${breakpoint}-span-col`]: spanCol,
  };

  if (rowSpan) {
    styles[`--connect__grid-item-${breakpoint}-row-span`] = rowSpan;
  }

  return styles;
};

export const GridItem: React.FC<GridItemProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  dataTestId,
}) => {
  const style: { [key: string]: any } = {};
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  // Apply styles based on props for each breakpoint
  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      Object.assign(style, generateGridItemStyles(breakpoint, values, previousBreakpoint));
      previousBreakpoint = { ...previousBreakpoint, ...values };
    }
  });

  const classes = `connect__grid-item ${className || ''} ${Object.keys(breakpoints)
    .filter((bp) => breakpoints[bp])
    .map((bp) => `connect__grid-item-${bp}`)
    .join(' ')}`;

  return (
    <div className={classes} style={style} data-testid={dataTestId}>
      {children}
    </div>
  );
};

export default GridItem;
