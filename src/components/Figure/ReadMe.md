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

The Figure component accepts the following props:

- `children` (React.ReactNode, optional): The content to be displayed inside the figure, typically an image or other media.
- `imageCaption` (string, optional): The caption text for the image.
- `cite` (string, optional): The citation text for the figure.
- `dataTestId` (string, optional): A test ID for the figure, useful for testing purposes.
- `gradeBand` (GradeBand, optional): The grade band for the figure, used for theming purposes.
