# @connect/connect-design-system

## 1.19.5

### Patch Changes

- 49374c1: - New Component: N/A
  - Updated Component: `<Dropdown />` simplified. onClear prop added.
  - Bug Fix: N/A
  - Other: N/A

## 1.19.4

### Patch Changes

- bdf8168: - New Component: N/A
  - Updated Component: N/A
  - Bug Fix: N/A
  - Other: Type definations added to package.

## 1.19.3

### Patch Changes

- 89106a2: Stack now uses zero as initial padding value, removal of xs class as should be considered defaults

## 1.19.2

### Patch Changes

- b1257a6: Hint component now uses Typography

## 1.19.1

### Patch Changes

- a6ad197: Overflow prop added to grid
- 88886f0: Fix to images in Storybook

## 1.19.0

### Minor Changes

- bc1e957: Addition of G3-5 and GK-2 gradebands

## 1.18.16

### Patch Changes

- f24cd06: Paper now can take any html element (implemented for nav)

## 1.18.15

### Patch Changes

- c6e2aad: - Stack now matches mui initial values - removed the need to use xs

## 1.18.14

### Patch Changes

- a94dd51: Rive Stories updated to function correctly in Storybook using params and fixed width containers

## 1.18.13

### Patch Changes

- 5813d92: Add Type spacers to teacher typography

## 1.18.12

### Patch Changes

- b0bc1b6: - New Component: N/A
  - Updated Component:
    - `<Checkbox />`: checked prop fixed
    - `<MultipleChoiceQuestionImage />`: checked prop fixed
    - `<Image />`: Default image src updated
  - Bug Fix: N/A
  - Other:
    - Storybook stories alignment update
    - Storybook stories update with new color names, `<Stack />` changes

## 1.18.11

### Patch Changes

- 672b57d: Fix: Remove module property in the package.json

## 1.18.10

### Patch Changes

- fcd8bd1: Move Font files to the Lumina CDN to reduce package size

## 1.18.9

### Patch Changes

- c6c2ad3: - New Component: N/A
  - Updated Component:
    - `<Grid />`: Aligned with MUI
    - `<GridItem />`: Aligned with MUI
  - Bug Fix: N/A
  - Other: N/A

## 1.18.8

### Patch Changes

- b07b356: - New Component: N/A
  - Updated Component: `<Stack />`: forwardRef removed
  - Bug Fix: N/A
  - Other: N/A

## 1.18.7

### Patch Changes

- 2d0ef17: Add scoping to Stack css, change element type to React.ElementType,add custom style prop"

## 1.18.6

### Patch Changes

- 32f35ce: - New Component: N/A
  - Updated Component:
    - `<Button />`: Fix Lifts' TypeError
    - `<Icon />`: Fix Lifts' TypeError
  - Bug Fix: Update react, react-dom to peerDepencies in `package.json`. Downgraded to React 18.2.0
  - Other: N/A

## 1.18.5

### Patch Changes

- 6288e3d: Fix Lift TypeError for Button Icons.

## 1.18.4

### Patch Changes

- 03d51d0: - New Component: N/A
  - Updated Component:
    - `<Icon />`: collapes-left-outline, commonError, expand-right-outline, ml, syl, and udl Icons added
    - `<Paper />`: Outline prop added
  - Bug Fix: N/A
  - Other: Colors unified with new name, Stories updated with new color names.

## 1.18.3

### Patch Changes

- 81d3288: Added type to useState in Icon component.

## 1.18.2

### Patch Changes

- e8b18df: Updated Storybook from 8.4.7 to 8.5.1

## 1.18.1

### Patch Changes

- 99115ad: added individual radius options to paper and image, top bottom left right all and none for finer control"

## 1.18.0

### Minor Changes

- 7c8ff02: - New Component: `<Dropbox />`, `<Hint />`
  - Updated Component:
    - `<Checkbox />`: Updated to be controlled by parent.
    - `<InputBox />`: Updated to be controlled by parent.
    - `<MultipleChoiceQuestionImage />`: Updated to be controlled by parent.
    - `<Textarea />`: Updated with Toolbar prop.
  - Bug Fix: N/A
  - Other: `<MultipleChoiceQuestion />` has been removed. Use `<InputBox />` instead. Props are identical.

## 1.17.1

### Patch Changes

- 532bae3: !7.0 Removed wildcard to allow shadows work on multi class elements, 17.0.1 adds this back"

## 1.17.0

### Minor Changes

- 8ade258: <Dialog component added, InputText onClear prop added, Paper elevation numbers updated to match Figma.

## 1.16.3

### Patch Changes

- 48230c9: Fix CSS selector wildcards to properly handle multiple classnames with connect** prefix. Updates [class^='connect**'] to [class*='connect__'] for better compatibility with CSS modules and multiple classes

## 1.16.2

### Patch Changes

- 68524c8: Removed {text} prop from Button, updated {children} prop.

## 1.16.1

### Patch Changes

- 8772ab8: Updated cacl to pass xDS postcss test.

## 1.16.0

### Minor Changes

- 71304e4: Card and Table components added; Alert Grid GridItem MultipleChoiceQuestion and Stack updated.

## 1.15.2

### Patch Changes

- 41052a0: Button for Rive updated.

## 1.15.1

### Patch Changes

- db4402a: CSS var updated

## 1.15.0

### Minor Changes

- 825abfe: Rework RiveEngine component to better support rive inputs

## 1.14.4

### Patch Changes

- 256d66d: @font-face and font files added - part 2.
- e56880b: @font-face and font files added.

## 1.14.3

### Patch Changes

- a9ad08c: Fix: Trigger a CI run to publish @connect/connect-design-system

## 1.15.0

### Minor Changes

- 9263c78: CLSSCRFT-2352: Setup a Concourse pipeline to build and publish @connect/connect-design-system
