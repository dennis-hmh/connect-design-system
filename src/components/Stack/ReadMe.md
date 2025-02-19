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
  spacing="md"
  paddingX="lg"
  paddingY="xs"
  md={{ paddingY: "lg" }}
  lg={{ paddingY: "xs" }}
  xl={{ paddingY: "xl" }}
>
  <Stack
    xl={{
      flexWrap: "nowrap"
    }}
    alignItems="start"
    direction="row"
    flexWrap="wrap"
    spacing="lg"
  >
    <Stack>  </Stack>
  </Stack>

  <Stack direction="row" flexWrap="wrap" spacing="xs" alignItems="start">
    <Stack
      xs={{ paddingY: "xl" }}
      flex="fill"
      direction="row"
      spacing="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" spacing="md" alignItems="center"></Stack>
    </Stack>
  </Stack>

  <Stack spacing="xs" alignItems="center" paddingY="md"></Stack>
</Stack>
  );
}

export default Example;
```

In this example, the `Stack` component demonstrates its flexible layout capabilities:

1. The outer Stack shows responsive padding:
   - Base: medium spacing, large horizontal padding, extra-small vertical padding
   - Medium screens: changes to large vertical padding
   - Large screens: changes to extra-small vertical padding
   - Extra-large screens: changes to extra-large vertical padding

2. First nested Stack shows:
   - Row direction with wrap enabled
   - Start alignment
   - Large spacing between items
   - Responsive behavior at xl breakpoint (nowrap)

3. Second nested Stack demonstrates:
   - Row direction with wrap
   - Start alignment
   - Extra-small spacing
   - Contains a child Stack that:
     - Fills available space (flex="fill")
     - Uses row direction
     - Has medium spacing
     - Centers items vertically
     - Distributes items with space-between
     - Extra-large vertical padding at xs breakpoint

4. Final Stack shows:
   - Extra-small spacing
   - Centered alignment
   - Medium vertical padding

The Stack component supports:
- Responsive breakpoints (xs, sm, md, lg, xl)
- Flexible layout properties (direction, spacing, alignment, justification)
- Padding controls (paddingX, paddingY)
- Flex behavior customization
- Custom styling and element types

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
      alignItems="center"
      justifyContent="center"
      md={{ direction: 'row', spacing: 'md', alignItems: 'flex-start' }}
      lg={{ spacing: 'xl', paddingX: 'lg', paddingY: 'md' }}
    >
      <Stack
        direction="row"
        spacing="sm"
        flexWrap="wrap"
        justifyContent="space-around"
        md={{ justifyContent: 'space-between' }}
      >
        <Stack element="div" lg={{ flex: 'fill' }}>
          Item 1
        </Stack>
        <Stack element="div" lg={{ flex: 'fill' }}>
          Item 2
        </Stack>
        <Stack element="div" lg={{ flex: 'fill' }}>
          Item 3
        </Stack>
      </Stack>
      <Stack
        direction="column"
        spacing="md"
        alignItems="center"
        md={{ alignItems: 'flex-start' }}
      >
        <Stack element="div">Item 4</Stack>
        <Stack element="div">Item 5</Stack>
      </Stack>
    </Stack>
  );
}

export default ComplexExample;
```

### Explanation of the Complex Example

In this example, the outer `Stack` component demonstrates responsive layout with base styles and breakpoint adjustments:

Base Configuration:
- Column direction layout
- Large spacing between items
- Centered alignment (both `alignItems` and `justifyContent` set to "center")

Responsive Breakpoints:
- **Medium Screens (`md`)**: 
  - Transforms into row layout
  - Reduces spacing to medium
  - Aligns items to flex-start
  
- **Large Screens (`lg`)**: 
  - Increases spacing to extra-large
  - Adds large horizontal padding
  - Adds medium vertical padding

Inside the outer Stack are two main sections:

1. **First Inner Stack**: 
   - Base configuration:
     - Row direction
     - Small spacing
     - Wrap enabled
     - Space-around justification
   - Medium screens (`md`):
     - Changes justification to space-between
   - Contains three Stack items that:
     - Use div elements
     - Expand to fill available space on large screens with `flex: 'fill'`

2. **Second Inner Stack**: 
   - Base configuration:
     - Column direction
     - Medium spacing
     - Center alignment
   - Medium screens (`md`):
     - Changes alignment to flex-start
   - Contains two simple Stack elements rendered as divs

This complex example showcases:
- Direct props for base styles instead of xs breakpoint objects
- Responsive layout changes through breakpoints
- Nested Stack components for complex layouts
- Flexible item sizing using the 'fill' preset
- Consistent spacing and alignment patterns