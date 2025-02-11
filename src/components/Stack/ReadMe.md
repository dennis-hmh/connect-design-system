# Stack Component

The Stack component is a flexible and easy-to-use layout component designed to manage the spacing and alignment of its child elements. It's built with React and supports responsive design through customizable breakpoints.

## Features

- **Responsive Design**: Supports breakpoints for `xs`, `sm`, `md`, `lg`, and `xl` sizes, allowing for responsive layouts.
- **Customizable Spacing and Alignment**: Offers properties to customize direction, spacing, alignment, and wrapping of child elements.
- **Easy to Use**: Designed for simplicity, making it straightforward to integrate into any React project.

## Installation

Ensure you have the Connect Design System installed in your project. If not, you can install it using npm:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

Import the Stack component from the Connect Design System and use it in your React components:

```tsx
import { Stack } from '@connect/connect-design-system';

const MyComponent = () => (
  <Stack direction="row" spacing="md">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);
```

## Props

The Stack component is designed to layout its children in a flexible and responsive manner. Here's a detailed description of its props:

- **`children`**: `React.ReactNode`  
  The content to be displayed within the Stack. This is a required prop and can be any valid React node.

- **`element`**: `React.ElementType`  
  A React element type to render (default is `div`).

- **`xs, sm, md, lg, xl`**: `BreakpointValues`  
  These props are used to specify the layout behavior at different screen sizes (breakpoints). Each of these props can accept an object of type `BreakpointValues`, which can define several properties to control the layout, such as:

  - **`direction`**: `'row' | 'column' | 'row-reverse' | 'column-reverse'`  
    Sets the flex direction of the Stack.
  - **`spacing`**: `SpacingSizes`  
    Defines the spacing between items.
  - **`alignItems`**: `'start' | 'center' | 'end' | 'baseline' | 'stretch'`  
    Aligns items along the cross axis.
  - **`alignSelf`**: `'start' | 'center' | 'end' | 'baseline' | 'stretch'`  
    Aligns a specific item along the cross axis.
  - **`justifyContent`**: `'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'`  
    Justifies items along the main axis.
  - **`flexWrap`**: `'nowrap' | 'wrap' | 'wrap-reverse'`  
    Controls whether items should wrap onto multiple lines.
  - **`paddingX`**: `SpacingSizes`  
    Sets horizontal padding.
  - **`paddingY`**: `SpacingSizes`  
    Sets vertical padding.
  - **`flex`**: `string`  
    Defines the flex behavior of the Stack.

- **`className`**: `string`  
  An optional string that allows you to apply custom CSS classes to the Stack component.

- **`dataTestId`**: `string`  
  An optional string used for testing purposes. It allows you to assign a data-testid attribute to the component, which can be targeted in tests.

- **`flex`**: `'auto' | 'grow' | 'shrink' | 'none' | 'fill' | number | boolean`  
  Defines the flex behavior of the Stack. Can be 'auto', 'grow', 'shrink', 'none', 'fill', or a number/boolean.

- **`customStyle`**: `React.CSSProperties`  
  An optional prop to apply custom inline styles to the Stack component.

The BreakpointValues type allows for fine-grained control over the stack's layout at different screen sizes. It includes properties like direction for setting the flex direction, spacing for setting the gap between items, and alignment and justification properties for controlling how items are aligned and distributed along the main and cross axes.

## Default Behaviour

- **Default Behavior**: When using the `direction` prop set to `row`, the Stack component will wrap its children by default, similar to MUI's Stack. This means that if the total width of the children exceeds the width of the parent container, the items will automatically wrap to the next line.

## Using the `flex` Prop

The `flex` prop allows you to control the flex behavior of the Stack component's children. Here are the different values you can use:

- **`'auto'`**: The item will grow to fill the available space, but will not shrink below its content size.
- **`'grow'`**: The item will grow to fill the available space, taking up any extra space in the container.
- **`'shrink'`**: The item will shrink to fit within the container, but will not grow beyond its content size.
- **`'none'`**: The item will not grow or shrink; it will maintain its original size.
- **`'fill'`**: The item will grow to fill the entire space of the container.
- **`number`**: You can also specify a numeric value, which will be interpreted as a flex-grow value. For example, `flex={2}` will allow the item to grow twice as much as an item with `flex={1}`.
- **`boolean`**: If set to `true`, the item will grow to fill the available space; if set to `false`, it will not grow.
- **`string`**: You can provide any valid CSS flex value as a string, such as `flex: '1 0 calc(50% - var(--connect__spacer-md))'`.

## Example

Here's an example of how to use the Stack component with various props for responsive design:

```tsx
import React from 'react';
import { Stack } from './components/Stack/Stack';

function Example() {
  return (
    <Stack
      className="custom-stack"
      dataTestId="example-stack"
      xs={{ direction: 'column', spacing: 'xs' }}
      md={{
        direction: 'row',
        spacing: 'md',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      lg={{ spacing: 'lg', paddingX: 'md', paddingY: 'sm' }}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}

export default Example;
```

In this example, the `Stack` component is used to arrange three div elements. At the smallest screen size (`xs`), the items are arranged in a column with extra-small spacing between them. As the screen size increases to medium (`md`), the direction changes to a row, with medium spacing, centered alignment, and space-between justification. At large screen sizes (`lg`), the spacing increases to large, with medium horizontal padding (`paddingX`) and small vertical padding (`paddingY`).

## Complex Example

Here's a complex example of how to use the Stack component with various props and breakpoints to create a responsive layout:

```tsx
import React from 'react';
import { Stack } from './components/Stack/Stack';

function ComplexExample() {
  return (
    <Stack
      direction="column"
      spacing="lg"
      xs={{ alignItems: 'center', justifyContent: 'center' }}
      md={{ direction: 'row', spacing: 'md', alignItems: 'flex-start' }}
      lg={{ spacing: 'xl', paddingX: 'lg', paddingY: 'md' }}
    >
      <Stack
        direction="row"
        spacing="sm"
        flexWrap="wrap"
        xs={{ justifyContent: 'space-around' }}
        md={{ justifyContent: 'space-between' }}
      >
        <div style={{ flex: '1 0 calc(50% - var(--connect__spacer-sm))' }}>Item 1</div>
        <div style={{ flex: '1 0 calc(50% - var(--connect__spacer-sm))' }}>Item 2</div>
        <div style={{ flex: '1 0 calc(50% - var(--connect__spacer-sm))' }}>Item 3</div>
      </Stack>
      <Stack
        direction="column"
        spacing="md"
        xs={{ alignItems: 'center' }}
        md={{ alignItems: 'flex-start' }}
      >
        <div style={{ flex: '1' }}>Item 4</div>
        <div style={{ flex: '1' }}>Item 5</div>
      </Stack>
    </Stack>
  );
}

export default ComplexExample;
```

### Explanation of the Complex Example

In this example, the outer `Stack` component is set to a column direction with large spacing between its children. It adjusts its alignment and justification based on the screen size:

- **Extra Small Screens (`xs`)**: Items are centered both vertically and horizontally.
- **Medium Screens (`md`)**: The direction changes to a row, and items are aligned to the start of the flex container.
- **Large Screens (`lg`)**: The spacing increases, and padding is applied to the Stack.

Inside the outer Stack, there are two inner Stack components:

1. The first inner Stack arranges three items in a row, wrapping them if necessary. Each item has a custom flex value that calculates its width based on the available space minus a small spacer.
2. The second inner Stack arranges two items in a column, adjusting alignment based on screen size.
