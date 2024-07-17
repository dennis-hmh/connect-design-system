import React from 'react';
import Toolbar from './Toolbar';
import { Card } from '../Card/Card';
import Stack from '../Stack';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';

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
          I am the anatomy title, Here there is no header element
        </Typography>
        <Typography element="h5" size="body-sm">
          Stem
        </Typography>
      </Stack>
    }
    mainContent={
      <>
        <Toolbar />
        <div
          style={{
            height: 500,
            width: '100%',
            backgroundColor: 'rgb(204, 204, 204, 0.15)',
          }}
        ></div>
      </>
    }
    footerContent={
      <Stack
        sm={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          spacing: 'xs',
          paddingX: 'sm',
        }}
      >
        <Stack>
          <Typography element="p" size="body-sm" color="red-c50">
            Feedback
          </Typography>
        </Stack>
        <Button primary={false} clickHandler={() => {}}>
          Cancel
        </Button>
        <Button disabled primary={true} clickHandler={() => {}}>
          Save
        </Button>
      </Stack>
    }
  />
);
