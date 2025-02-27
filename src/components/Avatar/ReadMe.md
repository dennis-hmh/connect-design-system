# Avatar Component

The `Avatar` component is a versatile and customizable user representation component designed for React applications. It allows for displaying user initials or images with various styles, sizes, and configurations.

## Features

- **Customizable Styles**: Supports different background colors, text colors, and font weights
- **Multiple Shapes**: Circle, square, and rounded options
- **Responsive Design**: Multiple size variants for different contexts
- **Accessibility**: Screen reader friendly with ARIA labels and alt text support

## Installation

Before you can use the `Avatar` component, ensure you have the Connect Design System installed in your project:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

To use the Avatar component in your project, first import it:

```tsx
import { Avatar } from '@connect/connect-design-system';
```

Then, you can use it in your components like so:

```tsx
<Avatar
  children="JD"
  size="md"
  shape="circle"
  backgroundColor="primary-mid"
  color="white"
  weight="medium"
  alt="John Doe's avatar"
/>
```

## Props

The Avatar component accepts the following props:

- `children` **optional**: The content to be displayed (typically initials)
- `src` **optional**: URL for the avatar image
- `alt` **required**: Alternative text for accessibility
- `size`: The size variant ('xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'unset')
- `backgroundColor`: The background color for initials display
- `shape`: The avatar shape ('circle', 'square', 'rounded')
- `color`: The text color for initials
- `weight`: The font weight ('regular', 'medium', 'semi-bold', 'bold')
- `element`: The HTML element to render
- `className`: Additional CSS class names
- `dataTestId`: An identifier for testing purposes
- `gradeBand`: The grade band for theming

For more detailed information on the props and their possible values, refer to the AvatarProps interface in the source code.

## Example

Here's a simple example of using the Avatar component to display user initials:

```tsx
<Avatar
  children="JD"
  size="lg"
  shape="circle"
  backgroundColor="primary-mid"
  color="white"
  alt="John Doe's avatar"
/>
```

And with an image:

```tsx
<Avatar
  src="/path/to/image.jpg"
  alt="JD's profile picture"
  size="lg"
  shape="circle"
/>
```

For more examples and usage, please refer to the Avatar stories in the Storybook documentation.