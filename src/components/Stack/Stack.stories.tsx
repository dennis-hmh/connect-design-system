import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Stack, StackProps } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Paper } from '../Paper/Paper';
import { Figure } from '../Figure/Figure';
import { Image } from '../Image/Image'; // Import Image
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Template: StoryFn<StackProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Paper elevation={2} roundedCorner={true}>
          <Stack {...args}>
            <Figure caption="This is a caption">
              <Image imageSrc={'../../images/zelda.jpg'} altText={'This is Alt Text'} />
            </Figure>

            <Stack
              xs={{ direction: 'column', spacing: 'sm', paddingX: 'sm', paddingY: 'md' }}
              lg={{ direction: 'row', justifyContent: 'space-between' }}
            >
              <Button primary={true} disabled={true}>
                Cancel
              </Button>
              <Button primary={true}>
                <Icon id="check" size="sm" /> Save
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  sm: { direction: 'column', spacing: 'sm' },
  md: { direction: 'row', alignItems: 'center', justifyContent: 'space-between' },
  className: '',
  dataTestId: '',
};
