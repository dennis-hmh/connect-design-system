# FigCaption Component

The `FigCaption` component is a versatile UI element used to display captions for figures. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the caption's appearance and behavior, such as caption text, citation, and grade band.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `FigCaption` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `FigCaption.tsx` file into your project's component directory.
3. Import the `FigCaption` component where you need it:

```bash
npm install @connect/connect-design-system@latest
```

```tsx
import { FigCaption } from '@connect/connect-design-system@1.9.0';
```

## Usage

Here's a basic example of how to use the FigCaption component in the Figure component:

```tsx
import React from 'react';
import { Figure } from '@connect/connect-design-system@latest';
import { Image } from '@connect/connect-design-system@latest';

function App() {
  return (
    <Figure
      children={<Image imageSrc="../../images/zelda.jpg" altText="This is alt text for Zelda" />}
      imageCaption="This is an image caption for Zelda"
      cite="This is a Zelda citation"
    />
  );
}
export default App;
```

## Props

The FigCaption component accepts the following props:

- caption (string, optional): The caption text for the figure.
- cite (string, optional): The citation text for the figure.
