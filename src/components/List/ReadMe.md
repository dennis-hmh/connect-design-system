# List Component

The `List` component is a versatile UI element designed to display a list of items in a structured and customizable manner. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the list's appearance and behavior, such as item content, orientation, and additional classes.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `List` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `List.tsx` file into your project's component directory.
3. Import the `List` component where you need it:

```bash
npm install @connect/connect-design-system@latest

import { List } from '@connect/connect-design-system@latest';
```

## Usage

Here's a basic example of how to use the List component:

```tsx
import React from 'react';
import { List } from '@connect/connect-design-system@latest';

function App() {
  const items = [
    { content: 'List item this' },
    { content: 'List item that' },
    { content: 'List item other' },
  ];

  return (
    <div>
      <h1>My List</h1>
      <List data={items} listType="unordered" variants="circle" />
    </div>
  );
}

export default App;
```

## Props

The `List` component accepts the following props:

- `data` **required**: { content: React.ReactNode }[] - An array of objects representing the list items, each with a content property that can be a string, number, JSX element, array, null, or undefined.
- `listType`: 'ordered' | 'unordered' - Optional. Defines the type of the list. Default is 'unordered'.
- `variants`: 'none' | 'circle' | 'disc' | 'square' | 'alpha' | 'decimal' | 'roman' - Optional. Defines the style variant of the list items. Default is 'none'.
- `className`: string - Optional. Additional class names to apply to the list.
- `dataTestId`: string - Optional. Provides a test ID for the list.
- `gradeBand`: GradeBand - Optional. Specifies the grade band for the list ~ only used in story.
