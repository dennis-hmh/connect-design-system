# Grid Component

The `Grid` component is a flexible and customizable layout component designed to help you create responsive grid layouts in your React applications. It supports various gap sizes and optional gutters to control the spacing between grid items.

## Features

- **Responsive Layout**: Easily create responsive grid layouts with customizable gap sizes.
- **Customizable Gaps**: Supports predefined gap sizes (`none`, `xs`, `sm`, `md`, `lg`, `xl`) to control the spacing between grid items.
- **Optional Gutters**: Add gutters to the grid for additional spacing control.
- **TypeScript Support**: Leverages TypeScript for type safety and to define props clearly.

## Installation

To use the `Grid` component, ensure you have the `@connect/connect-design-system` library installed:

```bash
npm install @connect/connect-design-system@latest
```

## Usage

Here is an example of how to use the Grid component in your React application:

```tsx
iimport React from 'react';
import { Grid } from '@connect/connect-design-system';
import { GridItem } from '@connect/connect-design-system';

const App = () => {
  return (
    <Grid gap="md" gutter={true}>
      <GridItem xs={{ startCol: 1, spanCol: 4 }}>
        <div>Item 1</div>
      </GridItem>
      <GridItem xs={{ startCol: 5, spanCol: 4 }}>
        <div>Item 2</div>
      </GridItem>
      <GridItem xs={{ startCol: 9, spanCol: 4 }}>
        <div>Item 3</div>
      </GridItem>
    </Grid>
  );
};

export default App;
```

## Props

The Grid component accepts the following props:

### children

- Type: React.ReactNode
- Required: Yes
- Description: The content to be rendered inside the grid.

### xs, sm, md, lg, xl

- Type: BreakpointValues
- Required: No
- Description: Specifies the layout behavior at different screen sizes (breakpoints). Each of these props can accept an object of type BreakpointValues, which can define several properties to control the layout, such as justifyContent, justifyItems, alignContent, and alignItems.

### gap

- Type: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- Required: No
- Description: The size of the gap between grid items. Defaults to 'var(--grid-gap)' if not provided.

### gutter

- Type: 'boolean'
- Required: No
- Description: Adds gutters to the grid for additional spacing control.

### className

- Type: string
- Required: No
- Description: Additional CSS class names to apply to the grid.

### style

-Type: React.CSSProperties
-Required: No
-Description: Inline styles to apply to the grid.

### tabIndex

- Type: number
- Required: No
- Description: The tab index of the grid.

### dataTestId

- Type: string
- Required: No
- Description: A test ID for the grid, useful for testing purposes.

### gradeBand

- Type: GradeBand
- Required: No
- Description: Specifies the grade band for the grid.

## Example

Here is a more detailed example demonstrating the usage of the Grid component with different gap sizes and gutters:

```tsx
import React from 'react';
import { Grid } from '@connect/connect-design-system';
import { GridItem } from '@connect/connect-design-system';

const Example = () => {
  return (
    <Grid gap="lg" gutter={true} className="custom-grid" dataTestId="example-grid">
      <GridItem xs={{ startCol: 1, spanCol: 4 }}>
        <div>Item 1</div>
      </GridItem>
      <GridItem xs={{ startCol: 5, spanCol: 4 }}>
        <div>Item 2</div>
      </GridItem>
      <GridItem xs={{ startCol: 9, spanCol: 4 }}>
        <div>Item 3</div>
      </GridItem>
    </Grid>
  );
};

export default Example;
```
