# Timer Component

The `Timer` component is a versatile UI element used to display a countdown timer with optional progress bar integration. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the timer's appearance and behavior, such as time duration, size, and progress bar.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Timer` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Timer.tsx` file into your project's component directory.
3. Import the `Timer` component where you need it:

```bash
npm install @connect/connect-design-system@latest
```

```tsx
import { Timer } from '@connect/connect-design-system';
```

## Usage

Here's a basic example of how to use the `Timer` component:

```tsx
import React from 'react';
import { Timer } from '@connect/connect-design-system';

function App() {
  return (
    <Timer
      time={300000} // 5 minutes in milliseconds
      onTimeUp={() => console.log('Time is up!')}
      size="large"
      className="custom-timer"
      ariaLive="assertive"
      dataTestId="timer-1"
    />
  );
}

export default App;
```

## Props

The `Timer` component accepts the following props:

- `time` (number, **required**): The total time for the countdown in milliseconds.
- `onTimeUp` (function, optional): A callback function that is called when the timer reaches zero.
- `size` (string, optional): The font-size of the timer. Can be used to change the font-size styles. default is `--connect__heading-lg`.
- `className` (string, optional): Additional CSS classes to apply to the timer.
- `ariaLive` ('off' | 'polite' | 'assertive', optional): The `aria-live` attribute for accessibility. Default is 'off'.
- `progressBar` (boolean, optional): Whether to display a progress bar. Default is `false`.
- `dataTestId` (string, optional): A test ID for the timer, useful for testing purposes.

## Example with Progress Bar

Here's an example of how to use the `Timer` component with a progress bar:

```tsx
import React from 'react';
import { Timer } from '@connect/connect-design-system';

function App() {
  return (
    <Timer
      time={60000} // 1 minute in milliseconds
      onTimeUp={() => console.log('Time is up!')}
      size="medium"
      className="custom-timer"
      ariaLive="assertive"
      progressBar={true}
      dataTestId="timer-2"
    />
  );
}

export default App;
```
