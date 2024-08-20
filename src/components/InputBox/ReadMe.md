# InputBox Component

The `InputBox` component is a versatile and customizable input field designed for React applications. It supports various input types such as checkbox and radio, and includes states like correct, incorrect, and answer shown, making it suitable for quizzes, forms, and any scenario where user input validation is required. Written in TypeScript, it offers type safety and clear prop definitions, enhancing the development experience.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **State Indicators**: Supports visual indicators for correct, incorrect, and answer shown states, providing immediate feedback to the user.
- **Customizable**: Allows customization through props such as `type`, `checked`, and `disabled` to tailor the input field to your needs.
- **Accessibility**: Includes `aria-label` attributes for better accessibility, ensuring that the component is usable by everyone.

## Installation

To use the `InputBox` component in your project, ensure you have React and TypeScript set up. Then, follow these steps:

1. Copy the `InputBox.tsx` file into your project's component directory.

```bash
npm install @connect/connect-design-system@1.10.0
```

2. Import the InputBox component where you need it:

```tsx
import { InputBox } from '@connect/connect-design-system';
```

## Usage

Here's an example of how to use the InputBox component:

```tsx
import React from 'react';
import { InputBox } from '@connect/connect-design-system';

function App() {
  return (
    <InputBox
      type="checkbox"
      id="example"
      name="example"
      children={'The mouse rides a bike'}
      checked={false}
      correct={false}
      incorrect={false}
      answerShown={false}
      disabled={false}
      dataTestId="input-box-example"
    />
  );
}
```

## Props

The InputBox component accepts the following props:

- `type`(**required**): Specifies the input type, either 'checkbox' or 'radio'.
- `id`(**required**): String for specifying the input's ID.
- `name`(**required**): String for specifying the input's name.
- `children`(**required**): ReactNode for specifying the label content.
- `checked`: Optional. Boolean indicating whether the input is checked.
- `disabled`: Optional. Boolean indicating if the input should be disabled.
- `correct`: Optional. Boolean indicating whether the input is marked as correct.
- `incorrect`: Optional. Boolean indicating whether the input is marked as incorrect.
- `answerShown`: Optional. Boolean indicating whether the answer is shown.
- `dataTestId`: Optional. String for specifying a test ID for testing purposes.
- `gradeBand`: Optional. Enum for specifying the grade band.

## Contributing

Contributions to the InputBox component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.

## License

This component is open source and available under the MIT License.
