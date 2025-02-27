# AvatarGroup Component

The `AvatarGroup` component is designed to display a collection of avatars in a compact and visually appealing manner. It allows for grouping multiple avatars together, showing a surplus count when the number of avatars exceeds a specified limit.

## Installation

To use the AvatarGroup component, ensure you have the Connect Design System installed in your project:

```bash
npm install @connect/connect-design-system@1.9.0
```

## Usage

To use the AvatarGroup component in your project, first import it:

```tsx
import { AvatarGroup } from '@connect/connect-design-system';
```

Then, you can use it in your components like so:

```tsx
<AvatarGroup max={5} total={10}>
  <Avatar src="/images/avatar1.jpg" alt="User 1" />
  <Avatar src="/images/avatar2.jpg" alt="User 2" />
  <Avatar src="/images/avatar3.jpg" alt="User 3" />
  <Avatar src="/images/avatar4.jpg" alt="User 4" />
  <Avatar src="/images/avatar5.jpg" alt="User 5" />
  <Avatar src="/images/avatar6.jpg" alt="User 6" />
</AvatarGroup>
```

## Props

The AvatarGroup component accepts the following props:

- `children` **required**: An array of `Avatar` components to be displayed in the group.
- `max`: The maximum number of avatars to display (default: `5`).
- `total`: The total number of avatars, used to calculate surplus (optional).
- `renderSurplus`: A function to customize the rendering of the surplus avatar (optional).
- `spacing`: The spacing between avatars (default: `'sm'`).
- `variant`: The display variant of the group (`'standard'` or `'grouped'`).
- `className`: Additional CSS class names (optional).
- `dataTestId`: An identifier for testing purposes (optional).
- `gradeBand`: The grade band for theming (optional).

## Example

Here's a simple example of using the AvatarGroup component:

```tsx
<AvatarGroup max={5} total={10}>
  <Avatar src="/images/avatar1.jpg" alt="User 1" />
  <Avatar src="/images/avatar2.jpg" alt="User 2" />
  <Avatar src="/images/avatar3.jpg" alt="User 3" />
  <Avatar src="/images/avatar4.jpg" alt="User 4" />
  <Avatar src="/images/avatar5.jpg" alt="User 5" />
  <Avatar src="/images/avatar6.jpg" alt="User 6" />
</AvatarGroup>
```

### Custom Surplus Rendering

You can customize how the surplus avatars are displayed by using the `renderSurplus` prop:

```tsx
<AvatarGroup max={5} total={10} renderSurplus={(surplus) => <Avatar>+{surplus}</Avatar>}>
  <Avatar src="/images/avatar1.jpg" alt="User 1" />
  <Avatar src="/images/avatar2.jpg" alt="User 2" />
  <Avatar src="/images/avatar3.jpg" alt="User 3" />
  <Avatar src="/images/avatar4.jpg" alt="User 4" />
  <Avatar src="/images/avatar5.jpg" alt="User 5" />
  <Avatar src="/images/avatar6.jpg" alt="User 6" />
</AvatarGroup>
```

## Accessibility

The AvatarGroup component is designed to be accessible, ensuring that all avatars have appropriate alt text for screen readers.

## For More Information

For more examples and usage, please refer to the AvatarGroup stories in the Storybook documentation.
