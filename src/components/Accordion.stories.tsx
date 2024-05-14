import { Accordion } from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
};

export const Default = (args) => <Accordion {...args} />;
export const Divider = (args) => <Accordion {...args} />;
export const Color = (args) => <Accordion {...args} />;

Default.args = {
  data: [
    {
      title: 'Title One',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Two',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Three',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Fout',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Five',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
  ],
};

Divider.args = {
  ...Default.args,
  variant: 'divider',
};

Color.args = {
  ...Default.args,
  variant: 'color',
};
