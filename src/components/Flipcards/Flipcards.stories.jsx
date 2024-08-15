import { Flipcards } from './Flipcards';

export default {
  component: Flipcards,
  title: 'Flipcards',
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Default3 = (args) => <Flipcards {...args} />;
export const Default4 = (args) => <Flipcards {...args} />;
export const Counter = (args) => <Flipcards {...args} />;
export const Sequenced = (args) => <Flipcards {...args} />;

Default3.args = {
  front: 'Front text',
  back: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
  number: '3',
  counter: false,
  sequenced: false,
  grade: 'g35',
};

Default4.args = {
  ...Default3.args,
  number: '4',
};

Counter.args = {
  ...Default3.args,
  counter: true,
};

Sequenced.args = {
  ...Default3.args,
  sequenced: true,
};
