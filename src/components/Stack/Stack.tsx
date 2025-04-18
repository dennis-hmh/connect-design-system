import React, { useMemo } from 'react';

type SpacingSizes = 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type StackBreakpointValues = {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: SpacingSizes;
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  paddingX?: SpacingSizes;
  paddingY?: SpacingSizes;
  flex?: string;
};

export type StackProps = {
  children: React.ReactNode;
  element?: React.ElementType;
  direction?: StackBreakpointValues['direction'];
  spacing?: StackBreakpointValues['spacing'];
  alignItems?: StackBreakpointValues['alignItems'];
  alignSelf?: StackBreakpointValues['alignSelf'];
  justifyContent?: StackBreakpointValues['justifyContent'];
  flexWrap?: StackBreakpointValues['flexWrap'];
  paddingX?: StackBreakpointValues['paddingX'];
  paddingY?: StackBreakpointValues['paddingY'];
  xs?: StackBreakpointValues;
  sm?: StackBreakpointValues;
  md?: StackBreakpointValues;
  lg?: StackBreakpointValues;
  xl?: StackBreakpointValues;
  className?: string;
  dataTestId?: string;
  flex?: 'auto' | 'grow' | 'shrink' | 'none' | 'fill' | number | boolean;
  customStyle?: React.CSSProperties;
};

const generateFlexValue = (flex: StackProps['flex']): string => {
  if (typeof flex === 'boolean') return flex ? '1' : 'none';
  if (typeof flex === 'number') return `${flex}`;

  const flexPresets: Record<NonNullable<typeof flex>, string> = {
    auto: '1 1 auto',
    grow: '1 0 auto',
    shrink: '0 1 auto',
    none: 'none',
    fill: '1 1 100%',
  };

  return flex ? flexPresets[flex] : 'none';
};

const setStackVariables = (
  values: StackBreakpointValues | undefined,
  prefix: string = '',
): Record<string, string> => {
  const variables: Record<string, string> = {};

  // If no values provided, return (either base defaults or empty object for breakpoints)
  if (!values) {
    return variables;
  }

  // Only set these if explicitly provided in values
  if (values.direction) {
    variables[`--connect__stack${prefix}-direction`] = values.direction;
  }
  if (values.flexWrap) {
    variables[`--connect__stack${prefix}-flex-wrap`] = values.flexWrap;
  }
  if (values.justifyContent) {
    variables[`--connect__stack${prefix}-justify-content`] = values.justifyContent;
  }
  if (values.alignItems) {
    variables[`--connect__stack${prefix}-align-items`] = values.alignItems;
  }
  if (values.spacing) {
    variables[`--connect__stack${prefix}-spacing`] = `var(--connect__spacer-${values.spacing})`;
  }
  if (values.alignSelf) {
    variables[`--connect__stack${prefix}-align-self`] = values.alignSelf;
  }
  if (values.paddingX) {
    variables[`--connect__stack${prefix}-padding-x`] = `var(--connect__spacer-${values.paddingX})`;
  }
  if (values.paddingY) {
    variables[`--connect__stack${prefix}-padding-y`] = `var(--connect__spacer-${values.paddingY})`;
  }
  if (values.flex) {
    variables[`--connect__stack${prefix}-flex`] = values.flex;
  }

  return variables;
};

export const Stack: React.FC<StackProps> = ({
  children,
  element: Component = 'div',
  direction,
  spacing,
  alignItems,
  alignSelf,
  justifyContent,
  flexWrap,
  paddingX,
  paddingY,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  dataTestId,
  flex,
  customStyle,
  ...other
}) => {
  const cssVariables = useMemo(() => {
    const baseStyles = {
      ...setStackVariables(xs),
      ...(flex && { '--connect__stack-flex': generateFlexValue(flex) }),
    };

    const breakpointStyles = {
      ...setStackVariables(sm, '-sm'),
      ...setStackVariables(md, '-md'),
      ...setStackVariables(lg, '-lg'),
      ...setStackVariables(xl, '-xl'),
    };

    const nonBreakpointStyles = {
      ...(direction && { '--connect__stack-direction': direction }),
      ...(spacing && { '--connect__stack-spacing': `var(--connect__spacer-${spacing})` }),
      ...(alignItems && { '--connect__stack-align-items': alignItems }),
      ...(alignSelf && { '--connect__stack-align-self': alignSelf }),
      ...(justifyContent && { '--connect__stack-justify-content': justifyContent }),
      ...(flexWrap && { '--connect__stack-flex-wrap': flexWrap }),
      ...(paddingX && { '--connect__stack-padding-x': `var(--connect__spacer-${paddingX})` }),
      ...(paddingY && { '--connect__stack-padding-y': `var(--connect__spacer-${paddingY})` }),
    };

    return {
      ...baseStyles,
      ...breakpointStyles,
      ...nonBreakpointStyles,
    } as React.CSSProperties;
  }, [
    xs,
    sm,
    md,
    lg,
    xl,
    flex,
    direction,
    spacing,
    alignItems,
    alignSelf,
    justifyContent,
    flexWrap,
    paddingX,
    paddingY,
  ]);

  const stackClasses = useMemo(() => {
    const classes = ['connect__stack'];
    if (xs) classes.push('connect__stack-xs');
    if (sm) classes.push('connect__stack-sm');
    if (md) classes.push('connect__stack-md');
    if (lg) classes.push('connect__stack-lg');
    if (xl) classes.push('connect__stack-xl');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [className, xs, sm, md, lg, xl]);

  const combinedStyle = useMemo(
    () => ({
      ...cssVariables,
      ...customStyle,
    }),
    [cssVariables, customStyle],
  );

  return (
    <Component className={stackClasses} style={combinedStyle} data-testid={dataTestId} {...other}>
      {children}
    </Component>
  );
};
