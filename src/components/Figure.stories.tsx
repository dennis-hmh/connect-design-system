import React from 'react';
import { Figure } from './Figure';

export default {
  component: Figure,
  title: 'Figure',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <Figure {...args} />;
export const WithoutCaption = (arg) => <Figure {...arg} />;

Default.args = {
  altText: 'This is Alt Text',
  imageSrc: '/src/assets/images/zelda.jpg',
  imageCaption: 'This is an image caption',
};

WithoutCaption.args = {
  ...Default.args,
  imageCaption: '',
};
