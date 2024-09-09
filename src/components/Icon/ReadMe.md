# Icon Component

The `Icon` component is a reusable SVG icon component for your application. It allows you to customize the icon's size, fill color, stroke color, focusability, and data attributes for testing purposes.

## Props

The `Icon` component accepts the following props:

- `id` (string) **required**: The unique identifier for the icon.
- `size` (string) **required**: The size of the icon.
- `fill` (Color): The fill color of the icon.
- `stroke` (Color | undefined): The stroke color of the icon.
- `focusable` (boolean): Determines if the icon is focusable. Defaults to `false`.
- `dataTestId` (string): The data test ID for the icon.
- `gradeBand` (GradeBand): Only used in `ConnectTheme` for Story grade banding.

## Usage

Here is an example of how to use the `Icon` component:

```tsx
import React from 'react';
import { Icon } from './Icon';
import { Color } from '../../enum/color';

const Example = () => {
  return <Icon id="arrow-down" size="lg" fill={'red- s50'} />;
};

export default Example;
```

## Styling

The Icon component uses CSS variables to set the fill and stroke colors. The variables are dynamically generated based on the fill and stroke props:

--connect**icon-fill-color: The fill color of the icon.
--connect**icon-stroke-color: The stroke color of the icon.

## Notes

Ensure that the `fill` and `stroke` props are valid `Color` values.
