# ProgressBar Component

The `ProgressBar` component is a customizable progress bar used to display progress in a visual format. It is part of the Connect Design System.

## Features

- **TypeScript Support**: Leverages TypeScript for type safety.
- **Customizable Colors**: You can customize the background and bar colors.

## Installation

### Prerequisites

Ensure you have Node.js and npm (or yarn) installed on your system.

### Installation

Run the following command to install the component library:

```bash
npm install @connect/connect-design-system@1.10.0
```

```tsx
import { ProgressBar } from '@connect/connect-design-system';
```

## Props

- `value` (number, **required**): The current progress value.
- `max` (number, optional): The maximum progress value. Default is 100.
- `backgroundColor` (Color, optional): The background color of the progress bar.
- `barColor` (Color, optional): The color of the progress bar.
- `dataTestId` (string, optional): The test ID for the progress bar.

## Example

```tsx
import React from 'react';
import { ProgressBar } from './ProgressBar';

function Example() {
  return (
    <div>
      <ProgressBar value={50} max={100} barColor="golden-c30" backgroundColor="purple-s50" />
    </div>
  );
}

export default Example;
```

```

```
