# Button Component

The `Button` component is a customizable and reusable UI element designed for React applications. It is written in TypeScript, offering type safety and enhancing the development experience by providing clear prop definitions.

## Features

- **TypeScript Support**: Leverages TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Offers various props to customize the button's appearance, such as color, size, and disabled state.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To incorporate the `Button` component into your project, follow these instructions:

1. Ensure your project is set up with React and TypeScript.
2. Place the `Button.tsx` file into your project's component directory.
3. Import the `Button` component in the file where you want to use it:

```bash
npm install @connect/connect-design-system@1.9.0
```

```tsx
import Button from '@connect/connect-design-system@1.9.0';
```

## Usage

Here is a simple example of how to use the Button component:

```tsx
import React from 'react';
import { Button } from '@connect/connect-design-system@1.9.0';

function App() {
  return (
    <Button primary clickHandler={() => console.log('Button clicked')} ariaLabel="Example Button">
      {(children = 'Example')}
    </Button>
  );
}
```

## Props

The Button component accepts the following props:

- `children` **required**: ReactNode - Flexibility to be string, number, JSX element, array, null or undefined.
- `primary` **required**: Boolean - If true, the button is styled as a primary button.
- `disabled`: Boolean - Optional. If true, the button is disabled.
- `correct`: Boolean - Optional. If true, styles the button to indicate correctness.
- `incorrect`: Boolean - Optional. If true, styles the button to indicate incorrectness.
- `submit`: 'button' | 'submit' - Defines the button type.
- `clickHandler`: Function - Optional. A function to handle click events.
- `iconId`: IconId - Optional. Specifies an icon to be included in the button.
- `iconSize`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' - Optional. Defines the size of the icon.
- `fill`: Color - Optional. Defines the fill color of the icon.
- `iconPosition`: 'before' | 'after' - Optional. Positions the icon relative to the button text.
- `ariaLabel`: String - Optional. Provides an accessible label for the button.
- `dataTestId`: String - Optional. Provides a test ID for the button.

## Contributing

We welcome contributions to improve the Button component. Please adhere to this project's code of conduct and submit pull requests for any enhancements.

## License

This component is open source and available under the MIT License.
