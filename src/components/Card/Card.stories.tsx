import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Card, CardProps } from './Card';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Image } from '../Image/Image';
import { MultipleChoiceQuestion } from '../MultipleChoiceQuestion/MultipleChoiceQuestion';
import { MultipleChoiceQuestionProvider } from '../../context/MultipleChoiceQuestionProvider';
import { Textarea } from '../Textarea/Textarea';
import { Icon } from '../Icon/Icon';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
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
    <Paper elevation={0} fullWidth={true} backgroundColor="gray-c10">
      <Stack
        element="header"
        xs={{ direction: 'row', spacing: 'md', paddingX: 'md', paddingY: 'md' }}
      >
        <Typography element="h4" size="heading-lg">
          Header
        </Typography>
      </Stack>
    </Paper>
  ),
  children: (
    <Stack
      element="article"
      xs={{
        direction: 'column',
        spacing: 'md',
        paddingX: 'md',
        paddingY: 'md',
      }}
    >
      Card
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      xs={{
        alignItems: 'stretch',
        direction: 'column',
        spacing: 'md',
        paddingX: 'md',
        paddingY: 'md',
      }}
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
      <Stack xs={{ direction: 'column', spacing: 'md', paddingX: 'md', paddingY: 'md' }}>
        <Typography element="h4" size="heading-lg">
          Header
        </Typography>
      </Stack>
      <Paper elevation={0} fullWidth={true} backgroundColor="gray-c10">
        <Stack xs={{ direction: 'row', spacing: 'md', paddingX: 'md', paddingY: 'md' }}>
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
    <Stack
      element="article"
      xs={{ direction: 'column', spacing: 'sm', paddingX: 'sm', paddingY: 'sm' }}
    >
      <Image imageSrc="" altText="placeholder" />
    </Stack>
  ),
  footer: null,
};

export const ImageTop: Story = Template.bind({});
ImageTop.args = {
  ...Default.args,
  header: (
    <Stack
      element="header"
      xs={{ direction: 'column', spacing: 'sm', paddingX: 'zero', paddingY: 'zero' }}
    >
      <Image imageSrc="" altText="placeholder" />
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      xs={{
        alignItems: 'stretch',
        direction: 'column',
        spacing: 'md',
        paddingX: 'md',
        paddingY: 'md',
      }}
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

export const MCQRadio: Story = Template.bind({});
MCQRadio.args = {
  ...Default.args,
  header: (
    <Paper elevation={0} fullWidth={true} backgroundColor="gray-c10">
      <Stack xs={{ direction: 'row', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}>
        <Typography element="h4" size="heading-md">
          Multiple Choice Question
        </Typography>
      </Stack>
    </Paper>
  ),
  children: (
    <Stack
      element="article"
      xs={{ direction: 'column', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}
    >
      <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
        What is the capital of France?
      </Typography>
      <MultipleChoiceQuestionProvider>
        <MultipleChoiceQuestion id="paris" type="radio" name="capital">
          Paris
        </MultipleChoiceQuestion>
        <MultipleChoiceQuestion id="london" type="radio" name="capital">
          London
        </MultipleChoiceQuestion>
        <MultipleChoiceQuestion id="berlin" type="radio" name="capital">
          Berlin
        </MultipleChoiceQuestion>
        <MultipleChoiceQuestion id="rome" type="radio" name="capital">
          Rome
        </MultipleChoiceQuestion>
      </MultipleChoiceQuestionProvider>
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      xs={{
        alignItems: 'stretch',
        direction: 'column',
        spacing: 'sm',
        paddingX: 'sm',
        paddingY: 'sm',
      }}
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
};

export const MCQCheckbox: Story = Template.bind({});
MCQCheckbox.args = {
  ...MCQRadio.args,
  children: (
    <Stack
      element="article"
      xs={{ direction: 'column', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}
    >
      <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
        What is the capital of France?
      </Typography>
      <MultipleChoiceQuestionProvider>
        <MultipleChoiceQuestion id="paris" type="checkbox" name="capital">
          Paris
        </MultipleChoiceQuestion>
        <MultipleChoiceQuestion id="london" type="checkbox" name="capital">
          London
        </MultipleChoiceQuestion>
        <MultipleChoiceQuestion id="berlin" type="checkbox" name="capital">
          Berlin
        </MultipleChoiceQuestion>
        <MultipleChoiceQuestion id="rome" type="checkbox" name="capital">
          Rome
        </MultipleChoiceQuestion>
      </MultipleChoiceQuestionProvider>
    </Stack>
  ),
};

export const ShortAnswer: Story = Template.bind({});
ShortAnswer.args = {
  ...Default.args,
  header: (
    <Paper elevation={0} fullWidth={true} backgroundColor="gray-c10">
      <Stack xs={{ direction: 'row', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}>
        <Typography element="h4" size="heading-md">
          Short Answer Question
        </Typography>
      </Stack>
    </Paper>
  ),
  children: (
    <Stack
      element="article"
      xs={{ direction: 'column', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}
    >
      <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
        What is the capital of France?
      </Typography>
      <Textarea characterCount characterLimit={100} />
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      xs={{
        alignItems: 'stretch',
        direction: 'column',
        spacing: 'md',
        paddingX: 'md',
        paddingY: 'md',
      }}
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
};

export const SpeechToText: Story = Template.bind({});
SpeechToText.args = {
  ...ShortAnswer.args,
  header: (
    <Paper elevation={0} fullWidth={true} backgroundColor="gray-c10">
      <Stack xs={{ direction: 'row', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}>
        <Typography element="h4" size="heading-md">
          Speech To Text Question
        </Typography>
      </Stack>
    </Paper>
  ),
  children: (
    <Stack
      element="article"
      xs={{ direction: 'column', spacing: 'sm', paddingX: 'md', paddingY: 'md' }}
    >
      <Typography element="h5" size="body-lg" spacer={true} spacerSize="body-md">
        What is the capital of France?
      </Typography>
      <Textarea
        characterCount
        characterLimit={500}
        toolbar={
          <Stack
            element="header"
            className="connect__toolbar"
            xs={{
              alignItems: 'center',
              justifyContent: 'space-between',
              direction: 'row',
              flexWrap: 'nowrap',
              paddingX: 'md',
              paddingY: 'sm',
            }}
          >
            <Icon ud="add" />
            <ButtonMenu iconId="mic" backgroundColor="connect__blue-s50" fill="white" />
          </Stack>
        }
      />
    </Stack>
  ),
  footer: (
    <Stack
      element="footer"
      xs={{
        alignItems: 'stretch',
        direction: 'column',
        spacing: 'md',
        paddingX: 'md',
        paddingY: 'md',
      }}
      md={{
        direction: 'row',
        justifyContent: 'end',
      }}
    >
      <Button primary={true}>Save</Button>
    </Stack>
  ),
};
