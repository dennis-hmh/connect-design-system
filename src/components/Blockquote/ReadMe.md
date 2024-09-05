# Blockquote Component

The `Blockquote`component is part of the Connect Design System, a library of reusable UI components built with React for HMH projects. It is used to display a block of quoted text, typically rendered with indentation to distinguish it from the surrounding content.

## Features

- **Customizable Content**: Easily display quoted text with customizable content.
- **Consistent Design**: Adheres to the Connect design standards for a cohesive look and feel.

## Installation

Before you can use the `Blockquote` component, ensure you have the Connect Design System installed in your project:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

### Basic Example

To use the `Blockquote` component, import it and include it in your JSX:

```tsx
import React from 'react';
import { Blockquote } from '@connect/connect-design-system';

const Example = () => <Blockquote>This is a blockquote.</Blockquote>;

export default Example;
```

## Props

- `children` (React.ReactNode **required**): The content of the blockquote.
