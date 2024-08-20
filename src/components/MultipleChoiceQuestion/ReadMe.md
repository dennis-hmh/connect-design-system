# MultipleChoiceQuestion Component

The `MultipleChoiceQuestion` component is a versatile React component designed to render multiple choice questions with various states and configurations. The `MultipleChoiceQuestionImage` component is a specialized version of the `MultipleChoiceQuestion` component designed to render multiple choice questions with optional images.

## Installation

To use the `MultipleChoiceQuestion` component in your project, ensure you have React and TypeScript set up. Then, follow these steps:

1. Copy the `MultipleChoiceQuestion.tsx` file into your project's component directory.

```bash
npm install @connect/connect-design-system@1.10.0
```

2. Import the InputBox component where you need it:

```tsx
import { MultipleChoiceQuestion } from '@connect/connect-design-system';
```

or

```tsx
import { MultipleChoiceQuestionImage } from '@connect/connect-design-system';
```

## Props

The MultipleChoiceQuestion component accepts the following props:

- `type` (**required**): Specifies the input type, either 'checkbox' or 'radio'.
- `image`: Optional. Boolean indicating whether to display an image.
- `id` (**required**): String for specifying the input's ID.
- `name` (**required**): String for specifying the input's name.
- `children` (**required**): ReactNode for specifying the label content.
- `checked`: Optional. Boolean indicating whether the input is checked.
- `disabled`: Optional. Boolean indicating if the input should be disabled.
- `correct`: Optional. Boolean indicating whether the input is marked as correct.
- `incorrect`: Optional. Boolean indicating whether the input is marked as incorrect.
- `answerShown`: Optional. Boolean indicating whether the answer is shown.
- `imageSrc`: Optional. String for specifying the source of the image.
- `imageCaption`: Optional. String for specifying the caption of the image.
- `dataTestId`: Optional. String for specifying a test ID for testing purposes.

## Example

Here is an example of how to use the MultipleChoiceQuestion component:

```tsx
import React from 'react';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

const Example = () => (
  <MultipleChoiceQuestion
    type="checkbox"
    image={false}
    id="example-question"
    name="example"
    children="The mouse rides a bike"
    checked={false}
    disabled={false}
    correct={false}
    incorrect={false}
    answerShown={false}
  />
);

export default Example;
```

and

```tsx
import React from 'react';
import { MultipleChoiceQuestionImage } from './MultipleChoiceQuestionImage';

const ExampleImage = () => (
  <MultipleChoiceQuestionImage
    type="checkbox"
    image={true}
    id="example-question"
    name="example"
    children="The mouse rides a bike"
    checked={false}
    disabled={false}
    correct={false}
    incorrect={false}
    answerShown={false}
    imageSrc="path/to/image.jpg"
    imageAlt="Example Image"
    imageCaption="This is an example image"
  />
);

export default ExampleImage;
```

## Differences from MultipleChoiceQuestion and MultipleChoiceQuestionImage

The image prop defaults to `true` in `MultipleChoiceQuestionImage` or can be set to `true` in the `MulMultipleChoiceQuestion` component.
Additional props for image handling: `imageSrc`, `imageAlt`, and `imageCaption`.
