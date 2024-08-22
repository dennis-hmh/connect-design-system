# Image Component

The `Image` component is a versatile UI element used to display images with optional alternative text. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the image's appearance and behavior, such as alternative text and image source.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Image` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Image.tsx` file into your project's component directory.
3. Import the `Image` component where you need it:

```bash
npm install @connect/connect-design-system@1.9.0
```

```tsx
import { Image } from '@connect/connect-design-system@1.9.0';
```

## Usage

Here's a basic example of how to use the Image component:

```tsx
import React from 'react';
import { Image } from '@connect/connect-design-system@1.9.0';

function App() {
  return <Image imageSrc="path/to/image.jpg" altText="This is Alt Text" dataTestId="image-1" />;
}
export default App;
```

## Props

The Image component accepts the following props:

- imageSrc (string, **required**): The source URL of the image.
- altText (string, **required**): The alternative text for the image.
- dataTestId (string, optional): A test ID for the image, useful for testing purposes.
