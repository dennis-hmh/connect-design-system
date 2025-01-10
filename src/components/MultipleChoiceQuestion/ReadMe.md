# MultipleChoiceQuestion Component

The `MultipleChoiceQuestion` component is a versatile React component designed to render multiple choice questions with various states and configurations. The `MultipleChoiceQuestionImage` component is a specialized version of the `MultipleChoiceQuestion` component designed to render multiple choice questions with optional images.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the question's appearance and behavior, such as type, checked state, and additional classes.
- **State Management**: Supports states like correct, incorrect, and answer shown for comprehensive feedback.
- **Context Integration**: Uses `MultipleChoiceQuestionContext` to manage the state of radio buttons, ensuring only one can be selected at a time.
- **Image Support**: The `MultipleChoiceQuestionImage` component supports optional images with captions.

## Installation

To use the `MultipleChoiceQuestion` component in your project, ensure you have React and TypeScript set up. Then, follow these steps:

1. Copy the `MultipleChoiceQuestion.tsx` file into your project's component directory.

```bash
npm install @connect/connect-design-system@latest
```

2. Import the MultipleChoiceQuestion component where you need it:

```bash
import { MultipleChoiceQuestion } from '@connect/connect-design-system';
```

or

```bash
import { MultipleChoiceQuestionImage } from '@connect/connect-design-system';
```

## Usage

Here's a basic example of how to use the MultipleChoiceQuestion component:

```jsx
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
    imageSrc="path/to/image.jpg"
    imageAlt="Example Image"
    imageCaption="This is an example image"
  >
    The mouse rides a bike
  </MultipleChoiceQuestionImage>
);

export default ExampleImage;
```

## Using MultipleChoiceQuestionProvider

To manage the state of radio buttons within a group, you need to wrap the MultipleChoiceQuestion components with the MultipleChoiceQuestionProvider. This ensures that only one radio button can be selected at a time within the group.

Here's an example of how to use the MultipleChoiceQuestionProvider:

```jsx
import React from 'react';
import { MultipleChoiceQuestion } from '@connect/connect-design-system';
import { MultipleChoiceQuestionProvider } from '@connect/connect-design-system';

const ExampleWithProvider = () => (
  <MultipleChoiceQuestionProvider>
    <MultipleChoiceQuestion type="radio" id="option1" name="group1">
      Option 1
    </MultipleChoiceQuestion>
    <MultipleChoiceQuestion type="radio" id="option2" name="group1">
      Option 2
    </MultipleChoiceQuestion>
    <MultipleChoiceQuestion type="radio" id="option3" name="group1">
      Option 3
    </MultipleChoiceQuestion>
  </MultipleChoiceQuestionProvider>
);

export default ExampleWithProvider;
```

## Props

The MultipleChoiceQuestion component accepts the following props:

- type (**required**): Specifies the input type, either 'checkbox' or - 'radio'.
- id (**required**): String for specifying the input's ID.
- name (**required**): String for specifying the input's name.
- children (**required**): ReactNode for specifying the label content.
- checked: Optional. Boolean indicating whether the input is - checked.
- disabled: Optional. Boolean indicating if the input should be - disabled.
- correct: Optional. Boolean indicating whether the input is marked - as correct.
- incorrect: Optional. Boolean indicating whether the input is - marked as incorrect.
- answerShown: Optional. Boolean indicating whether the answer is - shown.
- dataTestId: Optional. String for specifying a test ID for testing - purposes.
- gradeBand: Optional. Enum for specifying the grade band.
- onChange: Optional. Function to handle change events.

The MultipleChoiceQuestionImage component accepts additional props for image handling:

- imageSrc: Optional. String for specifying the source of the image.
- imageAlt: Optional. String for specifying the alternative text for the image.
- imageCaption: Optional. String for specifying the caption of the image.

## Example

Here is an example of how to use the MultipleChoiceQuestion component:

```jsx
import React from 'react';
import { MultipleChoiceQuestion } from '@connect/connect-design-system';

const Example = () => (
  <MultipleChoiceQuestion
    type="checkbox"
    id="example-question"
    name="example"
    checked={false}
    disabled={false}
    correct={false}
    incorrect={false}
    answerShown={false}
  >
    The mouse rides a bike
  </MultipleChoiceQuestion>
);

export default Example;
```

And for the MultipleChoiceQuestionImage component:

```jsx
import React from 'react';
import { MultipleChoiceQuestionImage } from '@connect/connect-design-system';

const ExampleImage = () => (
  <MultipleChoiceQuestionImage
    type="checkbox"
    id="example-question"
    name="example"
    checked={false}
    disabled={false}
    correct={false}
    incorrect={false}
    answerShown={false}
    imageSrc="path/to/image.jpg"
    imageAlt="Example Image"
    imageCaption="This is an example image"
  >
    The mouse rides a bike
  </MultipleChoiceQuestionImage>
);

export default ExampleImage;
```

### Differences between MultipleChoiceQuestion and MultipleChoiceQuestionImage

The MultipleChoiceQuestionImage component extends the MultipleChoiceQuestion component by adding support for images. The image prop defaults to true in MultipleChoiceQuestionImage or can be set to true in the MultipleChoiceQuestion component. Additional props for image handling include imageSrc, imageAlt, and imageCaption.

## Contributing

Contributions to the MultipleChoiceQuestion component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
