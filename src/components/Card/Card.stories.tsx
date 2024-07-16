import React from 'react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Default = (args) => <Card {...args} />;
export const WithoutImage = (args) => <Card {...args} />;

Default.args = {
  image: true,
  imageSrc: '',
  imageAlt: 'Zelda',
  imageCaption: 'Zelda caption',
  headerElement: 'h2',
  headerContent: 'Header component text',
  mainContent: 'This is the main commponent text',
  footerContent: 'Footer component text',
};

WithoutImage.args = {
  ...Default.args,
  image: false,
};
