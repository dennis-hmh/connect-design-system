# GridItem Component

The `GridItem` component is designed to be used within the `Grid` component, allowing for flexible and customizable grid item layouts. It supports responsive design through customizable breakpoints and properties for controlling the grid item's position and size.

## Features

- **Responsive Design**: Easily create responsive grid item layouts with customizable breakpoints.
- **Customizable Positioning**: Control the starting column and span of each grid item.
- **Row Span Support**: Specify how many rows a grid item should span.
- **TypeScript Support**: Leverages TypeScript for type safety and to define props clearly.

## Installation

To use the `GridItem` component, ensure you have the `@connect/connect-design-system` library installed:

```bash
npm install @connect/connect-design-system@latest
```

## Usage

Here is an example of how to use the `GridItem` component within a `Grid`:

```tsx
import React from 'react';
import { Grid, GridItem } from '@connect/connect-design-system';

const App = () => {
  return (
    <Grid gap="lg" gutter={true}>
      <GridItem xs={12} md={6} rowSpan={2} lg={{ spanCol: 4, rowSpan: 3 }}>
        <div>Item 1</div>
      </GridItem>
      <GridItem xs={12} md={6} lg={{ spanCol: 4 }}>
        <div>Item 2</div>
      </GridItem>
      <GridItem xs={12} lg={{ spanCol: 4 }}>
        <div>Item 3</div>
      </GridItem>
    </Grid>
  );
};

export default App;
```

## Props

The GridItem component accepts the following props:

### children

- Type: React.ReactNode
- Required: Yes
- Description: The content to be rendered inside the grid item.

### xs, sm, md, lg, xl

- Type: BreakpointValues
- Required: No
- Description: Specifies the layout behavior at different screen sizes (breakpoints). Each of these props can accept an object of type BreakpointValues, which can define several properties to control the layout, such as `startCol`, `spanCol`, and `rowSpan`.

### rowSpan

- Type: number
- Required: No
- Description: Specifies how many rows the grid item should span. This can be set as a base prop or overridden at different breakpoints.

### className

- Type: string
- Required: No
- Description: Additional CSS class names to apply to the grid item.

### dataTestId

- Type: string
- Required: No
- Description: A test ID for the grid item, useful for testing purposes.

### gradeBand

- Type: GradeBand
- Required: No
- Description: Specifies the grade band for the grid item.

## Example

Here is a more detailed example demonstrating the usage of the GridItem component with different props:

```tsx
import React from 'react';
import { Grid, GridItem } from '@connect/connect-design-system';

const Example = () => {
  return (
    <Grid gap="lg" gutter={true}>
      <GridItem xs={12} md={6} rowSpan={2} lg={{ spanCol: 4, rowSpan: 3 }}>
        <div>Item 1</div>
      </GridItem>
      <GridItem xs={12} md={6} lg={{ spanCol: 4 }}>
        <div>Item 2</div>
      </GridItem>
      <GridItem xs={12} lg={{ spanCol: 4 }}>
        <div>Item 3</div>
      </GridItem>
    </Grid>
  );
};

export default Example;
```

## Conclusion

The `GridItem` component provides a powerful and flexible way to create responsive grid layouts in your React applications. With customizable positioning, row span support, and responsive breakpoints, it allows for fine-tuned control over the layout of your components.
