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

The Stack component in src/components/Stack/Stack.tsx is designed to layout its children in a flexible and responsive manner. Here's a detailed description of its props:

- `children` **rquired**: The content to be displayed within the Stack. This is a required prop and can be any valid React node.
- `xs, sm, md, lg, xl`: These props are used to specify the layout behavior at different screen sizes (breakpoints). Each of these props can accept an object of type BreakpointValues, which can define several properties to control the layout, such as direction, spacing, alignItems, justifyContent, flexWrap, paddingX, and paddingY.
- `className`: An optional string that allows you to apply custom CSS classes to the Stack component.
- `dataTestId`: An optional string used for testing purposes. It allows you to assign a data-testid attribute to the component, which can be targeted in tests.

The BreakpointValues type allows for fine-grained control over the stack's layout at different screen sizes. It includes properties like direction for setting the flex direction, spacing for setting the gap between items, and alignment and justification properties for controlling how items are aligned and distributed along the main and cross axes.

## Example

Here's an example of how to use the Stack component with various props for responsive design:

```tsx
import React from 'react';
import Stack from './components/Stack/Stack';

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
