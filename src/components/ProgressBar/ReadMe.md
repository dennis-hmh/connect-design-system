# ProgressBar Component

The `ProgressBar` component is a customizable progress bar used to display progress in a visual format. It is part of the Connect Design System.

## Features

- **TypeScript Support**: Leverages TypeScript for type safety.
- **Customizable Colors**: You can customize the background and bar colors.
- **Accessible**: Includes ARIA attributes for better accessibility, ensuring that the component is usable by everyone.

## Installation

### Prerequisites

Ensure you have Node.js and npm (or yarn) installed on your system.

### Installation

Run the following command to install the component library:

```bash
npm install @connect/connect-design-system@latest
```

```tsx
import { ProgressBar } from '@connect/connect-design-system';
```

## Props

The `ProgressBar` component accepts the following props:

- `value` (number, **required**): The current progress value.
- `max` (number, optional): The maximum progress value. Default is 100.
- `backgroundColor` (Color, optional): The background color of the progress bar.
- `barColor` (Color, optional): The color of the progress bar.
- `ariaLabel` (string, optional): Provides an accessible label for the progress bar.
- `dataTestId` (string, optional): The test ID for the progress bar.
- `gradeBand` (GradeBand, optional): Specifies the grade band for the progress bar.

## Example

Here's a basic example of how to use the `ProgressBar` component:

```tsx
import React from 'react';
import { ProgressBar } from '@connect/connect-design-system';

function App() {
  return (
    <div>
      <ProgressBar value={50} max={100} barColor="surface-light" backgroundColor="purple-s50" />
    </div>
  );
}

export default App;
```

## Accessibility

The `ProgressBar` component includes ARIA attributes to ensure it is accessible to all users, including those using assistive technologies. The `ariaLabel` prop provides a descriptive label for the progress bar, and the component uses `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes to convey the progress information.

### Example with ARIA Attributes

Here's an example of how to use the `ProgressBar` component with ARIA attributes:

```tsx
import React from 'react';
import { ProgressBar } from '@connect/connect-design-system';

function App() {
  return (
    <div>
      <ProgressBar
        value={75}
        max={100}
        barcolor="primary-mid"
        backgroundColor="surface-pale"
        ariaLabel="File upload progress"
        style={customStyles}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        dataTestId="progress-bar-1"
      />
    </div>
  );
}

export default App;
```
