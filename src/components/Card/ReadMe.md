# Description

The Card component from the @connect/connect-design-system library is designed to display content related to a single subject. It can be used to show a combination of text, links, images, and actions. The component is highly customizable through props.

## Features

- **TypeScript Support**: Leverages TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Offers various props to customize the component's appearance.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Card` component in your project, you need to install the `@connect/connect-design-system` package if you haven't already:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Peer Dependencies

Make sure to have React and TypeScript installed in your project, as they are peer dependencies of this library.

## Usage

Here is an example of how to use the Card component in your project:

```tsx
import React from 'react';
import { Card } from '@connect/connect-design-system';
const Example = () => (
  <Card
    image={true}
    imageSrc="path/to/image.jpg"
    imageAlt="Description of image"
    imageCaption="Image caption"
    headerElement="h2"
    headerContent="Card Header"
    mainContent={<p>This is the main content of the card.</p>}
    footerContent={<p>Footer content here.</p>}
  />
);
export default Example;
```

## Props

The Card component accepts the following props:

- `image` (boolean): Determines whether an image should be displayed in the card.
- `imageSrc` (string, optional): The source URL of the image to be displayed. Required if `image` is `true`.
- `imageAlt` (string, optional): The alt text for the image. Required if `image` is `true`.
- `imageCaption` (string, optional): The caption for the image. Optional.
- `headerElement` (keyof React.ReactHTML, optional): The HTML element to be used for the card header (e.g., 'h1', 'h2'). Defaults to 'div' if not provided.
- `headerContent` (React.ReactNode, optional): The content to be displayed in the card header. Optional.
- `mainContent` (React.ReactNode): The main content to be displayed in the card. This is a required prop.
- `footerContent` (React.ReactNode, optional): The content to be displayed in the card footer. Optional.
- `dataTestId` (string, optional): A test ID for the card, useful for testing purposes. Optional.
