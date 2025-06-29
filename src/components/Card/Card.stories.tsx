import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Card, CardProps } from './Card';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Image } from '../Image/Image';
import { InputBox } from '../InputBox/InputBox';
import { Textarea } from '../Textarea/Textarea';
import { Icon } from '../Icon/Icon';
import { IconButton } from '../IconButton/IconButton';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Card> = {
  title: 'Pattern/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Template: StoryFn<CardProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gap="sm" gutter={true}>
          <GridItem xs={{ startCol: 1, spanCol: 12 }}>
            <Card {...args} />
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  header: (
    <Paper
      elevation={0}
      fullWidth={true}
      backgroundColor="surface-pale"
      roundedCorner={{
        topLeft: true,
        topRight: true,
      }}
    >
      <Stack element="header" direction="row" spacing="sm" paddingX="sm" paddingY="sm">
        <Typography element="h4" size="heading-lg">
          Header
        </Typography>
      </Stack>
    </Paper>
  ),
  children: (
    <Stack element="article" spacing="sm" paddingX="sm" paddingY="sm">
      Card
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      alignItems="stretch"
      spacing="sm"
      paddingX="sm"
      paddingY="sm"
      md={{
        direction: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Button primary={false}>Secondary</Button>
      <Button primary={true}>Primary</Button>
    </Stack>
  ),
  gradeBand: GradeBand.G4_5,
};

export const SubHead: Story = Template.bind({});
SubHead.args = {
  ...Default.args,
  header: (
    <>
      <Stack spacing="sm" paddingX="sm" paddingY="sm">
        <Typography element="h4" size="heading-lg">
          Header
        </Typography>
      </Stack>
      <Paper elevation={0} fullWidth={true} backgroundColor="surface-pale">
        <Stack direction="row" spacing="sm" paddingX="sm" paddingY="sm">
          <Typography element="h5" size="heading-sm">
            Subheader
          </Typography>
        </Stack>
      </Paper>
    </>
  ),
};

export const ImageOnly: Story = Template.bind({});
ImageOnly.args = {
  ...Default.args,
  header: null,
  children: (
    <Stack element="article" spacing="sm" paddingX="sm" paddingY="sm">
      <Image imageSrc="" altText="placeholder" roundedCorners={true} />
    </Stack>
  ),
  footer: null,
};

export const ImageTop: Story = Template.bind({});
ImageTop.args = {
  ...Default.args,
  header: (
    <Stack element="header" paddingX="zero" paddingY="zero" spacing="sm">
      <Image
        imageSrc=""
        altText="placeholder"
        roundedCorners={{
          topAll: true,
        }}
      />
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      spacing="sm"
      paddingX="sm"
      paddingY="sm"
      alignItems="stretch"
      md={{
        direction: 'row',
        justifyContent: 'end',
      }}
    >
      <Button primary={false}>Secondary</Button>
      <Button primary={true}>Primary</Button>
    </Stack>
  ),
};

export const MCQRadio: Story = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.id);
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gap="sm" gutter={true}>
          <GridItem xs={{ startCol: 1, spanCol: 12 }}>
            <Card {...args} />
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

const MCQRadioComponent: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.id);
  };

  return (
    <Stack element="article" spacing="sm" paddingX="sm" paddingY="sm">
      <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
        What is the capital of France?
      </Typography>
      <InputBox
        id="paris"
        type="radio"
        name="capital"
        checked={selectedValue === 'paris'}
        onChange={handleChange}
      >
        Paris
      </InputBox>
      <InputBox
        id="london"
        type="radio"
        name="capital"
        checked={selectedValue === 'london'}
        onChange={handleChange}
      >
        London
      </InputBox>
      <InputBox
        id="berlin"
        type="radio"
        name="capital"
        checked={selectedValue === 'berlin'}
        onChange={handleChange}
      >
        Berlin
      </InputBox>
      <InputBox
        id="rome"
        type="radio"
        name="capital"
        checked={selectedValue === 'rome'}
        onChange={handleChange}
      >
        Rome
      </InputBox>
    </Stack>
  );
};

MCQRadio.args = {
  header: (
    <Paper
      elevation={0}
      fullWidth={true}
      backgroundColor="surface-pale"
      roundedCorner={{
        topLeft: true,
        topRight: true,
      }}
    >
      <Stack direction="row" spacing="sm" paddingX="sm" paddingY="sm">
        <Typography element="h4" size="heading-md">
          Multiple Choice Question
        </Typography>
      </Stack>
    </Paper>
  ),
  children: <MCQRadioComponent />,
  footer: (
    <Stack
      element="footer"
      spacing="sm"
      paddingX="sm"
      paddingY="sm"
      alignItems="stretch"
      md={{
        direction: 'row',
        justifyContent: 'end',
      }}
    >
      <Button primary={true} disabled={true}>
        Submit
      </Button>
    </Stack>
  ),
  gradeBand: GradeBand.G4_5,
};

export const MCQCheckbox: Story = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [checkedValues, setCheckedValues] = useState({
    paris: false,
    london: false,
    berlin: false,
    rome: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCheckedValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gap="sm" gutter={true}>
          <GridItem xs={{ startCol: 1, spanCol: 12 }}>
            <Card {...args}>
              <Paper
                elevation={0}
                fullWidth={true}
                backgroundColor="surface-pale"
                roundedCorner={{
                  topLeft: true,
                  topRight: true,
                }}
              >
                <Stack direction="row" spacing="sm" paddingX="sm" paddingY="sm">
                  <Typography element="h4" size="heading-md">
                    Multiple Choice Question
                  </Typography>
                </Stack>
              </Paper>
              <Stack element="article" spacing="sm" paddingX="sm" paddingY="sm">
                <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
                  What is the capital of France?
                </Typography>
                <InputBox
                  id="paris"
                  type="checkbox"
                  name="capital"
                  checked={checkedValues.paris}
                  onChange={handleChange}
                >
                  Paris
                </InputBox>
                <InputBox
                  id="london"
                  type="checkbox"
                  name="capital"
                  checked={checkedValues.london}
                  onChange={handleChange}
                >
                  London
                </InputBox>
                <InputBox
                  id="berlin"
                  type="checkbox"
                  name="capital"
                  checked={checkedValues.berlin}
                  onChange={handleChange}
                >
                  Berlin
                </InputBox>
                <InputBox
                  id="rome"
                  type="checkbox"
                  name="capital"
                  checked={checkedValues.rome}
                  onChange={handleChange}
                >
                  Rome
                </InputBox>
              </Stack>
              <Stack
                element="footer"
                spacing="sm"
                paddingX="sm"
                paddingY="sm"
                alignItems="stretch"
                md={{
                  direction: 'row',
                  justifyContent: 'end',
                }}
              >
                <Button primary={true} disabled={true}>
                  Submit
                </Button>
              </Stack>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

MCQCheckbox.args = {
  gradeBand: GradeBand.G4_5,
};

export const ShortAnswer: Story = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gap="sm" gutter={true}>
          <GridItem xs={{ startCol: 1, spanCol: 12 }}>
            <Card {...args}>
              <Paper
                elevation={0}
                fullWidth={true}
                backgroundColor="surface-pale"
                roundedCorner={{
                  topLeft: true,
                  topRight: true,
                }}
              >
                <Stack direction="row" spacing="sm" paddingX="sm" paddingY="sm">
                  <Typography element="h4" size="heading-md">
                    Short Answer Question
                  </Typography>
                </Stack>
              </Paper>
              <Stack element="article" spacing="sm" paddingX="sm" paddingY="sm">
                <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
                  What is the capital of France?
                </Typography>
                <Textarea value={textareaValue} onChange={handleTextareaChange} charLimit={100} />
              </Stack>
              <Stack
                element="footer"
                spacing="sm"
                paddingX="sm"
                paddingY="sm"
                alignItems="stretch"
                md={{
                  direction: 'row',
                  justifyContent: 'end',
                }}
              >
                <Button primary={true} disabled={true}>
                  Submit
                </Button>
              </Stack>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

ShortAnswer.args = {
  gradeBand: GradeBand.G4_5,
};

export const SpeechToText: Story = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gap="sm" gutter={true}>
          <GridItem xs={{ startCol: 1, spanCol: 12 }}>
            <Card {...args}>
              <Stack element="article" spacing="sm" paddingX="sm" paddingY="sm">
                <Stack
                  element="header"
                  direction="row"
                  justifyContent="start"
                  paddingX="zero"
                  paddingY="zero"
                  flexWrap="nowrap"
                >
                  <Typography
                    element="span"
                    size="body-lg"
                    spacer={true}
                    spacerSize="body-md"
                    color="brand-deep-magenta"
                    weight={600}
                  >
                    A.
                  </Typography>
                  <Typography
                    element="h5"
                    size="body-lg"
                    spacer={true}
                    spacerSize="body-md"
                    textWrap="pretty"
                  >
                    Prompt text. Body-large size text. Body-large size text. Body-large size text.
                  </Typography>
                </Stack>
                <Textarea
                  value={textareaValue}
                  onChange={handleTextareaChange}
                  charLimit={500}
                  toolbar={
                    <Stack
                      element="header"
                      className="connect__toolbar"
                      alignItems="center"
                      direction="row"
                      justifyContent="space-between"
                      paddingX="sm"
                      paddingY="sm"
                      flexWrap="nowrap"
                    >
                      <IconButton variant="text" disableElevation={true} ariaLabel="Add">
                        <Icon id="add" size="md" />
                      </IconButton>
                      <IconButton variant="contained" color="primary" ariaLabel="Mic">
                        <Icon id="micFilled" size="md" />
                      </IconButton>
                    </Stack>
                  }
                />
              </Stack>
              <Stack
                element="footer"
                spacing="sm"
                paddingX="sm"
                paddingY="sm"
                alignItems="stretch"
                md={{
                  direction: 'row',
                  justifyContent: 'end',
                }}
              >
                <Button primary={true} disabled={true}>
                  Save
                </Button>
              </Stack>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

SpeechToText.args = {
  gradeBand: GradeBand.G4_5,
};
