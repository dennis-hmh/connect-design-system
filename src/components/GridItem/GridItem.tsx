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
  rowSpan?: number;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const processBreakpointValue = (
  breakpoint: string,
  values: BreakpointValues,
): { [key: string]: string } => {
  const styles: { [key: string]: string } = {};

  // If value is a number, only set span columns
  if (typeof values === 'number') {
    styles[`--connect__grid-item-${breakpoint}-span-col`] = values.toString();
    return styles;
  }

  // If object, only set the properties that are provided
  if (values.startCol !== undefined) {
    styles[`--connect__grid-item-${breakpoint}-start-col`] = values.startCol.toString();
  }

  if (values.spanCol !== undefined) {
    styles[`--connect__grid-item-${breakpoint}-span-col`] = values.spanCol.toString();
  }

  if (values.rowSpan !== undefined) {
    styles[`--connect__grid-item-${breakpoint}-row-span`] = values.rowSpan.toString();
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
  rowSpan,
  className,
  dataTestId,
}) => {
  const style: { [key: string]: string } = {};
  const breakpoints = { xs, sm, md, lg, xl };

  // Set base rowSpan if provided
  if (rowSpan !== undefined) {
    style['--connect__grid-item-row-span'] = rowSpan.toString();
  }

  // Process each breakpoint independently
  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      Object.assign(style, processBreakpointValue(breakpoint, values));
    }
  });

  const classes = [
    'connect__grid-item',
    className,
    ...Object.keys(breakpoints)
      .filter((bp) => breakpoints[bp])
      .map((bp) => `connect__grid-item-${bp}`),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style} data-testid={dataTestId}>
      {children}
    </div>
  );
};

export default GridItem;
