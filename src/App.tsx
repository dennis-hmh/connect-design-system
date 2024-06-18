import React, { useRef } from 'react';
import { Button } from './components/Button';
import { InputBox } from './components/InputBox';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion';
import { InputText } from './components/InputText';
import { Card } from './components/Card';
import { SelectBox } from './components/SelectBox';
import { ButtonSplit } from './components/ButtonSplit';
import { Chip } from './components/Chip';
import { ConnectTheme } from './components/ConnectTheme';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Stack from './components/Stack';
import Typography from './components/Typography';
import { GradeBand } from './enum/gradeband';
import { ProgressBar } from './components/ProgressBar';
import './assets/scss/custom.scss';

const App = () => {
  const themeWrapperRef = useRef(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gutter={true} gap="md">
          <GridItem>
            <ProgressBar value={30} />
            <br />
            <br />
            <Chip children={'word'} num={10} />
            <br />
            <Card
              image={true}
              imageAlt="Description of the image"
              imageCaption="Caption for the image"
              headerElement="h3"
              headerContent="This is the Card Header"
              mainContent="This is the main content of the card"
              footerContent="This is the footer content"
            />
            <Card
              image={false}
              imageAlt="Description of the image"
              imageCaption="Caption for the image"
              headerContent="This is the Card Header"
              mainContent="This is the main content of the card"
              footerContent="This is the footer content"
            />
            <Stack
              md={{
                direction: 'row',
                spacing: 'md',
              }}
            >
              <Button children={'Click'} primary={true} disabled={false} />
              <Button children={'Click'} primary={false} disabled={false} />
              <Button primary={true} children={'submitted'} correct={true} iconId={'correct'} iconPosition={'after'} />
              <Button primary={true} children={'submitted'} incorrect={true} iconId={'incorrect'} iconPosition={'after'} />
              <Button primary={false} children={'submitted'} correct={true} />
              <Button primary={false} children={'submitted'} incorrect={true} />
            </Stack>
            <br />
            <InputBox
              type={'checkbox'}
              id={'text-id-1'}
              name={'text-name'}
              disabled={false}
              correct={false}
              incorrect={false}
              children={'The mouse rides a bike'}
            />
            <br />
            <br />
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-2'}
              name={'radio-name'}
              children={'The mouse rides a bike 1'}
            />
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-3'}
              name={'radio-name'}
              children={'The mouse rides a bike 2'}
            />
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-4'}
              name={'radio-name'}
              children={'The mouse rides a bike 3'}
            />
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-5'}
              name={'radio-name'}
              children={'The mouse rides a bike 4'}
            />
            <br />
            <br />
            <br />
            {/* <label>
              <input type="radio" name="test" value="one" />
              Test 1
            </label>
            <label>
              <input type="radio" name="test" value="two" />
              Test 2
            </label>
            <label>
              <input type="radio" name="test" value="three" />
              Test 3
            </label>
            <br />
            <br />
            <br /> */}
            <MultipleChoiceQuestion
              type={'checkbox'}
              image={false}
              id={'msq-id-1'}
              name={'mcq-name'}
              children={'The mouse rides a bike'}
            />
            <MultipleChoiceQuestion
              type={'checkbox'}
              image={false}
              id={'msq-id-2'}
              name={'mcq-name'}
              correct={true}
              children={'The mouse rides a bike'}
            />
            <MultipleChoiceQuestion
              type={'checkbox'}
              image={true}
              id={'msq-id-3'}
              name={'mcq-name'}
              correct={true}
              children={'The mouse rides a bike'}
            />
            <br />
            <br />
            <Stack
              md={{
                direction: 'row',
                spacing: 'md',
              }}
            >
              <InputText correct={false} incorrect={false} disabled={false} />
              <InputText correct={false} incorrect={false} number={true} />
              <InputText correct={false} incorrect={false} disabled={true} />
              <InputText correct={true} incorrect={false} disabled={false} />
              <InputText correct={false} incorrect={true} disabled={false} />
            </Stack>
            <br />
            <Stack
              md={{
                spacing: 'md',
              }}
            >
              <ButtonSplit
                children={'My Split Button'}
                data={[
                  { label: 'My First Label', value: 'my-first-value' },
                  { label: 'My Second Label', value: 'my-second-value' },
                  { label: 'My Third Label', value: 'my-third-value' },
                ]}
              />
              <SelectBox
                defaultValue={'my-third-value'}
                data={[
                  { label: 'My First Label', value: 'my-first-value' },
                  { label: 'My Second Label', value: 'my-second-value' },
                  { label: 'My Third Label', value: 'my-third-value' },
                ]}
              />
            </Stack>
          </GridItem>
          <GridItem lg={{ startCol: 1, spanCol: 6 }}>
            <Stack>
              <Typography element="h1">Grade k H1</Typography>
              <Typography element="h2">h2</Typography>
              <Typography element="h3">h3</Typography>
              <Typography element="h4">h4</Typography>
              <Typography element="p">I am a paragraph</Typography>
              <Typography element="h2" size="heading-xl">
                h2 styled as h1
              </Typography>
              <Typography element="h3" size="heading-lg">
                h3 styled as h2
              </Typography>
              <Typography element="h4" size="heading-md">
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
      </div>
    </ConnectTheme>
  );
};

export default App;
