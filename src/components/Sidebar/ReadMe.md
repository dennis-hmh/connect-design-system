# Sidebar Component

The `Sidebar` component is a versatile UI element designed to provide a collapsible side navigation menu. It is implemented in TypeScript with React, ensuring type safety and ease of integration into your projects.

## Features

- **TypeScript Support**: Utilizes TypeScript for type safety and to define props clearly, making the component easy to use and integrate.
- **Customizable**: Offers various props to customize the sidebar's appearance and behavior.
- **Easy to Use**: Designed with simplicity in mind, making it straightforward to integrate into any React project.

## Installation

To use the `Sidebar` component in your project, follow these steps:

1. Ensure you have React and TypeScript set up in your project.
2. Copy the `Sidebar.tsx` file into your project's component directory.
3. Import the `Sidebar` component where you need it:

```bash
npm install @connect/connect-design-system@latest

import { Sidebar } from '@connect/connect-design-system@latest';
```

## Usage

Here's a basic example of how to use the Sidebar component:

```tsx
import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';
import { List } from '../List/List';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';
import { Divider } from '../Divider/Divider';
import { Stack } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const Template: StoryFn<SidebarProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Sidebar {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: (
    <Stack>
      <List
        data={[
          {
            content: (
              <IconButton variant="text" ariaLabel="Info">
                <Icon id="info" size="sm" />
              </IconButton>
            ),
          },
        ]}
      />
      <Divider orientation="horizontal" />
      <List
        data={[
          {
            content: (
              <IconButton variant="text" ariaLabel="Desmos Calculator">
                <Icon id="desmos" size="sm" />
              </IconButton>
            ),
          },
          {
            content: (
              <IconButton variant="text" ariaLabel="Group Activity">
                <Icon id="groupActivity" size="sm" />
              </IconButton>
            ),
          },
          {
            content: (
              <IconButton variant="text" ariaLabel="Add">
                <Icon id="add" size="sm" />
              </IconButton>
            ),
          },
        ]}
      />
    </Stack>
  ),
  gradeBand: GradeBand.G4_5,
};
```

## Props

The Sidebar component accepts the following props:

- `children` **required**: React.ReactNode - The content inside the sidebar.
- `gradeBand` **required**: GradeBand - Specifies the grade band for the sidebar ~ only used in story.
