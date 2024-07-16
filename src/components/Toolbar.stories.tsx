import React from 'react';
import Toolbar from './Toolbar';
import { Card } from './Card/Card';
import Stack from './Stack';
import { Typography } from './Typography/Typography';
import { Button } from './Button/Button';

export default {
  component: Toolbar,
  title: 'Toolbar',
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
    // design: {
    //   type: 'figma',
    //   url: '',
    // },
  },
};

export const Default = (args) => <Toolbar {...args} />;
export const WithChildren = (args) => <Toolbar {...args} />;

Default.args = {};

WithChildren.args = {
  ...Default.args,
};

// New story using Toolbar in Card and Stack in CardFooter

export const ToolbarInCard = () => (
  <Card
    image={false}
    headerContent={
      <Stack xs={{ direction: 'column', paddingX: 'sm' }}>
        <Typography element="h5" size="body-sm">
          Title
        </Typography>
        <Typography element="h5" size="body-sm">
          Stem
        </Typography>
      </Stack>
    }
    mainContent={
      <>
        <Toolbar />
        <div style={{ background: 'rgb(204 204 204 / 5%)', height: 500 }}></div>
      </>
    }
    footerContent={
      <Stack
        xs={{ direction: 'column', spacing: 'xs', paddingX: 'sm' }}
        sm={{ direction: 'row', justifyContent: 'space-between', paddingX: 'sm' }}
      >
        <Button primary={false} clickHandler={() => {}}>
          Cancel
        </Button>
        <Button primary={true} clickHandler={() => {}}>
          Save
        </Button>
      </Stack>
    }
  />
);
