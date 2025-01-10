# GridItem Component

The `GridItem` component is a flexible and customizable layout component designed to be used within a `Grid` component. It helps you create responsive grid layouts in your React applications.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Responsive Layout**: Supports responsive design with customizable column spans and start positions for different screen sizes.
- **Customizable**: Provides various props to customize the grid item's appearance and behavior, such as column spans, start positions, and additional classes.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `GridItem` component in your project, ensure you have the `@connect/connect-design-system` library installed:

```bash
npm install @connect/connect-design-system@latest
```

## Usage

Here's a basic example of how to use the GridItem component within a Grid component:

```jsx
import React from 'react';
import { Grid } from '@connect/connect-design-system';
import { GridItem } from '@connect/connect-design-system';

const App = () => {
  return (
    <Grid gap="md" gutter={true}>
      <GridItem xs={{ startCol: 1, spanCol: 4 }}>
        <div>Item 1</div>
      </GridItem>
      <GridItem xs={{ startCol: 5, spanCol: 4 }}>
        <div>Item 2</div>
      </GridItem>
      <GridItem xs={{ startCol: 9, spanCol: 4 }}>
        <div>Item 3</div>
      </GridItem>
    </Grid>
  );
};

export default App;
```

## Workspace

Collecting workspace information

Sure! Here is a README.md file for the GridItem component:

README.md
Usage
Here's a basic example of how to use the GridItem component within a Grid component:

Props
The GridItem component accepts the following props:

- children (**required**): The content to be displayed within the grid item. This is a required prop and can be any valid React node.
- xs (optional): An object specifying the column span and start position for extra-small screens. Example: { startCol: 1, spanCol: 4 }.
- sm (optional): An object specifying the column span and start position for small screens. Example: { startCol: 1, spanCol: 4 }.
- md (optional): An object specifying the column span and start position for medium screens. Example: { startCol: 1, spanCol: 4 }.
- lg (optional): An object specifying the column span and start position for large screens. Example: { startCol: 1, spanCol: 4 }.
- xl (optional): An object specifying the column span and start position for extra-large screens. Example: { startCol: 1, spanCol: 4 }.
- className (optional): A string representing additional CSS classes to apply to the grid item.
- dataTestId (optional): A string for the data-testid attribute, useful for testing.

## Contributing

Contributions to the GridItem component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
