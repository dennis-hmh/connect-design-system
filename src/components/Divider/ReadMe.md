# Divider Component

The `Divider` component is a simple yet versatile UI element used to create visual separation between content sections. It is implemented in TypeScript with React, making it a robust choice for projects utilizing these technologies.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides props to customize the divider's orientation.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Divider` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Divider.tsx` file into your project's component directory.
3. Import the `Divider` component where you need it:

```bash
npm install @connect/connect-design-system@latest

import { Divider } from '@connect/connect-design-system@latest';
```

## Usage

Here's a basic example of how to use the Divider component:

```tsx
import React from 'react';
import { Divider } from '@connect/connect-design-system@latest';

function App() {
  return (
    <div>
      <p>Content above the divider</p>
      <Divider orientation="horizontal" />
      <p>Content below the divider</p>
    </div>
  );
}

export default App;
```

## Props

The Divider component accepts the following props:

- `orientation`: 'horizontal' | 'vertical' Optional, defaults to 'horizontal' - Defines the orientation of the divider. Default is 'horizontal'.
- `dataTestId`: string - Optional. Provides a test ID for the divider.
- `gradeBand`: GradeBand - Optional. Specifies the grade band for the divider ~ only used in story.
