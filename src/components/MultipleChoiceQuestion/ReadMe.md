# MultipleChoiceQuestionImage Component

The `MultipleChoiceQuestionImage` component is a versatile React component designed to render multiple choice questions with optional images. It supports various states and configurations to provide comprehensive feedback.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the question's appearance and behavior, such as type, checked state, and additional classes.
- **State Management**: Supports states like correct, incorrect, and answer shown for comprehensive feedback.
- **Image Support**: Supports optional images with captions.

## Installation

To use the `MultipleChoiceQuestionImage` component in your project, ensure you have React and TypeScript set up. Then, follow these steps:

1. Copy the `MultipleChoiceQuestionImage.tsx` file into your project's component directory.

```bash
npm install @connect/connect-design-system@latest
```

2. Import the MultipleChoiceQuestionImage component where you need it:

```tsx
import { MultipleChoiceQuestionImage } from '@connect/connect-design-system';
```

## Usage

Here's a basic example of how to use the MultipleChoiceQuestionImage component:

```tsx
import React from 'react';
import { MultipleChoiceQuestionImage } from '@connect/connect-design-system';

const ExampleImage = () => (
  <MultipleChoiceQuestionImage
    type="checkbox"
    id="example-question"
    name="example"
    checked={false}
    correct={false}
    incorrect={false}
    answerShown={false}
  >
    The mouse rides a bike
  </MultipleChoiceQuestionImage>
);

export default ExampleImage;
```

## Props

The MultipleChoiceQuestionImage component accepts the following props:

- type (**required**): Specifies the input type, either 'checkbox' or 'radio'.
- id (**required**): String for specifying the input's ID.
- name (**required**): String for specifying the input's name.
- children (**required**): ReactNode for specifying the label content using the `<Image />` component.
- checked: Optional. Boolean indicating whether the input is checked.
- disabled: Optional. Boolean indicating if the input should be disabled.
- correct: Optional. Boolean indicating whether the input is marked as correct.
- incorrect: Optional. Boolean indicating whether the input is marked as incorrect.
- answerShown: Optional. Boolean indicating whether the answer is shown.
- dataTestId: Optional. String for specifying a test ID for testing purposes.
- gradeBand: Optional. Enum for specifying the grade band.
- onChange: Optional. Function to handle change events.

## Contributing

Contributions to the MultipleChoiceQuestionImage component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
