# InputText Component

The `InputText` component is a versatile and customizable input field designed for React applications. It supports various states such as correct, incorrect, and answer shown, making it suitable for quizzes, forms, and any scenario where user input validation is required. Written in TypeScript, it offers type safety and clear prop definitions, enhancing the development experience.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **State Indicators**: Supports visual indicators for correct, incorrect, and answer shown states, providing immediate feedback to the user.
- **Customizable**: Allows customization through props such as `number` for numeric input and `disabled` to disable the input field.
- **Accessibility**: Includes `aria-label` attributes for better accessibility, ensuring that the component is usable by everyone.

## Installation

To use the `InputText` component in your project, ensure you have React and TypeScript set up. Then, follow these steps:

1. Copy the `InputText.tsx` file into your project's component directory.

```bash
npm install @connect/connect-design-system@latest
```

2. Import the `InputText` component where you need it:

```tsx
import { InputText } from '@connect/connect-design-system';
```

## Usage

Here's an example of how to use the InputText component:

```tsx
import React from 'react';
import { InputText } from '@connect/connect-design-system';

function App() {
  return (
    <InputText
      correct={false}
      incorrect={false}
      answerShown={false}
      number={false}
      disabled={false}
      defaultText="Enter your text here"
      dataTestId=""
    />
  );
}
```

## Props

The InputText component accepts the following props:

- `correct`: Optional. Boolean indicating whether the input is marked as correct.
- `incorrect`: Optional. Boolean indicating whether the input is marked as incorrect.
- `answerShown`: Optional. Boolean indicating whether the answer is shown.
- `number`: Optional. Boolean indicating if the input should accept only numeric values.
- `disabled`: Optional. Boolean indicating if the input should be disabled.
- `defaultText`: Optional. String or number for specifying a default value for the input field.
- `characterCount`: Optional. Boolean indicating whether to show a character count.
- `characterLimit`: Optional. Number specifying the character limit for the input field.
- `placeholderText`: Optional. String for specifying the placeholder text for the input field.
- `onClear`: Optional. Function to handle the clear action for the input field.
- `dataTestId`: Optional. String for specifying a test ID for testing purposes.
- `gradeBand`: Optional. Enum for specifying the grade band.

## Contributing

Contributions to the InputText component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
