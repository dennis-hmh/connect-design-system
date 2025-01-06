# Table Component

The `Table` component is a reusable React component that renders a table with customizable headers, cells, and other properties.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Provides various props to customize the table's appearance, such as headers, cells, and additional classes.
- **Accessible**: Designed with accessibility in mind, including support for captions and ARIA attributes.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Table` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Install the Connect Design System package:

```bash
npm install @connect/connect-design-system@latest
```

3. Import the Table component where you need it:

```tsx
import { Table } from '@connect/connect-design-system';
```

## Usage

Here is an example of how to use the Table component within the Connect Design System:

```tsx
import React from 'react';
import { Table } from '@connect/connect-design-system';
import { GradeBand } from '../../enum/gradeband';
import { ConnectTheme } from 'connect-design-system';

const headers = ['Name', 'Age', 'Email', 'Address', 'Phone Number'];
const cells = [
  ['John Doe', '30', 'john.doe@example.com', '123 Main St', '555-1234'],
  ['Jane Smith', '25', 'jane.smith@example.com', '456 Elm St', '555-5678'],
  ['Alice Johnson', '35', 'alice.johnson@example.com', '789 Oak St', '555-8765'],
  ['Bob Brown', '40', 'bob.brown@example.com', '101 Pine St', '555-4321'],
  ['Charlie Davis', '28', 'charlie.davis@example.com', '202 Maple St', '555-6789'],
];

const App = () => (
  <ConnectTheme gradeBand={GradeBand.G4_5}>
    <Table
      headers={headers}
      cells={cells}
      caption="Personal Information"
      scrolling={true}
      stickyHeader={true}
      className="custom-table"
      dataTestId="personal-info-table"
    />
  </ConnectTheme>
);

export default App;
```

## Props

The Table component accepts the following props:

- headers (optional): An array of strings representing the column headers.
- cells: A 2D array of strings representing the table data.
- caption (optional): A string representing the table caption.
- scrolling (optional): A boolean to enable horizontal scrolling for the table.
- stickyHeader (optional): A boolean to make the table header sticky.
- className (optional): A string representing additional CSS classes for the table.
- dataTestId (optional): A string for the data-testid attribute, useful for testing.
- gradeBand (optional): A GradeBand enum value for styling purposes.
