import React, { useMemo } from 'react';

type SpacingSizes = 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
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
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
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

// Record<string, string> => {
//   [key: string]: string;
// }
// The function returns an object where all keys and values are strings
// This is so we can use the object in the css variables

const setStackVariables = (
  values: BreakpointValues | undefined,
  prefix: string = '',
): Record<string, string> => {
  if (!values) return {};

  const variables: Record<string, string> = {};


  // Set direction and its associated defaults
  if (values.direction) {
    variables[`--connect__stack${prefix}-direction`] = values.direction;
    const isRow = values.direction.includes('row');

    // Set row-specific defaults
    if (isRow) {
      // Set default flexWrap for row
      if (!values.flexWrap) {
        variables[`--connect__stack${prefix}-flex-wrap`] = 'wrap';
      }

      // Set default justifyContent for row if not specified
      if (!values.justifyContent) {
        variables[`--connect__stack${prefix}-justify-content`] = 'start'; // equivalent to flex-start
      }

      // Set default alignItems for row if not specified
      if (!values.alignItems) {
        variables[`--connect__stack${prefix}-align-items`] = 'stretch';
      }
    }
  }

  // Override defaults with explicitly provided values
  if (values.spacing)
    variables[`--connect__stack${prefix}-spacing`] = `var(--connect__spacer-${values.spacing})`;
  if (values.alignItems) variables[`--connect__stack${prefix}-align-items`] = values.alignItems;
  if (values.alignSelf) variables[`--connect__stack${prefix}-align-self`] = values.alignSelf;
  if (values.justifyContent)
    variables[`--connect__stack${prefix}-justify-content`] = values.justifyContent;
  if (values.flexWrap) variables[`--connect__stack${prefix}-flex-wrap`] = values.flexWrap;
  if (values.paddingX)
    variables[`--connect__stack${prefix}-padding-x`] = `var(--connect__spacer-${values.paddingX})`;
  if (values.paddingY)
    variables[`--connect__stack${prefix}-padding-y`] = `var(--connect__spacer-${values.paddingY})`;
  if (values.flex) variables[`--connect__stack${prefix}-flex`] = values.flex;

  return variables;
};

export const Stack = React.forwardRef<HTMLDivElement | HTMLElement, StackProps>((props) => {
  const {
    children,
    element: Component = 'div',
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
  } = props;

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

    // Return base styles in our case mobile first then add the BP over it
    return {
      ...baseStyles,
      ...breakpointStyles,
    } as React.CSSProperties;
  }, [xs, sm, md, lg, xl, flex]);

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
});
