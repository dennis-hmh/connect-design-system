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

const GridItem: React.FC<GridItemProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  dataTestId,
}) => {
  // Helper function to inherit values
  const getInheritedValue = (
    currentSize: BreakpointValues | undefined,
    previousSize: BreakpointValues,
    property: keyof BreakpointValues,
    defaultValue: any,
  ) => {
    return currentSize?.[property] ?? previousSize[property] ?? defaultValue;
  };

  const style: { [key: string]: any } = {};

  // Apply styles based on props for each breakpoint
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      const startCol = getInheritedValue(values, previousBreakpoint, 'startCol', 1);
      const spanCol = getInheritedValue(values, previousBreakpoint, 'spanCol', 12);
      const rowSpan = getInheritedValue(values, previousBreakpoint, 'rowSpan', null); // Default to null if not specified

      // Set CSS variables for start column, span, and row span
      style[`--${breakpoint}-start-col`] = startCol;
      style[`--${breakpoint}-span-col`] = spanCol;
      if (rowSpan) {
        style[`--${breakpoint}-row-span`] = rowSpan; // Apply row span if provided
      }

      previousBreakpoint = { startCol, spanCol, rowSpan }; // Update previousBreakpoint for inheritance
    }
  });

  // Construct the class string based on the breakpoints provided
  const classes = `grid-item ${className || ''} ${Object.keys(breakpoints)
    .filter((bp) => breakpoints[bp])
    .map((bp) => `connect-${bp}`)
    .join(' ')}`;

  // Wrap children in a div and apply the styles and class
  return (
    <div className={classes} style={style} data-test={dataTestId}>
      {children}
    </div>
  );
};

export default GridItem;
