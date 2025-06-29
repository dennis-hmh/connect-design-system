# ButtonSplit Component

The `ButtonSplit` component is a versatile UI element that combines a button with a dropdown list, allowing users to perform actions or select from multiple options. This component is built with React and TypeScript, ensuring type safety and a smooth integration into React projects.

## Features

- **Customizable Options**: Easily pass a list of options with labels and values to the dropdown.
- **Optional Icon Support**: Can include an icon inside the button for visual enhancement.
- **Accessibility**: Supports `ariaLabel` for better accessibility.
- **State Management**: Internal state management for opening and closing the dropdown.

## Installation

To use the `ButtonSplit` component in your project, follow these steps:

1. Ensure your project is set up with React and TypeScript.
2. Copy the `ButtonSplit.tsx` file into your project's component directory.
3. Import the `ButtonSplit` component where you need it:

```bash
npm install @connect/connect-design-system@1.8.3
```

```tsx
import { ButtonSplit } from '@connect/connect-design-system@1.8.3';
```

Usage
Here's a basic example of how to use the ButtonSplit component in your application:

```tsx
import React from 'react';
import { ButtonSplit } from '@connect/connect-design-system@1.8.3';

function App() {
  return (
    <ButtonSplit
      children={'My Split Button'}
      data={[
        { label: 'My First Label', value: 'my-first-value' },
        { label: 'My Second Label', value: 'my-second-value' },
        { label: 'My Third Label', value: 'my-third-value' },
      ]}
    />
  );
}
```

## Props

The ButtonSplit component accepts the following props:

- children: The content inside the button part of the component.
- data: An array of objects, each with a label (for display) and value (for identification).
- disabled: (Optional) If true, disables the button and dropdown functionality.
- iconId: (Optional) The ID of the icon to display inside the button.
- iconSize: (Optional) The size of the icon, with options like 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'.
- fill: (Optional) The fill color of the icon.
- ariaLabel: (Optional) Accessibility label for the button.
- dataTestId: (Optional) Test ID for the component, useful in testing environments.

## Contributing

Contributions to the ButtonSplit component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.

## License

This component is open source and available under the MIT License. ```
