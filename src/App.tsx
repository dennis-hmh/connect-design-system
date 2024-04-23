import React from 'react';
import { Button } from './components/Button';
import { InputBox } from './components/InputBox';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion';
import { InputText } from './components/InputText';
import { Card } from './components/Card';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Stack from './components/Stack';
import Typography from './components/Typography';
import './assets/scss/custom.scss';

const App = () => {
  return (
    <>
      <div className="connect__g45">
        <Button primary={true} children={'submitted'} correct={true} />
      </div>
      <br />
      <br />
      <div className="connect__g45" style={{ background: '#38F', padding: 20 }}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className="connect__g45">
        <Button children={'Click'} primary={true} disabled={false} />
        <br />
        <br />
        <br />
        <InputBox
          type={'checkbox'}
          id={'text-id-1'}
          name={'text-name'}
          value={'The mouse rides a bike'}
          checked={true}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <InputBox
          type={'radio'}
          id={'text-id-2'}
          name={'radio-name'}
          value={'The mouse rides a bike second'}
          checked={false}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <InputBox
          type={'radio'}
          id={'text-id-3'}
          name={'radio-name'}
          value={'The mouse rides a bike first'}
          checked={false}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={false}
          id={'msq-id-1'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={false}
          id={'msq-id-2'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={true}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={true}
          id={'msq-id-3'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={true}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <br />
        <InputText correct={false} incorrect={false} value={''} disabled={false} />
        <InputText correct={false} incorrect={false} value={''} number={true} />
        <br />
        <br />
        <InputText correct={true} incorrect={false} value={'correct here'} disabled={false} />
        <InputText correct={false} incorrect={true} value={'incorrect here'} disabled={false} />
        <br />
        <br />
        <InputText correct={false} incorrect={false} value={'disabled answer'} disabled={true} />
      </div>
      <Grid gutter={true} gap="xl">
        <GridItem className="connect__gk" lg={{ startCol: 1, spanCol: 6 }}>
          <Stack>
            <Typography component="h1">Grade k H1</Typography>
            <Typography component="h2">h2</Typography>
            <Typography component="h3">h3</Typography>
            <Typography component="h4">h4</Typography>
            <Typography component="p">I am a paragraph</Typography>
            <Typography component="h2" size="heading-xl">
              h2 styled as h1
            </Typography>
            <Typography component="h3" size="heading-lg">
              h3 styled as h2
            </Typography>
            <Typography component="h4" size="heading-md">
              h4 styled as h3
            </Typography>
            <Stack
              lg={{
                direction: 'row',
                spacing: 'xs',
                alignItems: 'start',
                justifyContent: 'start',
              }}
            >
              <Button primary={true} children={'Button'} />
              <Button primary={false} children={'Button'} />
            </Stack>
          </Stack>
        </GridItem>

        <GridItem className="connect__g23" lg={{ startCol: 7, spanCol: 6 }}>
          <Stack>
            <Typography component="h1" weight={900}>
              Grade 2-3 H1
            </Typography>
            <Typography component="h2">h2</Typography>
            <Typography component="h3" weight={400}>
              h3
            </Typography>
            <Typography component="h4">h4</Typography>
            <Typography component="p">I am a paragraph</Typography>
            <Typography component="h2" size="heading-xl">
              h2 styled as h1
            </Typography>
            <Typography component="h3" size="heading-lg">
              h3 styled as h2
            </Typography>
            <Typography component="h4" size="heading-md">
              h4 styled as h3
            </Typography>
            <Stack
              lg={{
                direction: 'row',
                spacing: 'xs',
                alignItems: 'start',
                justifyContent: 'start',
              }}
            >
              <Button primary={true} children={'Button'} />
              <Button primary={false} children={'Button'} />
            </Stack>
          </Stack>
        </GridItem>

        <GridItem className="connect__g68" lg={{ startCol: 1, spanCol: 6 }}>
          <Stack>
            <Typography component="h1">Grade 6-8 H1</Typography>
            <Typography component="h2">h2</Typography>
            <Typography component="h3">h3</Typography>
            <Typography component="h4">h4</Typography>
            <Typography component="p">I am a paragraph</Typography>
            <Typography component="h2" size="heading-xl">
              h2 styled as h1
            </Typography>
            <Typography component="h3" size="heading-lg">
              h3 styled as h2
            </Typography>
            <Typography component="h4" size="heading-md">
              h4 styled as h3
            </Typography>
            <Stack
              lg={{
                direction: 'row',
                spacing: 'xs',
                alignItems: 'start',
                justifyContent: 'start',
              }}
            >
              <Button primary={true} children={'Button'} />
              <Button primary={false} children={'Button'} />
            </Stack>
          </Stack>
        </GridItem>

        <GridItem className="connect__g912" lg={{ startCol: 7, spanCol: 6 }}>
          <Stack>
            <Typography component="h1" color="blue-s50">
              Grade 9-12 h1
            </Typography>
            <Typography component="h2" color="green-s50">
              h2
            </Typography>
            <Typography component="h3" color="orange-s50">
              h3
            </Typography>
            <Typography component="h4" color="turquoise-c50">
              h4
            </Typography>
            <Typography component="p">I am a paragraph</Typography>
            <Typography component="h2" size="heading-xl">
              h2 styled as h1
            </Typography>
            <Typography component="h3" size="heading-lg">
              h3 styled as h2
            </Typography>
            <Typography component="h4" size="heading-md">
              h4 styled as h3
            </Typography>
            <Stack
              lg={{
                direction: 'row',
                spacing: 'xs',
                alignItems: 'start',
                justifyContent: 'start',
              }}
            >
              <Button primary={true} children={'Button'} />
              <Button primary={false} children={'Button'} />
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
