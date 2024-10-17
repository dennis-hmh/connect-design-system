# Pill Component

The `Pill` component is a versatile UI element designed to display small pieces of information, such as tags or labels, in a visually appealing way. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the pill's appearance, such as color and additional classes.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Pill` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Pill.tsx` file into your project's component directory.
3. Import the `Pill` component where you need it:

```bash
npm install @connect/connect-design-system@latest

import { Pill } from '@connect/connect-design-system@latest';
```

## Usage

Here's a basic example of how to use the Pill component:

```tsx
import React from 'react';
import { Pill } from '@connect/connect-design-system@latest';

function App() {
  return (
    <div>
      <Pill backgroundColor="primary" dataTestId="pill-example" gradeBand="G4_5">
        Example Pill
      </Pill>
    </div>
  );
}

export default App;
```

## Props

The Pill component accepts the following props:

- `children` required: React.ReactNode - The content inside the pill, which can be a string, number, JSX element, array, null, or undefined.
- `backgroundColor` required: Color - Defines the background color of the pill.
- `dataTestId`: string - Optional. Provides a test ID for the pill.
- `gradeBand`: GradeBand - Optional. Specifies the grade band for the pill - only used in story.

## Customization

The Pill component supports various CSS variables for customization. Here are some of the key variables:

- `--theme__pill-bg`: Custom background color for the pill.
- `--theme__pill-color`: Custom text color for the pill.
- `--theme__pill-py`: Custom vertical padding for the pill.
- `--theme__pill-pl`: Custom left padding for the pill.
- `--theme__pill-pr`: Custom right padding for the pill.
- `--theme__connect-pill-fs`: Custom font size for the pill text.
- `--theme__connect-pill-lh`: Custom line height for the pill text.
- `--theme__connect-pill-fw`: Custom font weight for the pill text.
- `--theme__connect-pill-ff`: Custom font family for the pill text.
