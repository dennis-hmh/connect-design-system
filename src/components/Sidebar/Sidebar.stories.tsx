import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';
import { List } from '../List/List';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { Divider } from '../Divider/Divider';
import { Stack } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const Template: StoryFn<SidebarProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Sidebar {...args} />
      </div>
    </ConnectTheme>
  );
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

export const Default: Story = Template.bind({});
Default.args = {
  children: '',
  gradeBand: GradeBand.G4_5,
};

export const Logo: Story = Template.bind({});
Logo.args = {
  ...Default.args,
  children: (
    <List
      data={[
        {
          content: <div dangerouslySetInnerHTML={{ __html: classcraftLogo }} />,
        },
      ]}
    />
  ),
};

export const WithMenu: Story = Template.bind({});
WithMenu.args = {
  ...Default.args,
  children: (
    <ButtonMenuProvider>
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
    </ButtonMenuProvider>
  ),
};

export const WithDivider: Story = Template.bind({});
WithDivider.args = {
  ...Default.args,
  children: (
    <ButtonMenuProvider>
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
    </ButtonMenuProvider>
  ),
};
