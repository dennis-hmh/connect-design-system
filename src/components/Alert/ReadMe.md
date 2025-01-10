# Alert Component

The `Alert` component is a versatile UI element designed to display important messages to users. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the alert's appearance and behavior, such as icons, click handlers, and additional classes.
- **Accessible**: Designed with accessibility in mind, including support for ARIA attributes.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Alert` component in your project, ensure you have the `@connect/connect-design-system` library installed:

```bash
npm install @connect/connect-design-system@latest
```

## Usage

Here's a basic example of how to use the Alert component:

```jsx
import React from 'react';
import { Alert } from '@connect/connect-design-system';
import { Typography } from '../Typography/Typography';
import { Stack } from '../Stack/Stack';

const App = () => {
  return (
    <Alert
      iconId="info"
      iconSize="sm"
      fill="primary"
      handleClick={() => console.log('Close button clicked')}
      testId="alert-example"
    >
      <Stack direction="column" spacing="xs">
        <Typography element="h5" size="body-sm" weight={700}>
          Alert Heading
        </Typography>
        <Typography element="p">This is an alert message.</Typography>
      </Stack>
    </Alert>
  );
};

export default App;
```

## Props

The Alert component accepts the following props:

- children (**required**): The content to be displayed within the alert. This is a required prop and can be any valid React node.
- iconId (optional): The ID of the icon to display inside the alert.
- iconSize (optional): The size of the icon, with options like 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'. Default is 'sm'.
- fill (optional): The fill color of the icon.
- handleClick (optional): A function to handle click events, such as closing the alert.
- testId (optional): A string for specifying a test ID for testing purposes.
- gradeBand (optional): An enum for specifying the grade band.

## Contributing

Contributions to the Alert component are welcome. Please ensure to follow the project's coding stand
