# CharacterCounter Component

The `CharacterCounter` component is a simple and customizable UI element designed to display the current character count and the character limit. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.

## Installation

Before you can use the `CharacterCounter` component, ensure you have the Connect Design System installed in your project:

```bash
npm install @connect/connect-design-system@latest
```

## Usage

To use the CharacterCounter component in your project, first import it:

```tsx
import React from 'react';
import { CharacterCounter } from '@connect/connect-design-system';

const Example = () => {
  return <CharacterCounter charCount={50} charLimit={100} />;
};

export default Example;
```

## Props

The CharacterCounter component accepts the following props:

- **charCount** (number, required): The current character count.
- **charLimit** (number, required): The character limit.
- gradeBand (GradeBand, optional): Specifies the grade band for the character counter, on used in Storybook stories

## Example

Here's a simple example of using the CharacterCounter component in a Textarea component:

```tsx
import React, { useState } from 'react';
import { Textarea } from './components/Textarea/Textarea';
import { ConnectTheme } from './components/ConnectTheme/ConnectTheme';
import { GradeBand } from './enum/gradeband';

const App: React.FC = () => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5}>
      <Textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        charLimit={100}
        placeholderText="Type here..."
      />
    </ConnectTheme>
  );
};

export default App;
```

## Contributing

Contributions to the CharacterCounter component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
