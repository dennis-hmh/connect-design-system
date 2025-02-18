import React, { useMemo } from 'react';
import { GradeBand } from 'src/enum/gradeband';

type GapSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpacingSizes = 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  gap?: GapSizes;
  columnGap?: GapSizes;
  rowGap?: GapSizes;
  paddingX?: SpacingSizes;
  paddingY?: SpacingSizes;
  paddingTop?: SpacingSizes;
  paddingBottom?: SpacingSizes;
  paddingLeft?: SpacingSizes;
  paddingRight?: SpacingSizes;
};

export type GridProps = {
  children: React.ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: GapSizes;
  columnGap?: GapSizes;
  rowGap?: GapSizes;
  gutter?: boolean;
  subgrid?: boolean;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  dataTestId?: string;
  gradeBand?: GradeBand;
  overflow?: 'auto' | 'scroll' | 'hidden';
};

const gapSizes: { [key in GapSizes]: string } = {
  none: 'var(--connect__spacer-zero)',
  xs: 'var(--connect__spacer-xs)',
  sm: 'var(--connect__spacer-sm)',
  md: 'var(--connect__spacer-md)',
  lg: 'var(--connect__spacer-lg)',
  xl: 'var(--connect__spacer-xl)',
};

const setGridVariables = (
  values: BreakpointValues | undefined,
  prefix: string = '',
): Record<string, string> => {
  if (!values) return {};

  const variables: Record<string, string> = {};

  if (values.alignContent) {
    variables[`--connect__grid${prefix}-align-content`] = values.alignContent;
  }
  if (values.alignItems) {
    variables[`--connect__grid${prefix}-align-items`] = values.alignItems;
  }
  if (values.justifyContent) {
    variables[`--connect__grid${prefix}-justify-content`] = values.justifyContent;
  }
  if (values.gap) {
    variables[`--connect__grid${prefix}-gap`] = gapSizes[values.gap];
  }
  if (values.columnGap) {
    variables[`--connect__grid${prefix}-column-gap`] = gapSizes[values.columnGap];
  }
  if (values.rowGap) {
    variables[`--connect__grid${prefix}-row-gap`] = gapSizes[values.rowGap];
  }
  if (values.paddingX) {
    variables[`--connect__grid${prefix}-padding-x`] = `var(--connect__spacer-${values.paddingX})`;
  }
  if (values.paddingY) {
    variables[`--connect__grid${prefix}-padding-y`] = `var(--connect__spacer-${values.paddingY})`;
  }
  if (values.paddingTop) {
    variables[`--connect__grid${prefix}-padding-top`] =
      `var(--connect__spacer-${values.paddingTop})`;
  }
  if (values.paddingBottom) {
    variables[`--connect__grid${prefix}-padding-bottom`] =
      `var(--connect__spacer-${values.paddingBottom})`;
  }
  if (values.paddingLeft) {
    variables[`--connect__grid${prefix}-padding-left`] =
      `var(--connect__spacer-${values.paddingLeft})`;
  }
  if (values.paddingRight) {
    variables[`--connect__grid${prefix}-padding-right`] =
      `var(--connect__spacer-${values.paddingRight})`;
  }

  return variables;
};

export const Grid: React.FC<GridProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  gap,
  columnGap,
  rowGap,
  gridTemplateColumns,
  gridTemplateRows,
  gutter,
  subgrid = false,
  className,
  dataTestId,
  tabIndex,
  overflow,
  style: customStyle,
  ...other
}) => {
  const cssVariables = useMemo(() => {
    const baseStyles = {
      '--connect__grid-template-columns': gridTemplateColumns,
      '--connect__grid-template-rows': gridTemplateRows,
      ...(gap && { '--connect__grid-gap': gapSizes[gap] }),
      ...(columnGap && { '--connect__grid-column-gap': gapSizes[columnGap] }),
      ...(rowGap && { '--connect__grid-row-gap': gapSizes[rowGap] }),
      ...setGridVariables(xs),
    };

    const breakpointStyles = {
      ...setGridVariables(sm, '-sm'),
      ...setGridVariables(md, '-md'),
      ...setGridVariables(lg, '-lg'),
      ...setGridVariables(xl, '-xl'),
    };

    return {
      ...baseStyles,
      ...breakpointStyles,
    } as React.CSSProperties;
  }, [xs, sm, md, lg, xl, gridTemplateColumns, gridTemplateRows, gap, columnGap, rowGap]);

  const breakpointClasses = useMemo(() => {
    const classes = ['connect__grid'];
    if (xs) classes.push('connect__grid-xs');
    if (sm) classes.push('connect__grid-sm');
    if (md) classes.push('connect__grid-md');
    if (lg) classes.push('connect__grid-lg');
    if (xl) classes.push('connect__grid-xl');
    if (className) classes.push(className);
    if (gutter) classes.push('connect__grid-gutter');
    if (subgrid) classes.push('connect__subgrid');
    return classes.join(' ');
  }, [className, xs, sm, md, lg, xl, gutter, subgrid]);

  const combinedStyle = useMemo(
    () => ({
      ...cssVariables,
      ...(overflow && { overflow }),
      ...customStyle,
    }),
    [cssVariables, overflow, customStyle],
  );

  return (
    <section
      className={breakpointClasses}
      style={combinedStyle}
      data-testid={dataTestId}
      tabIndex={tabIndex}
      {...other}
    >
      {children}
    </section>
  );
};
