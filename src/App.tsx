import React, { useRef } from 'react';
import { Button } from './components/Button/Button';
import { InputBox } from './components/InputBox/InputBox';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import { InputText } from './components/InputText/InputText';
import { Card } from './components/Card/Card';
import { SelectBox } from './components/SelectBox/SelectBox';
import { ButtonSplit } from './components/ButtonSplit/ButtonSplit';
import { Chip } from './components/Chip/Chip';
import { ConnectTheme } from './components/ConnectTheme';
import { Typography } from './components/Typography/Typography';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Figure } from './components/Figure/Figure';
import { Image } from './components/Image/Image';
import { Blockquote } from './components/Blockquote/Blockquote';
import { SingleBlockquote } from './components/SingleBlockquote/SingleBlockquote';
import Grid from './components/Grid/Grid';
import GridItem from './components/GridItem';
import Stack from './components/Stack/Stack';
import './assets/scss/custom.scss';
import { GradeBand } from './enum/gradeband';

const App = () => {
  const themeWrapperRef = useRef(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid gutter={true} gap="md">
          <GridItem>
            <ProgressBar value={30} />
            <br />
            <SingleBlockquote caption="this is a caption" cite="this is a citation">
              <Typography element="p">The quick brown fox jumps over the laxy dog</Typography>
              <Typography element="h3">A heading in a blockquote</Typography>
              <Typography element="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula erat vel felis convallis facilisis. Integer laoreet maximus iaculis. Nam lacinia eros suscipit, dignissim quam quis, laoreet tellus. Aliquam non eros lorem. Praesent cursus hendrerit sapien ac bibendum. Sed vitae mi a ex aliquam pharetra. Mauris molestie tincidunt ex a sagittis. Suspendisse eu tristique magna. Integer sagittis tortor in dapibus luctus. Etiam pharetra, quam sit amet ultricies tincidunt, eros est facilisis dui, quis accumsan nulla odio sit amet sapien.</Typography>
            </SingleBlockquote>
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
            <Figure
              children={
                <Image imageSrc="../../images/zelda.jpg" altText="This is alt text for Zelda" />
              }
              imageCaption="This is the caption for Zelda"
              cite="- This is the citation for Zelda"
            />
            <Figure
              children={<Blockquote children="This is a sample blockquote for Zelda" />}
              cite="This is the cite for the blockquote"
            />
            <Stack
              md={{
                direction: 'row',
                spacing: 'md',
              }}
            >
              <Button children={'Click'} primary={true} disabled={false} />
              <Button children={'Click'} primary={false} disabled={false} />
              <Button
                primary={true}
                children={'submitted'}
                correct={true}
                iconId={'correct'}
                iconPosition={'after'}
              />
              <Button
                primary={true}
                children={'submitted'}
                incorrect={true}
                iconId={'incorrect'}
                iconPosition={'after'}
              />
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
              <InputText correct={false} defaultText={'works?'} />
              <InputText correct={false} number={true} />
              <InputText correct={false} incorrect={false} />
              <InputText correct={true} />
              <InputText correct={false} incorrect={true} />
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
