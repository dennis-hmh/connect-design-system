# Figure Component

The `Figure` component is a versatile UI element used to display images with optional captions. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the figure's appearance and behavior, such as alternative text, image source, and caption.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Figure` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Figure.tsx` file into your project's component directory.
3. Import the `Figure` component where you need it:

```bash
npm install @connect/connect-design-system@1.9.0
```

```tsx
import Figure from '@connect/connect-design-system@1.9.0';
```

## Usage

Here's a basic example of how to use the Figure component:

```tsx
import React from 'react';
import { Figure } from '@connect/connect-design-system@1.9.0';

function App() {
  return (
    <Figure
      altText="This is Alt Text"
      imageSrc="path/to/image.jpg"
      imageCaption="This is an image caption"
      dataTestId="figure-1"
    />
  );
}
export default App;
```

## Props

The Figure component accepts the following props:

- altText (string, **required**): The alternative text for the image.
- imageSrc (string, **required**): The source URL of the image.
- imageCaption (string, optional): The caption text for the image.
- dataTestId (string, optio
