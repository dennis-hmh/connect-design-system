# Dialog Component

The `Dialog` component is a versatile UI element used to display modal dialogs. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly.
- **Customizable**: Provides various props to customize the dialog's appearance and behavior.
- **Responsive Design**: Adapts to different screen sizes for optimal usability.
- **Accessibility**: Includes ARIA attributes for better accessibility.

## Installation

To use the `Dialog` component in your project, ensure you have React and TypeScript set up. Then, follow these steps:

1. Copy the `Dialog.tsx` file into your project's component directory.
2. Import the `Dialog` component where you need it:

```bash
npm install @connect/connect-design-system@latest

import Dialog from '@connect/connect-design-system';
```

## Usage

Here's a basic example of how to use the Dialog component:

```tsx
import React, { useRef } from 'react';
import Dialog from './components/Dialog/Dialog';
import { Button } from './components/Button/Button';

const App: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <Button primary clickHandler={handleOpenDialog}>
        Open Dialog
      </Button>
      <Button primary clickHandler={handleCloseDialog}>
        Close Dialog
      </Button>
      <Dialog ref={dialogRef} iconId="add" heading="Test Dialog" dataTestId="dialogTest">
        Dialog Content
      </Dialog>
    </div>
  );
};

export default App;
```

## Props

The Dialog component accepts the following props:

- children (**required**): React.ReactNode - The content inside the dialog.
- id: string - Optional. The ID of the dialog.
- heading (**required**): string - The heading text of the dialog.
- elevation: -2 | 0 | 2 | 4 | 6 - Optional, Default is 4. The elevation level of the dialog.
- roundedCorner: boolean - Optional, Default is true. Whether the dialog has rounded corners.
- fullWidth: boolean - Optional. Whether the dialog should take the full width of the screen.
- iconId: IconId - Optional. The ID of the icon to display in the dialog header.
- expand: boolean - Optional. Whether the dialog can be expanded.
- collapse: boolean - Optional. Whether the dialog can be collapsed.
- className: string - Optional. Additional CSS class names to apply to the dialog.
- dataTestId: string - Optional. A test ID for the dialog, useful for testing purposes.
- gradeBand: GradeBand - Optional. Specifies the grade band for the dialog.

## Contributing

Contributions to the Dialog component are welcome. Please ensure to follow the project's coding standards and submit your pull requests for review.
