# ButtonMenu Component

The `ButtonMenu` component is a versatile and customizable button designed for React applications. It integrates seamlessly with the `ButtonMenuContext` to manage the state of clicked buttons, providing a consistent and interactive user experience.

## Features

- **TypeScript Support**: Leverages TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Offers various props to customize the button's appearance, such as icon, size, and additional classes.
- **Context Integration**: Uses `ButtonMenuContext` to manage the state of clicked buttons, allowing for dynamic styling and behavior.

## Installation

To incorporate the `ButtonMenu` component into your project, follow these instructions:

1. Ensure your project is set up with React and TypeScript.
2. Place the `ButtonMenu.tsx` file into your project's component directory.
3. Import the `ButtonMenu` component in the file where you want to use it:

```bash
npm install @connect/connect-design-system@latest

import { ButtonMenu } from '@connect/connect-design-system@latest';
```

## Usage

Here is a simple example of how to use the ButtonMenu component:

```tsx
import React from 'react';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';
import { ButtonMenu } from '@connect/connect-design-system@latest';

function App() {
  return (
    <ButtonMenuProvider>
      <ButtonMenu
        id="example-button-menu"
        iconId="add"
        iconSize="md"
        additionalClass="custom-class"
        clickedClass="clicked-class"
        ariaLabel="Example Button Menu"
        clickHandler={() => console.log('ButtonMenu clicked')}
      ></ButtonMenu>
    </ButtonMenuProvider>
  );
}

export default App;
```

## Props

The ButtonMenu component accepts the following props:

- `id` **required**: string - The unique identifier for the button.
- `children` **required**: React.ReactNode - The content inside the button, which can be a string, number, JSX element, array, null, or undefined.
- `title`: string - Optional. The title attribute for the button.
- `clickHandler`: () => void - Optional. A function to handle click events.
- `iconId`: IconId - Optional. Specifies an icon to be included in the button.
- `iconSize`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' - Optional. Defines the size of the icon.
- `fill`: Color - Optional. Defines the fill color of the icon.
- `iconPosition`: 'before' | 'after' - Optional. Positions the icon relative to the button text.
- `ariaLabel`: string - Optional. Provides an accessible label for the button.
- `dataTestId`: string - Optional. Provides a test ID for the button.
- `additionalClass`: string - Optional. Additional class names to apply to the button.
- `clickedClass`: string - Optional. Class name to apply when the button is clicked.
- `gradeBand`: GradeBand - Optional. Specifies the grade band for the button ~ only used in story.
