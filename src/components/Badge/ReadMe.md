# Badge Component

The `Badge` component is a versatile and customizable notification indicator designed for React applications. It allows for displaying notifications, status indicators, or additional information over other components.

## Features

- **Customizable Styles**: Supports different colors, variants, and positioning options
- **Flexible Content**: Can display text, icons, or images as badge content
- **Accessibility**: Screen reader friendly with ARIA labels for better usability
- **Maximum Value Handling**: Supports displaying a maximum value with a "+" suffix for overflow

## Installation

Before you can use the `Badge` component, ensure you have the Connect Design System installed in your project:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

To use the Badge component in your project, first import it:

```tsx
import { Badge } from '@connect/connect-design-system';
```

Then, you can use it in your components like so:

```tsx
<Badge
  color="primary-mid"
  variant="standard"
  badgeContent={4}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  aria-label="notifications count"
>
  <YourComponent />
</Badge>
```

## Props

The Badge component accepts the following props:

- `children` **required**: The content to which the badge is attached
- `badgeContent` **optional**: The content to display inside the badge (can be a number, string, or React node)
- `anchorOrigin`: Defines the position of the badge relative to its children (default: `{ vertical: 'top', horizontal: 'right' }`)
- `variant`: The badge variant (`'dot'`, `'standard'`, or `'invisible'`)
- `color`: The color of the badge (e.g., `'primary-mid'`, `'error-mid'`, etc.)
- `max`: The maximum value to display in the badge (if the value exceeds this, it will show as `{max}+`)
- `showZero`: If true, displays the badge even when the content is zero
- `className`: Additional CSS class names
- `dataTestId`: An identifier for testing purposes
- `gradeBand`: The grade band for theming
- `aria-label`: Accessibility label for screen readers

## Example

Here's a simple example of using the Badge component to display a notification count:

```tsx
<Badge
  badgeContent={4}
  color="surface-mid"
  variant="standard"
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  aria-label="notifications count"
>
  <YourComponent />
</Badge>
```

And with a dot variant for status indication:

```tsx
<Badge
  variant="dot"
  color="success-mid"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  aria-label="Online status"
>
  <YourComponent />
</Badge>
```

For more examples and usage, please refer to the Badge stories in the Storybook documentation.