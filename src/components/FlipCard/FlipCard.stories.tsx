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
    fullWidth: false,
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

const FlipCardFaceContainer = ({ children }) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    paddingX="md"
    paddingY="md"
    customStyle={{ width: '250px', height: '350px' }}
  >
    {children}
  </Stack>
);

const defaultFlipCardChildren = (
  <>
    <FlipCardFace face="front" backgroundColor="primary-mid">
      <FlipCardFaceContainer>
        <Typography element="h4" color="white" size="body-lg">
          Flipcard Front
        </Typography>
      </FlipCardFaceContainer>
    </FlipCardFace>

    <FlipCardFace face="back" backgroundColor="brand-magenta">
      <FlipCardFaceContainer>
        <Typography element="h4" color="white" size="body-lg">
          Flipcard Back
        </Typography>
      </FlipCardFaceContainer>
    </FlipCardFace>
  </>
);

const Template: StoryFn<FlipCardStoryProps> = ({ gradeBand, ...args }) => {
  const themeWrapperRef = useRef(null);
  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef} style={{ display: 'flex' }}>
        <Flipcard {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: defaultFlipCardChildren,
  transitionSpeed: 'medium',
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
      <FlipCardFaceContainer>
        <Typography element="h4" color="white" size="body-lg">
          Flipcard Front
          <FlipCardButton />
        </Typography>
      </FlipCardFaceContainer>
    </FlipCardFace>

    <FlipCardFace face="back" backgroundColor="brand-magenta">
      <FlipCardFaceContainer>
        <Typography element="h4" color="white" size="body-lg">
          Flipcard Back
          <FlipCardButton />
        </Typography>
      </FlipCardFaceContainer>
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
        <Image imageSrc="/images/default.png" altText="Default Image" />
      </Stack>
    </FlipCardFace>

    <FlipCardFace face="back">
      <Stack paddingY="zero" paddingX="zero">
        <Image imageSrc="/images/default.png" altText="Default Image" />
      </Stack>
    </FlipCardFace>
  </>
);

export const WithImageOnHover: Story = Template.bind({});
WithImageOnHover.args = {
  ...Default.args,
  children: withImageChildren,
  transitionSpeed: 'slow',
  flipTrigger: 'hover',
};

const withTextChildren = (
  <>
    <FlipCardFace face="front">
      <Stack alignItems="center" paddingY="sm" paddingX="sm">
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
      <FlipCardFaceContainer>
        <Typography element="p" size="body-lg">
          The Connect Design System provides a comprehensive set of reusable components, design
          tokens that streamline the development process while maintaining a cohesive user
          experience.
        </Typography>

        <ButtonDialogComponent />
      </FlipCardFaceContainer>
    </FlipCardFace>

    <FlipCardFace face="back">
      <FlipCardFaceContainer>
        <Image imageSrc="/images/default.png" altText="Default Image" />
        <Stack spacing="sm">
          <Typography element="p" size="body-lg">
            Select an option:
          </Typography>
          <ListComponent />
        </Stack>
      </FlipCardFaceContainer>
    </FlipCardFace>
  </>
);

export const WithButtonCheckboxes: Story = Template.bind({});
WithButtonCheckboxes.args = {
  ...Default.args,
  children: withButtonCheckboxesChildren,
};

const flipCardAssetsBasePath = `/images/FlipCard`;

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
