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
npm install @connect/connect-design-system@latest
```

```tsx
import Button from '@connect/connect-design-system@latest';
```

## Usage

Here is a simple example of how to use the Button component:

```tsx
import React from 'react';
import { Button } from '@connect/connect-design-system@latest';

function App() {
  return (
    <Button
      children={'Example Button'}
      primary={true}
      title={'Example Button'}
      disabled={false}
      correct={true}
      incorrect={false}
      submit={'button'}
      clickHandler={() => console.log('Button clicked')}
      ariaLabel={'Example Button'}
      dataTestId={'example-button'}
    />
  );
}
```

## Props

The Button component accepts the following props:

- `children` **required**: React.ReactNode - The content inside the button, which can be a string, number, JSX element, array, null, or undefined.
- `primary` **required**: boolean - If true, the button is styled as a primary button.
- `title`: string - Optional. The title attribute for the button.
- `disabled`: boolean - Optional. If true, the button is disabled.
- `correct`: boolean - Optional. If true, styles the button to indicate correctness.
- `incorrect`: boolean - Optional. If true, styles the button to indicate incorrectness.
- `submit`: 'button' | 'submit' - Defines the button type.
- `clickHandler`: () => void - Optional. A function to handle click events.
- `iconId`: IconId - Optional. Specifies an icon to be included in the button.
- `iconSize`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' - Optional. Defines the size of the icon.
- `fill`: Color - Optional. Defines the fill color of the icon.
- `iconPosition`: 'before' | 'after' - Optional. Positions the icon relative to the button text.
- `iconOpacity`: React.CSSProperties['opacity'] - Optional. Defines the opacity of the icon.
- `ariaLabel`: string - Optional. Provides an accessible label for the button.
- `dataTestId`: string - Optional. Provides a test ID for the button.
- `additionalClass`: string - Optional. Additional class names to apply to the button.
- `gradeBand`: GradeBand - Optional. Specifies the grade band for the button - only used in story.

## Contributing

We welcome contributions to improve the Button component. Please adhere to this project's code of conduct and submit pull requests for any enhancements.

## License

This component is open source and available under the MIT License.
