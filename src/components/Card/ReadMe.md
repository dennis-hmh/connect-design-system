# Card Component

The `Card` component is a versatile UI element designed to display content in a structured and visually appealing way. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the card's appearance and behavior, such as header, footer, and children.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Card` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Card.tsx` file into your project's component directory.
3. Import the `Card` component where you need it:

```bash
npm install @connect/connect-design-system@latest

import { Card } from '@connect/connect-design-system';
```

##Usage

Here's a basic example of how to use the Card component:

```jsx
import React from 'react';
import { Card } from '@connect/connect-design-system';
import { Typography } from '../Typography/Typography';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button/Button';

function App() {
  return (
    <Card
      header={
        <Stack
          element="header"
          xs={{ direction: 'column', spacing: 'sm', paddingX: 'zero', paddingY: 'zero' }}
        >
          <Typography element="h4" size="heading-lg">
            Header
          </Typography>
        </Stack>
      }
      children={
        <Typography element="p" size="body-md">
          This is the content of the card.
        </Typography>
      }
      footer={
        <Stack
          element="footer"
          xs={{
            alignItems: 'stretch',
            direction: 'column',
            spacing: 'sm',
            paddingX: 'sm',
            paddingY: 'sm',
          }}
          md={{ direction: 'row', justifyContent: 'end' }}
        >
          <Button primary={false}>Secondary</Button>
          <Button primary={true}>Primary</Button>
        </Stack>
      }
    ></Card>
  );
}

export default App;
```

## Props

The Card component accepts the following props:

- children (required): The content to be displayed within the card. This is a required prop and can be any valid React node.
- header: Optional. ReactNode for specifying the header content of the card.
- footer: Optional. ReactNode for specifying the footer content of the card.
- dataTestId: Optional. String for specifying a test ID for testing purposes.
- gradeBand: Optional. Enum for specifying the grade band.

## Contributing

Contributions to the Card component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
