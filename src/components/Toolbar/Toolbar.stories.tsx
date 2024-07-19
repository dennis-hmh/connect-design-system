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
            backgroundColor: 'rgb(204, 204, 204, 0.15)',
            border: '3px dashed var(--connect__selected-mid)',
            boxShadow: '0 0 0 var(--connect__spacer-sm) var(--connect__neutrals-white) inset',
            background: 'var(--connect__selected-light)',
          }}
        ></div>
      </>
    }
    footerContent={
      <Stack
        xs={{
          paddingX: 'sm',
        }}
        sm={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          spacing: 'sm',
          paddingX: 'sm',
        }}
      >
        <Button primary={false} clickHandler={() => {}}>
          Clear Canvas
        </Button>
        <Button disabled primary={true} clickHandler={() => {}}>
          Save
        </Button>
      </Stack>
    }
  />
);
