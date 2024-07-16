# SelectBox Component

The SelectBox component is part of the Connect Design System, designed to provide a customizable and accessible dropdown selection interface for web applications. It supports various states such as correct, incorrect, answer shown, and disabled, making it versatile for different use cases, especially in forms and quizzes.

## Features

- **TypeScript Support**: Built with TypeScript, offering type safety and clear prop definitions.
- **Customizable**: Allows customization through props to fit your UI needs.
- **Accessibility**: Designed with accessibility in mind, including ARIA labels and keyboard navigation support.
- **State Handling**: Supports states like correct, incorrect, answer shown, and disabled for comprehensive form handling.

## Installation

Ensure you have Node.js and npm (or yarn) installed on your system. Then, you can install the Connect Design System, which includes the SelectBox component:

```bash
npm install @connect/connect-design-system
```

## Usage

Import the SelectBox component into your React project and use it as shown in the example below:

```tsx
import { SelectBox } from '@connect/connect-design-system';

const options = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  // Add more options here
];

<SelectBox
  data={options}
  defaultValue="option1"
  correct={false}
  incorrect={false}
  answerShown={false}
  disabled={false}
  dataTestId="select-box-example"
/>;
```

## Props

- `data` **required**: Array of objects representing the options with value and label properties.
- `defaultValue`: Optional. String indicating the default selected value.
- `correct`: Optional. Boolean indicating whether the selection is marked as correct.
- `incorrect`: Optional. Boolean indicating whether the selection is marked as incorrect.
- `answerShown`: Optional. Boolean indicating whether the answer is shown.
- `disabled`: Optional. Boolean indicating if the SelectBox should be disabled.
- `dataTestId`: Optional. String for specifying a test ID for testing purposes.

## Contributing

Contributions to the SelectBox component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.

## License

This component is open source and available under the MIT License.
