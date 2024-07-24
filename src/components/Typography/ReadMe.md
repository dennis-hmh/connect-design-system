# Typography Component

The `Typography` component is a versatile and customizable text rendering component designed for React applications. It allows for the application of various text styles, sizes, and configurations, enhancing the visual hierarchy and readability of your content.

## Features

- **Customizable Styles**: Supports different text colors, font families, sizes, styles, and weights.
- **Responsive Design**: Adapts to different screen sizes for optimal readability.
- **Accessibility**: Ensures text is accessible and legible to all users.

## Installation

Before you can use the `Typography` component, ensure you have the Connect Design System installed in your project:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

To use the Typography component in your project, first import it:

```tsx
import { Typography } from '@connect/connect-design-system';
```

Then, you can use it in your components like so:

```tsx
<Typography
  element="h1"
  color="primary"
  family="sans"
  size="heading-xl"
  style="normal"
  weight={700}
  letterSpacing="md"
  textAlign="center"
  textTransform="uppercase"
>
  Your Text Here
</Typography>
```

## Props

The Typography component accepts the following props:

- `children` **required**: The text content to be displayed.
- `element`: The HTML element to render, e.g., h1, p, etc. Defaults to span.
- `color`: The text color.
- `family`: The font family, e.g., sans, serif, mono.
- `size`: The size of the text, e.g., heading-xl, body-md.
- `style`: The font style, e.g., normal, italic.
- `weight`: The font weight, e.g., 400, 700.
- `letterSpacing`: The spacing between letters, e.g., none, md.
- `textAlign`: The text alignment, e.g., left, center.
- `textTransform`: The text transformation, e.g., uppercase, lowercase.
- `className`: Additional CSS class names to apply to the component.
- `dataTestId`: An identifier for testing purposes.

For more detailed information on the props and their possible values, refer to the TypographyProps interface in the source code.

## Example

Here's a simple example of using the Typography component to render a heading:

```tsx
<Typography element="h1" size="heading-lg" weight={600}>
  Welcome to Our Website
</Typography>
```

This will render an <h1> element with the specified size and weight, using the default font family and color.

For more examples and usage, please refer to the Typography stories in the Storybook documentation.
