# Grid Component

The `Grid` component is a flexible and customizable layout component designed to help you create responsive grid layouts in your React applications. It supports various gap sizes and optional gutters to control the spacing between grid items.

## Features

- **Responsive Layout**: Easily create responsive grid layouts with customizable gap sizes.
- **Customizable Gaps**: Supports predefined gap sizes (`xs`, `sm`, `md`, `lg`, `xl`) to control the spacing between grid items.
- **Optional Gutters**: Add gutters to the grid for additional spacing control.
- **TypeScript Support**: Leverages TypeScript for type safety and to define props clearly.

## Installation

To use the `Grid` component, ensure you have the `@connect/connect-design-system` library installed:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

Here is an example of how to use the Grid component in your React application:

```tsx
import React from 'react';
import Grid from '@connect/connect-design-system/src/components/Grid/Grid';
import GridItem from '@connect/connect-design-system/src/components/GridItem';

const App = () => {
  return (
    <Grid gap="md" gutter={true}>
      <GridItem>
        <div>Item 1</div>
      </GridItem>
      <GridItem>
        <div>Item 2</div>
      </GridItem>
      <GridItem>
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

### gap

- Type: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- Required: No
- Description: The size of the gap between grid items. Defaults to 'var(--grid-gap)' if not provided.

### gutter

- Type: boolean | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- Required: No
- Description: Adds gutters to the grid for additional spacing control. If a string value is provided, it sets the gutter size.

### className

- Type: string
- Required: No
- Description: Additional CSS class names to apply to the grid.

## Example

Here is a more detailed example demonstrating the usage of the Grid component with different gap sizes and gutters:

```tsx
import React from 'react';
import Grid from '@connect/connect-design-system/src/components/Grid/Grid';
import GridItem from '@connect/connect-design-system/src/components/GridItem';

const Example = () => {
  return (
    <Grid gap="lg" gutter="md" className="custom-grid" dataTestId="example-grid">
      <GridItem>
        <div>Item 1</div>
      </GridItem>
      <GridItem>
        <div>Item 2</div>
      </GridItem>
      <GridItem>
        <div>Item 3</div>
      </GridItem>
    </Grid>
  );
};

export default Example;
```
