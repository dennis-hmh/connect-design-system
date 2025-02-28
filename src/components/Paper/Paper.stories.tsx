import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Paper, PaperProps } from './Paper';
import {
  Stack,
  Image,
  Button,
  Icon,
  Typography,
  List,
  Dropdown,
  Divider,
  ButtonMenu,
} from '../index';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

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
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Paper {...args} />
      </div>
    </ConnectTheme>
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
      <Image
        imageSrc=""
        roundedCorners={{
          topLeft: true,
          topRight: true,
        }}
        altText={'This is Alt Text'}
      />
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
        backgroundColor="focus-pale"
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
            <Icon id="syl" fill="focus-dark" size="xl" />
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
  outline: 'focus-pale',
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

export const WithDropdown: Story = Template.bind({});
WithDropdown.args = {
  ...Default.args,
  elevation: 4,
  roundedCorner: true,
  children: (
    <Stack
      xs={{
        direction: 'column',
        spacing: 'sm',
        paddingX: 'md',
        paddingY: 'md',
      }}
    >
      <Dropdown
        children="Select an option"
        data={[
          { label: 'Option 1' },
          { label: 'Option 2' },
          { label: 'Option 3' },
          { label: 'Option 4' },
          { label: 'Option 5' },
          { label: 'Option 6' },
          { label: 'Option 7' },
        ]}
      />
    </Stack>
  ),
};

WithDropdown.parameters = {
  layout: 'centered',
};

const classcraftLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" fill="none" class="connect__icon connect__icon-md">
  <rect x="10.5272" width="6.148" height="23.3551" rx="3.074" transform="rotate(26.7913 10.5272 0)" fill="url(#paint0_linear_1128_1272)"></rect>
  <rect x="18.5195" width="6.148" height="23.3551" rx="3.074" transform="rotate(26.7913 18.5195 0)" fill="url(#paint1_linear_1128_1272)"></rect>
  <rect x="26.512" width="6.148" height="23.3551" rx="3.074" transform="rotate(26.7913 26.512 0)" fill="url(#paint2_linear_1128_1272)"></rect>
  <defs>
  <linearGradient id="paint0_linear_1128_1272" x1="16.8218" y1="11.6948" x2="10.5399" y2="11.694" gradientUnits="userSpaceOnUse">
    <stop stop-color="#CC00C0"></stop>
    <stop offset="1" stop-color="#DF04D2"></stop>
  </linearGradient>
  <linearGradient id="paint1_linear_1128_1272" x1="24.8141" y1="11.6948" x2="18.5322" y2="11.694" gradientUnits="userSpaceOnUse">
    <stop stop-color="#CC00C0"></stop>
    <stop offset="1" stop-color="#DF04D2"></stop>
  </linearGradient>
  <linearGradient id="paint2_linear_1128_1272" x1="32.8066" y1="11.6948" x2="26.5247" y2="11.694" gradientUnits="userSpaceOnUse">
    <stop stop-color="#CC00C0"></stop>
    <stop offset="1" stop-color="#DF04D2"></stop>
  </linearGradient>
  </defs>
</svg>`;

export const Sidebar: Story = Template.bind({});
Sidebar.args = {
  ...Default.args,
  children: (
    <>
      <Stack xs={{ direction: 'column' }}>
        <List
          data={[
            {
              content: (
                <ButtonMenu
                  id="info"
                  iconId="info"
                  iconSize="md"
                  clickedClass="connect__selected"
                  ariaLabel="Info"
                  children=""
                ></ButtonMenu>
              ),
            },
          ]}
        />
        <Divider />
        <List
          data={[
            {
              content: (
                <ButtonMenu
                  id="desmos"
                  iconId="desmos"
                  iconSize="md"
                  clickedClass="connect__selected"
                  ariaLabel="Desnos Calculator"
                  children=""
                ></ButtonMenu>
              ),
            },
            {
              content: (
                <ButtonMenu
                  id="group-activity"
                  iconId="groupActivity"
                  iconSize="md"
                  clickedClass="connect__selected"
                  ariaLabel="Group Activity"
                  children=""
                ></ButtonMenu>
              ),
            },
            {
              content: (
                <ButtonMenu
                  id="add"
                  iconId="add"
                  iconSize="md"
                  clickedClass="connect__selected"
                  ariaLabel="Add"
                  children=""
                ></ButtonMenu>
              ),
            },
          ]}
        />
      </Stack>
      <List
        data={[
          {
            content: <div dangerouslySetInnerHTML={{ __html: classcraftLogo }} />,
          },
        ]}
      />
    </>
  ),
  element: 'aside',
  elevation: 4,
  className: 'connect__aside',
};
