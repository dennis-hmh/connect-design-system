// @ts-ignore: React is used implicitly in JSX
import React, { useRef, useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Button } from './components/Button/Button';
import { InputBox } from './components/InputBox/InputBox';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import { MultipleChoiceQuestionImage } from './components/MultipleChoiceQuestion/MultipleChoiceQuestionImage';
import { MultipleChoiceQuestionProvider } from './context/MultipleChoiceQuestionProvider';
import { InputText } from './components/InputText/InputText';
import { SelectBox } from './components/SelectBox/SelectBox';
import { ButtonSplit } from './components/ButtonSplit/ButtonSplit';
import { Chip } from './components/Chip/Chip';
import { ConnectTheme } from './components/ConnectTheme';
import { Typography } from './components/Typography/Typography';
import { GradeBand } from './enum/gradeband';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
// import { RiveSimple } from './components/RiveSimple/RiveSimple';
import { RiveEngine } from './components/RiveEngine/RiveEngine';
import { Figure } from './components/Figure/Figure';
import { Image } from './components/Image/Image';
import { Blockquote } from './components/Blockquote/Blockquote';
import { SingleImage } from './components/SingleImage/SingleImage';
import { SingleBlockquote } from './components/SingleBlockquote/SingleBlockquote';
import { Grid } from './components/Grid/Grid';
import GridItem from './components/GridItem/GridItem';
import { Stack } from './components/Stack/Stack';
import './assets/scss/custom.scss';
import { Header } from './components/Header/Header';
import { Alert } from './components/Alert/Alert';
import { useRive } from '@rive-app/react-canvas';

const App: React.FC = () => {
  const themeWrapperRef = useRef(null);

  // State to manage the `animState` input for RiveSimple
  const [animationState, setAnimationState] = useState<number>(0);

  const aiButton = useRive({
    autoplay: true,
    src: 'https://chrisrooke-hmh.github.io/core-public/ai-button/ai_button_playstate.riv',
    stateMachines: 'State Machine 1',
  });

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Header>
          <h1>Welcome to My App</h1>
        </Header>
        <div style={{ width: '100%', height: '1000px', background: 'lightgrey' }}>
          <Grid gutter={true} gap="md" xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <GridItem lg={{ startCol: 1, spanCol: 6 }}>
              <Stack
                lg={{
                  direction: 'row',
                  spacing: 'xs',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <Button primary={true}>Button</Button>
                <Button primary={false}>Button</Button>
                <Button primary={false} iconId="add">Button</Button>
              </Stack>
            </GridItem>
            <GridItem lg={{ startCol: 7, spanCol: 6 }}>
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
                  <Button primary={true}>Button</Button>
                  <Button primary={false}>Button</Button>
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </div>
        <Grid gutter={true} gap="md">
          <GridItem>
            <Button primary iconId="add" iconPosition="before">
              <Typography>Hi there</Typography>
            </Button>
          </GridItem>
          <GridItem>
            <Button primary iconId="add" iconPosition="after">
              <Typography>Hi there</Typography>
            </Button>
          </GridItem>
          <GridItem>
            <Button primary iconId="add" iconPosition="before">
              <Typography>Hi there</Typography>
              <RiveEngine {...aiButton} sizeByHeight />
            </Button>
          </GridItem>
          <GridItem>
            <Button primary disabled iconId="loader" iconPosition="before">
              <Typography>Loading</Typography>
              <RiveEngine {...aiButton} sizeByHeight style={{ opacity: 0 }} />
            </Button>
          </GridItem>
          <GridItem>
            <Button primary>
              <Typography>Generate Summaries</Typography>
              <RiveEngine {...aiButton} sizeByHeight style={{ opacity: 0 }} />
            </Button>
          </GridItem>
          <GridItem>
            <Button primary>
              <Typography opacity="0">Generating</Typography>
              <RiveEngine {...aiButton} sizeByHeight />
            </Button>
          </GridItem>
          <GridItem>
            <Button
              ariaLabel="Icon Button Right Arrow"
              iconId="arrowUp"
              iconSize="md"
              primary
              submit="button"
            >
              Hi there
            </Button>
          </GridItem>
          <GridItem>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
              }}
            >
              <Image
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
              />
            </div>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <Image
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
              }}
            >
              <Figure>
                <Image
                  imageSrc="https://picsum.photos/600/400"
                  altText="A random picture from Lorem Picsum"
                />
              </Figure>
            </div>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <Figure>
                <Image
                  imageSrc="https://picsum.photos/600/400"
                  altText="A random picture from Lorem Picsum"
                />
              </Figure>
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
              }}
            >
              <Image
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
                contain
              />
            </div>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <Image
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
                contain
              />
            </div>
          </GridItem>
          <GridItem>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
              }}
            >
              <Figure>
                <Image
                  imageSrc="https://picsum.photos/600/400"
                  altText="A random picture from Lorem Picsum"
                  contain
                />
              </Figure>
            </div>
            <div
              style={{
                width: '500px',
                height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <Figure>
                <Image
                  imageSrc="https://picsum.photos/600/400"
                  altText="A random picture from Lorem Picsum"
                  contain
                />
              </Figure>
            </div>
          </GridItem>
          <GridItem>
            <Stack
              xs={{
                justifyContent: 'space-between',
              }}
              md={{
                direction: 'row',
                spacing: 'md',
                justifyContent: 'center',
              }}
              lg={{
                justifyContent: 'start',
                flexWrap: 'nowrap',
              }}
            >
              <SingleImage
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
                caption="A random picture chosen by Lorem Picsum"
                cite="https://picsum.photos/"
              />
              <SingleImage
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
                caption="A random picture chosen by Lorem Picsum"
                cite="https://picsum.photos/"
              />
              <SingleImage
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
                caption="A random picture chosen by Lorem Picsum"
                cite="https://picsum.photos/"
              />
            </Stack>
          </GridItem>
          <GridItem>
            {/* eslint-disable-next-line no-console */}
            <Alert iconId="info" handleClick={() => console.log('click')}>
              Hi there
            </Alert>
          </GridItem>
          <GridItem>
            Hi
            {/* <RiveSimple
              srcDefault="https://chrisrooke-hmh.github.io/core-public/animations/boy.riv"
              descDefault="hi"
              src23="https://chrisrooke-hmh.github.io/core-public/animations/dino.riv"
              desc23="Grade 2-3"
              src45="https://chrisrooke-hmh.github.io/core-public/animations/cat.riv"
              desc45="Grade 4-5"
              src68="https://chrisrooke-hmh.github.io/core-public/animations/viking.riv"
              desc68="Grade 6-8"
              src912="https://chrisrooke-hmh.github.io/core-public/animations/watch.riv"
              desc912="Grade 9-12"
              hidePlayPause={true}
              autoplay={true}
            /> */}
            {/* <GridItem>
            <RiveEngine src="/rive/timer.riv" desc="stopwatch gently floating" />
          </GridItem> */}
            {/* <GridItem>
            <div style={{ height: "700px", width: "fit-content", maxWidth: "100%", background: "lightgrey", overflow: "hidden", marginTop: "2rem" }}>
              <RiveEngine src="/rive/timer.riv" desc="stopwatch gently floating" sizeByHeight/>
            </div>
          </GridItem>
          <GridItem>
            <div style={{ width: "700px", maxWidth: "100%", background: "lightgrey", overflow: "hidden", marginTop: "2rem"  }}>
              <RiveEngine src="/rive/timer.riv" desc="stopwatch gently floating" />
            </div>
          </GridItem>
          <GridItem>
            <div style={{ width: "700px", height: "500px", maxWidth: "100%", background: "lightgrey", overflow: "hidden", marginTop: "2rem"  }}>
              <RiveEngine src="/rive/timer.riv" desc="stopwatch gently floating" contain/>
            </div>
          </GridItem>
          <GridItem>
            <div style={{ width: "500px", height: "700px", maxWidth: "100%", background: "lightgrey", overflow: "hidden", marginTop: "2rem"  }}>
              <RiveEngine src="/rive/timer.riv" desc="stopwatch gently floating" contain/>
            </div>
          </GridItem> */}
            {/* <RiveSimple
              srcDefault="/rive/timer.riv"
              descDefault="hi"
              hidePlayPause={true}
              autoplay={true}
              inputs={{ animationState }} 
            /> */}
          </GridItem>
          <GridItem>
            <button onClick={() => setAnimationState(0)}>Set animState to 0</button>
            <button onClick={() => setAnimationState(1)}>Set animState to 1</button>
            <button onClick={() => setAnimationState(2)}>Set animState to 2</button>
          </GridItem>
          <GridItem>
            <button onClick={() => setAnimationState(0)}>Set animState to 0</button>
            <button onClick={() => setAnimationState(1)}>Set animState to 1</button>
            <button onClick={() => setAnimationState(2)}>Set animState to 2</button>
          </GridItem>
          <GridItem>
            <div>Current animation state: {animationState}</div>
          </GridItem>
          <GridItem>
            <ProgressBar value={30} />
            <br />
            <br />
            <SingleImage
              imageSrc="https://picsum.photos/600/400"
              altText="A random picture from Lorem Picsum"
              caption="A random picture chosen by Lorem Picsum"
              cite="https://picsum.photos/"
            />
            <SingleBlockquote caption="this is a caption" cite="this is a citation">
              <Typography element="p">The quick brown fox jumps over the laxy dog</Typography>
              <Typography element="h3">A heading in a blockquote</Typography>
              <Typography element="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula erat vel
                felis convallis facilisis. Integer laoreet maximus iaculis. Nam lacinia eros
                suscipit, dignissim quam quis, laoreet tellus. Aliquam non eros lorem. Praesent
                cursus hendrerit sapien ac bibendum. Sed vitae mi a ex aliquam pharetra. Mauris
                molestie tincidunt ex a sagittis. Suspendisse eu tristique magna. Integer sagittis
                tortor in dapibus luctus. Etiam pharetra, quam sit amet ultricies tincidunt, eros
                est facilisis dui, quis accumsan nulla odio sit amet sapien.
              </Typography>
            </SingleBlockquote>
            <br />
            <Chip num={10}>Word</Chip>
            <br />
            <Figure caption="This is the caption for Zelda" cite="- This is the citation for Zelda">
              <Image imageSrc="/images/zelda.jpg" altText="This is alt text for Zelda" />
            </Figure>
            <Figure cite="This is the cite for the blockquote">
              <Blockquote>This is a sample blockquote for Zelda</Blockquote>
            </Figure>
            <Stack
              md={{
                direction: 'row',
                spacing: 'md',
              }}
            >
              <Button primary={true} disabled={false}>
                Click
              </Button>
              <Button primary={false} disabled={false}>
                Click
              </Button>
              <Button primary={true} correct={true}>
                Submitted
              </Button>
              <Button primary={true} incorrect={true}>
                Submitted
              </Button>
              <Button primary={false} correct={true}>
                Submitted
              </Button>
              <Button primary={false} incorrect={true}>
                Submitted
              </Button>
              <Button
                primary={true}
                iconId={'loader'}
                iconPosition={'before'}
                additionalClass="connect__button-loading"
              >
                Loading
              </Button>
            </Stack>
            <br />
            <InputBox
              type={'checkbox'}
              id={'text-id-1'}
              name={'text-name'}
              disabled={false}
              correct={false}
              incorrect={false}
            >
              The mouse rides a bike'
            </InputBox>
            <br />
            <br />
            <br />
            <MultipleChoiceQuestionProvider>
              <InputBox type={'radio'} id={'text-id-2'} name={'radio-name'}>
                The mouse rides a bike 1
              </InputBox>
              <br />
              <InputBox type={'radio'} id={'text-id-3'} name={'radio-name'}>
                The mouse rides a bike 2
              </InputBox>
              <br />
              <InputBox type={'radio'} id={'text-id-4'} name={'radio-name'}>
                The mouse rides a bike 3
              </InputBox>
              <br />
              <InputBox type={'radio'} id={'text-id-5'} name={'radio-name'}>
                The mouse rides a bike 4
              </InputBox>
            </MultipleChoiceQuestionProvider>
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
            <MultipleChoiceQuestionProvider>
              <MultipleChoiceQuestion type={'checkbox'} id={'msq-id-1'} name={'mcq-name'}>
                The mouse rides a bike
              </MultipleChoiceQuestion>
              <MultipleChoiceQuestion
                type={'checkbox'}
                id={'msq-id-2'}
                name={'mcq-name'}
                correct={true}
              >
                The mouse rides a bike
              </MultipleChoiceQuestion>
              <br />
              <MultipleChoiceQuestionImage
                type={'checkbox'}
                id={'msq-id-3'}
                name={'mcq-name'}
                correct={true}
              >
                <Image imageSrc="" altText="This is alt text" />
              </MultipleChoiceQuestionImage>
            </MultipleChoiceQuestionProvider>
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
                data={[
                  { label: 'My First Label', value: 'my-first-value' },
                  { label: 'My Second Label', value: 'my-second-value' },
                  { label: 'My Third Label', value: 'my-third-value' },
                ]}
              >
                My Split Button
              </ButtonSplit>
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
                <Button primary={true}>Button</Button>
                <Button primary={false}>Button</Button>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

export default App;
