import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Paper, PaperProps } from './Paper';
import { Stack, Figure, Image, Button, Icon, Typography, List } from '../index';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

const meta: Meta<typeof Paper> = {
  component: Paper,
  title: 'Layout/Paper',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

const Template: StoryFn<PaperProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ButtonMenuProvider>
      <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
        <div ref={themeWrapperRef}>
          <Paper {...args} />
        </div>
      </ConnectTheme>
    </ButtonMenuProvider>
  );
};

export const Default: Story = Template.bind({});
export const Aside: Story = Template.bind({});
export const FullWidth: Story = Template.bind({});

Default.args = {
  children: 'Paper',
  element: 'div',
  elevation: 0,
  roundedCorner: false,
  backgroundColor: undefined,
  className: '',
  fullWidth: false,
  dataTestId: '',
  gradeBand: GradeBand.G4_5,
};

Aside.args = {
  ...Default.args,
  children: 'Aside',
  element: 'aside',
  elevation: 4,
  className: 'connect__aside',
  fullWidth: false,
};

FullWidth.args = {
  children: 'Paper full width',
  element: 'div',
  elevation: 0,
  roundedCorner: false,
  backgroundColor: undefined,
  className: '',
  fullWidth: true,
  dataTestId: '',
  gradeBand: GradeBand.G4_5,
};

export const Card: Story = Template.bind({});
Card.args = {
  ...Default.args,
  children: (
    <Stack
      sm={{
        direction: `column`,
        spacing: 'sm',
        alignItems: 'stretch',
        justifyContent: 'start',
        flexWrap: `wrap`,
      }}
    >
      <Figure caption="This is a caption">
        <Image
          imageSrc=""
          roundedCorners={{
            topLeft: true,
            topRight: true,
          }}
          altText={'This is Alt Text'}
        />
      </Figure>

      <Stack
        xs={{ direction: 'column', spacing: 'sm', paddingX: 'sm', paddingY: 'md' }}
        lg={{ direction: 'row', justifyContent: 'space-between' }}
      >
        <Button primary={true} disabled={true}>
          Cancel
        </Button>
        <Button primary={true}>
          <Icon id="check" size="sm" />
          <Typography>Save</Typography>
        </Button>
      </Stack>
    </Stack>
  ),
  element: 'section',
  elevation: 4,
  roundedCorner: true,
  className: '',
};

Card.parameters = {
  layout: 'centered',
};

export const WithOutline: Story = Template.bind({});
WithOutline.args = {
  children: (
    <>
      <Paper
        fullWidth={true}
        backgroundColor="primary-mid"
        roundedCorner={{
          topAll: true,
        }}
      >
        <Stack
          xs={{
            direction: 'row',
            spacing: 'sm',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'start',
            paddingX: 'md',
            paddingY: 'sm',
          }}
        >
          <Stack
            xs={{
              direction: 'row',
              flexWrap: 'nowrap',
              spacing: 'md',
              alignItems: 'center',
              alignSelf: 'start',
              justifyContent: 'space-between',
              paddingX: 'zero',
              paddingY: 'zero',
            }}
          >
            <Icon id="syl" fill="primary-dark" size="xl" />
          </Stack>
          <Stack
            flex="auto"
            xs={{
              direction: 'column',
              spacing: 'xs',
              alignItems: 'start',
              justifyContent: 'center',
              paddingX: 'zero',
              paddingY: 'zero',
            }}
          >
            <Typography element="p" size="body-sm" color="surface-dark">
              Teaching Support
            </Typography>

            <Typography element="h1" size="body-lg" color="surface-dark" weight={700}>
              Spark Discussions
            </Typography>
          </Stack>
        </Stack>
      </Paper>
      <Paper
        fullWidth={true}
        backgroundColor="transparent"
        roundedCorner={{
          bottomAll: true,
        }}
      >
        <Stack xs={{ direction: 'column', spacing: 'sm', paddingX: 'lg', paddingY: 'md' }}>
          <Typography element="p" size="body-md" color="surface-dark">
            Students might incorrectly read integers such as +3 and –3 as "plus 3" and "minus 3."
          </Typography>

          <List
            data={[
              {
                content: (
                  <Typography size="body-sm" color="surface-dark">
                    Bullet List item 1: Body Small
                  </Typography>
                ),
              },
              {
                content: (
                  <Typography size="body-sm" color="primary-mid">
                    Bullet List item 2: Body Small
                  </Typography>
                ),
              },
            ]}
            listType="unordered"
            variants="disc"
          />
        </Stack>
      </Paper>
    </>
  ),
  element: 'div',
  elevation: 0,
  roundedCorner: true,
  outline: 'primary-mid',
  fullWidth: false,
  dataTestId: '',
  gradeBand: GradeBand.G4_5,
};

WithOutline.parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'light',
  },
};
