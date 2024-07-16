import { Reveal } from './Reveal';

export default {
  component: Reveal,
  title: 'Reveal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <Reveal {...args} />;

Default.args = {
  front: 'Select to Reveal',
  back: 'Iron Man',
  grade: 'g35',
};
