// @ts-ignore: React is used implicitly in JSX
import React, { useRef, useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Button } from './components/Button/Button';
import { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
import { InputBox } from './components/InputBox/InputBox';
import { InputText } from './components/InputText/InputText';
import { SelectBox } from './components/SelectBox/SelectBox';
import { Chip } from './components/Chip/Chip';
import { ConnectTheme } from './components/ConnectTheme';
import { Typography } from './components/Typography/Typography';
import { GradeBand } from './enum/gradeband';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { RiveEngine } from './components/RiveEngine/RiveEngine';
import { Image } from './components/Image/Image';
import { Icon } from './components/Icon/Icon';
import { Dialog } from './components/Dialog/Dialog';
import { Grid } from './components/Grid/Grid';
import GridItem from './components/GridItem/GridItem';
import { Stack } from './components/Stack/Stack';
import './assets/scss/custom.scss';
import { Alert } from './components/Alert/Alert';
import { useRive } from '@rive-app/react-canvas';
import { IconButton } from './components/IconButton/IconButton';

const App: React.FC = () => {
  const themeWrapperRef = useRef(null);
  const dialogRef = useRef(null);

  // State to manage the `animState` input for RiveSimple
  const [animationState, setAnimationState] = useState<number>(0);

  const aiButton = useRive(
    {
      autoplay: true,
      src: 'https://chrisrooke-hmh.github.io/core-public/ai-button/ai_button_playstate.riv',
      stateMachines: 'State Machine 1',
    },
    {
      fitCanvasToArtboardHeight: true,
    },
  );

  const studentPicker = useRive(
    {
      autoplay: true,
      src: 'https://hmh-eodrisceoil.github.io/hmh-rive/rive-react-test/dist/rive/student_picker.riv',
      stateMachines: 'State Machine 1',
    },
    {
      fitCanvasToArtboardHeight: true,
    },
  );

  const handleDialogClick = () => {
    // Open the dialog on button click
    document.querySelector<HTMLDialogElement>('[data-testid="dialogTest"]')?.showModal();
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <ConnectTheme gradeBand={GradeBand.G6_8} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <div style={{ width: '100%', height: '1000px', background: 'lightgrey' }}>
          <Grid gutter={true} gap="md" xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <GridItem lg={{ startCol: 1, spanCol: 6 }}>
              <Stack
                xs={{
                  direction: 'row',
                  spacing: 'xs',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
                lg={{
                  direction: 'column',
                }}
              >
                <Button variant="contained" color="primary">
                  Button
                </Button>
                <Button variant="outlined" color="secondary">
                  Button
                </Button>
                <Button variant="outlined" color="secondary">
                  <Icon size="md" id="add" />
                  <Typography>Button</Typography>
                </Button>
                <IconButton variant='contained' color='primary' ariaLabel='add' classes={isClicked ? 'connect__button-activated' : ''} onClick={handleClick}
>
                  <Icon size="md" id="add" />
                </IconButton>
                <ButtonGroup
                  ariaLabel="Primary Button Group"
                  color="primary"
                  orientation="horizontal"
                  // type="button"
                  variant="contained"
                >
                  <Button>
                    Option 1
                  </Button>
                  <Button>
                    Option 2
                  </Button>
                </ButtonGroup>

              </Stack>
            </GridItem>
            <GridItem lg={{ startCol: 7, spanCol: 6 }}>
              <Stack
                xs={{
                  direction: 'row',
                  spacing: 'xs',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
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
                  xs={{
                    direction: 'row',
                    spacing: 'xs',
                    alignItems: 'start',
                    justifyContent: 'start',
                  }}
                >
                  <Button variant="contained" color="primary">
                    <Typography>Button</Typography>
                  </Button>
                  <Button variant="outlined" color="secondary">
                    <Typography>Button</Typography>
                  </Button>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem lg={{ startCol: 1, spanCol: 6 }}>
              <Button variant="contained" color="primary" onClick={handleDialogClick}>
                <Typography>Activate Dialog</Typography>
              </Button>
              <Dialog ref={dialogRef} iconId="add" heading="test dialog" dataTestId="dialogTest">
                hi there
              </Dialog>
            </GridItem>
          </Grid>
        </div>
        <Grid gutter={true} gap="md">
          <GridItem>
            <Button color="primary" variant="contained">
              <Icon size="md" id="add" />
              <Typography>Hi there</Typography>
            </Button>
          </GridItem>
          <GridItem>
            <Button color="secondary" variant="outlined">
              <Typography>Hi there</Typography>
              <Icon size="md" id="add" />
            </Button>
          </GridItem>
          <GridItem>
            <Button color="primary" variant="contained">
              <Typography>Hi there</Typography>
              <RiveEngine {...aiButton} sizeByHeight />
            </Button>
          </GridItem>
          <GridItem>
            <Button color="secondary" variant="outlined">
              <Typography>Loading</Typography>
              <RiveEngine {...aiButton} sizeByHeight style={{ opacity: 0 }} />
            </Button>
          </GridItem>
          <GridItem>
            <Button color="primary" variant="contained">
              <Typography>Generate Summaries</Typography>
              <RiveEngine {...aiButton} sizeByHeight style={{ opacity: 0 }} />
            </Button>
          </GridItem>
          <GridItem>
            <Button color="primary" variant="contained">
              <Typography opacity="0">Generating</Typography>
              <RiveEngine {...aiButton} sizeByHeight />
            </Button>
          </GridItem>
          <GridItem>
            <Button ariaLabel="Icon Button Right Arrow" color="primary" type="button">
              <Icon size="md" id="arrowUp" />
              <Typography>Hi there</Typography>
            </Button>
          </GridItem>
          <GridItem>
            <div
              style={{
                width: '700px',
                height: '300px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
              }}
            >
              {/* <Image
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
              /> */}
              <RiveEngine sizeByHeight {...studentPicker} desc="student picker animation" />
            </div>
            {/* <div
              style={{
                width: '500px',
                // height: '200px',
                backgroundColor: 'lightgrey',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <Image
                imageSrc="https://picsum.photos/600/400"
                altText="A random picture from Lorem Picsum"
              />
            </div> */}
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
            <br />
            <Chip num={10}>Word</Chip>
            <br />
            <Stack
              xs={{
                direction: 'row',
                spacing: 'xs',
                alignItems: 'center',
                justifyContent: 'start',
              }}
            >
              <Button variant="contained" color="primary">
                <Typography>Click</Typography>
              </Button>
              <Button variant="outlined" color="secondary">
                <Typography>Click</Typography>
              </Button>
              <Button variant="contained" color="positive">
                <Typography>Submitted</Typography>
              </Button>
              <Button variant="contained" color="negative">
                <Typography>Submitted</Typography>
              </Button>
              <Button variant="outlined" color="positive">
                <Typography>Submitted</Typography>
              </Button>
              <Button variant="outlined" color="negative">
                <Typography>Submitted</Typography>
              </Button>
              <Button classes="connect__button-loading">
                <Icon size="md" id="loader" />
                <Typography>Loading</Typography>
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
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike'
            </InputBox>
            <br />
            <br />
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-2'}
              name={'radio-name'}
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike 1
            </InputBox>
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-3'}
              name={'radio-name'}
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike 2
            </InputBox>
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-4'}
              name={'radio-name'}
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike 3
            </InputBox>
            <br />
            <InputBox
              type={'radio'}
              id={'text-id-5'}
              name={'radio-name'}
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike 4
            </InputBox>
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
            <InputBox
              type={'checkbox'}
              id={'msq-id-1'}
              name={'mcq-name'}
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike
            </InputBox>
            <InputBox
              type={'checkbox'}
              id={'msq-id-2'}
              name={'mcq-name'}
              correct={true}
              checked={false}
              onChange={() => {}}
            >
              The mouse rides a bike
            </InputBox>
            <br />
            <Image imageSrc="" altText="This is alt text" />
            <br />
            <br />
            <Stack
              md={{
                direction: 'row',
                spacing: 'md',
              }}
            >
              <InputText correct={false} value={'works?'} />
              <InputText correct={false} number={true} value="" />
              <InputText correct={false} incorrect={false} value="" />
              <InputText correct={true} value="" />
              <InputText correct={false} incorrect={true} value="" />
            </Stack>
            <br />
            <Stack
              md={{
                spacing: 'md',
              }}
            >
              <SelectBox
                value={'my-third-value'}
                data={[
                  { label: 'My First Label', value: 'my-first-value' },
                  { label: 'My Second Label', value: 'my-second-value' },
                  { label: 'My Third Label', value: 'my-third-value' },
                ]}
              />
            </Stack>
          </GridItem>
          <GridItem lg={{ startCol: 1, spanCol: 6 }}>
            <Stack
              xs={{
                direction: 'row',
                spacing: 'xs',
                alignItems: 'start',
                justifyContent: 'start',
              }}
            >
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
                xs={{
                  direction: 'row',
                  spacing: 'xs',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <Button variant="contained" color="primary">
                  Button
                </Button>
                <Button variant="outlined" color="secondary">
                  Button
                </Button>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </div>
    </ConnectTheme>
  );
};

export default App;
