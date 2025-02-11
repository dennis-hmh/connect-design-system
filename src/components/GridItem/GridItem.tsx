import React from 'react';
import { GradeBand } from '../../enum/gradeband';

// Update BreakpointValues to handle both styles
export type BreakpointValues =
  | {
      startCol?: number;
      spanCol?: number;
      rowSpan?: number;
    }
  | number; // Add support for MUI-style numeric values

export type GridItemProps = {
  children: React.ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  rowSpan?: number; // Add base rowSpan prop
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const processBreakpointValue = (
  breakpoint: string,
  values: BreakpointValues,
  previousValues: BreakpointValues,
): { [key: string]: any } => {
  // If value is a number, treat it as MUI-style column span
  if (typeof values === 'number') {
    return {
      [`--connect__grid-item-${breakpoint}-start-col`]: 1,
      [`--connect__grid-item-${breakpoint}-span-col`]: values,
    };
  }

  // Otherwise, process as before
  const startCol =
    values.startCol ?? (typeof previousValues === 'number' ? 1 : previousValues.startCol) ?? 1;
  const spanCol =
    values.spanCol ??
    (typeof previousValues === 'number' ? previousValues : previousValues.spanCol) ??
    12;
  const rowSpan =
    values.rowSpan ?? (typeof previousValues === 'number' ? null : previousValues.rowSpan) ?? null;

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
  rowSpan, // Add rowSpan to destructuring
  className,
  dataTestId,
}) => {
  const style: { [key: string]: any } = {};
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  // Set base rowSpan if provided
  if (rowSpan !== undefined) {
    style['--connect__grid-item-row-span'] = rowSpan;
  }

  // Apply styles based on props for each breakpoint
  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      Object.assign(style, processBreakpointValue(breakpoint, values, previousBreakpoint));
      previousBreakpoint = values;
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
