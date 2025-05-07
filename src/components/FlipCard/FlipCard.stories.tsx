import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';

import { Flipcard, FlipcardProps } from './FlipCard';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import { Avatar } from '../Avatar/Avatar';
import { FlipCardButton } from './FlipCardButton';
import { ConnectTheme } from '../ConnectTheme';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Dialog } from '../Dialog/Dialog';
import { List } from '../List/List';
import { Checkbox } from '../Checkbox/Checkbox';
import { FlipCardFace } from './FlipCardFace';
import { GradeBand } from '../../enum/gradeband';

type FlipCardStoryProps = FlipcardProps & { gradeBand: GradeBand };

const meta: Meta<FlipCardStoryProps> = {
  component: Flipcard,
  title: 'Draft/Flipcard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    gradeBand: GradeBand.Teach,
  },
  argTypes: {
    gradeBand: {
      control: 'select',
      options: Object.values(GradeBand),
    },
    children: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<FlipCardStoryProps>;

const defaultFlipCardChildren = (
  <>
    <FlipCardFace face="front" backgroundColor="primary-mid">
      <Typography element="h4" color="white" size="body-lg">
        Flipcard Front
      </Typography>
    </FlipCardFace>

    <FlipCardFace face="back" backgroundColor="brand-magenta">
      <Typography element="h4" color="white" size="body-lg">
        Flipcard Back
      </Typography>
    </FlipCardFace>
  </>
);

const Template: StoryFn<FlipCardStoryProps> = ({ gradeBand, ...args }) => {
  const ref = useRef(null);
  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={ref}>
      <div ref={ref}>
        <Flipcard {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: defaultFlipCardChildren,
  transitionSpeed: 'medium',
  width: 250,
  height: 350,
  flipTrigger: 'click',
};

export const OnHover: Story = Template.bind({});
OnHover.args = {
  ...Default.args,
  flipTrigger: 'hover',
};

export const ScaleOnHover: Story = Template.bind({});
ScaleOnHover.args = {
  ...Default.args,
  transformScale: 1.2,
};

const flipCardWithButtonChildren = (
  <>
    <FlipCardFace face="front" backgroundColor="primary-mid">
      <Typography element="h4" color="white" size="body-lg">
        Flipcard Front
        <FlipCardButton />
      </Typography>
    </FlipCardFace>

    <FlipCardFace face="back" backgroundColor="brand-magenta">
      <Typography element="h4" color="white" size="body-lg">
        Flipcard Back
        <FlipCardButton />
      </Typography>
    </FlipCardFace>
  </>
);

export const ButtonFlip: Story = Template.bind({});
ButtonFlip.args = {
  ...Default.args,
  children: flipCardWithButtonChildren,
  flipTrigger: 'button',
};

export const Controlled: Story = Template.bind({});
Controlled.args = {
  ...Default.args,
  flipped: true,
};

const withImageChildren = (
  <>
    <FlipCardFace face="front">
      <Stack paddingY="zero" paddingX="zero">
        <Image imageSrc="" altText="Default Image" />
      </Stack>
    </FlipCardFace>

    <FlipCardFace face="back">
      <Stack paddingY="zero" paddingX="zero">
        <Image imageSrc="" altText="Default Image" />
      </Stack>
    </FlipCardFace>
  </>
);

export const WithImageOnHover: Story = Template.bind({});
WithImageOnHover.args = {
  ...Default.args,
  children: withImageChildren,
  transitionSpeed: 'slow',
  width: 445,
  height: 250,
  flipTrigger: 'hover',
};

const withTextChildren = (
  <>
    <FlipCardFace face="front">
      <Stack paddingY="sm" paddingX="sm">
        <Typography element="p" size="body-lg">
          The Connect Design System provides a comprehensive set of reusable components, design
          tokens that streamline the development process while maintaining a cohesive user
          experience.
        </Typography>
      </Stack>
    </FlipCardFace>

    <FlipCardFace face="back">
      <Stack paddingY="sm" paddingX="sm">
        <Typography element="p" size="body-lg">
          The Connect Design System is a comprehensive framework designed to ensure consistency,
          scalability, and accessibility across digital products. It provides a unified set of
          reusable components, design tokens, and guidelines that streamline the development process
          while maintaining a cohesive user experience. By leveraging modern design principles and
          best practices, the Connect Design System empowers teams to collaborate efficiently,
          reduce redundancy, and deliver high-quality, visually consistent interfaces that align
          with brand standards.
        </Typography>
      </Stack>
    </FlipCardFace>
  </>
);

export const WithText: Story = Template.bind({});
WithText.args = {
  ...Default.args,
  children: withTextChildren,
};

const ButtonDialogComponent: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          handleOpenDialog();
        }}
      >
        Click Me
      </Button>
      <Dialog ref={dialogRef} heading="Connect Design System">
        <Stack paddingY="sm" paddingX="sm">
          <Typography element="p" size="body-lg">
            The Connect Design System provides a comprehensive set of reusable components, design
            tokens that streamline the development process while maintaining a cohesive user
            experience.
          </Typography>
        </Stack>
      </Dialog>
    </>
  );
};

const ListComponent: React.FC = () => {
  const [checkedState, setCheckedState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    // Update the state for the specific checkbox
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <List
      data={[
        {
          content: (
            <Checkbox
              id="checkbox-1"
              name="checkbox1"
              checked={checkedState.checkbox1}
              onChange={handleCheckboxChange}
            >
              Option 1
            </Checkbox>
          ),
        },
        {
          content: (
            <Checkbox
              id="checkbox-2"
              name="checkbox2"
              checked={checkedState.checkbox2}
              onChange={handleCheckboxChange}
            >
              Option 2
            </Checkbox>
          ),
        },
        {
          content: (
            <Checkbox
              id="checkbox-3"
              name="checkbox3"
              checked={checkedState.checkbox3}
              onChange={handleCheckboxChange}
            >
              Option 3
            </Checkbox>
          ),
        },
      ]}
      listType="unordered"
    />
  );
};

const withButtonCheckboxesChildren = (
  <>
    <FlipCardFace face="front">
      <Stack spacing="sm" paddingY="sm" paddingX="sm" justifyContent="space-between">
        <Typography element="p" size="body-lg">
          The Connect Design System provides a comprehensive set of reusable components, design
          tokens that streamline the development process while maintaining a cohesive user
          experience.
        </Typography>

        <ButtonDialogComponent />
      </Stack>
    </FlipCardFace>

    <FlipCardFace face="back">
      <Stack paddingY="sm" paddingX="sm" justifyContent="space-between">
        <Image imageSrc="" altText="Default Image" />
        <Stack spacing="sm">
          <Typography element="p" size="body-lg">
            Select an option:
          </Typography>
          <ListComponent />
        </Stack>
      </Stack>
    </FlipCardFace>
  </>
);

export const WithButtonCheckboxes: Story = Template.bind({});
WithButtonCheckboxes.args = {
  ...Default.args,
  children: withButtonCheckboxesChildren,
  height: 400,
};

const flipCardAssetsBasePath = `/.storybook/assets/FlipCard`;

const StudentResponseCardFaceContainer = ({ children }) => (
  <Stack flex={1} paddingY="md" spacing="md" paddingX="md" direction="column">
    {children}
  </Stack>
);

const studentResponseFrontFace = (
  <Image
    imageSrc={`${flipCardAssetsBasePath}/studentResponseBg.png`}
    altText="Student response card"
  />
);

const studentResponseBackFace = (
  <>
    <Stack direction="row" paddingX="zero" paddingY="zero" spacing="md" alignItems="center">
      <Avatar
        size="lg"
        alt="Student avatar"
        src={`${flipCardAssetsBasePath}/studentResponseAvatar.png`}
      ></Avatar>
      <Typography size="caption">Cheeky Cheetah</Typography>
    </Stack>
    <Image
      imageSrc={`${flipCardAssetsBasePath}/studentResponse.png`}
      altText="Student response value"
    />
  </>
);

const studentResponseChildren = (
  <>
    <FlipCardFace roundedCorner face="front">
      <StudentResponseCardFaceContainer>
        {studentResponseFrontFace}
      </StudentResponseCardFaceContainer>
    </FlipCardFace>

    <FlipCardFace roundedCorner face="back">
      <StudentResponseCardFaceContainer>{studentResponseBackFace}</StudentResponseCardFaceContainer>
    </FlipCardFace>
  </>
);

export const StudentResponse: Story = Template.bind({});
StudentResponse.args = {
  flipTrigger: 'click',
  transitionSpeed: 'medium',
  children: studentResponseChildren,
};
