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

```tsx
import Button from './components/Button/Button';
```

## Usage

Here is a simple example of how to use the Button component:
import React from 'react';
import Button from './components/Button/Button';

```tsx
const App = () => {
  return (
    <div>
      <Button onClick={() => console.log('Button clicked!')}>Click Me</Button>
    </div>
  );
};

export default App;
```

## Props

The Button component accepts the following props:

- children: The content inside the button, typically text or icons.
- onClick: Function to call when the button is clicked.
- disabled: Boolean to enable or disable the button.
- Additional styling props like color, size, etc., to customize the appearance.

## Contributing

We welcome contributions to improve the Button component. Please adhere to this project's code of conduct and submit pull requests for any enhancements.

## License

This component is open source and available under the MIT License.
