export type Color =
  // Surface colors
  | 'surface-dark'
  | 'surface-mid'
  | 'surface-light'
  | 'surface-pale'
  | 'surface-white'
  | 'surface-black'
  | 'surface-null'

  // State colors
  | 'correct-dark'
  | 'correct-mid'
  | 'correct-light'
  | 'correct-pale'
  | 'error-dark'
  | 'error-mid'
  | 'error-light'
  | 'error-pale'
  | 'incorrect-dark'
  | 'incorrect-mid'
  | 'incorrect-light'
  | 'incorrect-pale'
  | 'primary-dark'
  | 'primary-mid'
  | 'primary-light'
  | 'primary-pale'
  | 'focus-dark'
  | 'focus-mid'
  | 'focus-light'
  | 'focus-pale'
  | 'hint-dark'
  | 'hint-mid'
  | 'hint-light'
  | 'hint-pale'
  | 'disabled-dark'
  | 'disabled-mid'
  | 'disabled-light'
  | 'disabled-pale'

  // Brand colors
  | 'cc-purple'
  | 'brand-magenta'
  | 'brand-deep-magenta'
  | 'brand-light-magenta'
  | 'brand-pale-magenta'

  // Essential Guides colors
  | 'essential-guide-purple'
  | 'essential-guide-teal'
  | 'essential-guide-magenta'
  | 'essential-guide-blue-light'
  | 'essential-guide-blue-dark'
  | 'essential-guide-red'
  | 'essential-guide-green'
  | 'essential-guide-cerise'

  // Special values
  | 'transparent'
  | 'unset'
  | 'white';

const Colors: Record<Color, string> = {
  // Surface colors
  'surface-dark': 'var(--connect__surface-dark)',
  'surface-mid': 'var(--connect__surface-mid)',
  'surface-light': 'var(--connect__surface-light)',
  'surface-pale': 'var(--connect__surface-pale)',
  'surface-white': 'var(--connect__surface-white)',
  'surface-black': 'var(--connect__surface-black)',
  'surface-null': 'var(--connect__surface-null)',

  // State colors
  'correct-dark': 'var(--connect__correct-dark)',
  'correct-mid': 'var(--connect__correct-mid)',
  'correct-light': 'var(--connect__correct-light)',
  'correct-pale': 'var(--connect__correct-pale)',
  'error-dark': 'var(--connect__error-dark)',
  'error-mid': 'var(--connect__error-mid)',
  'error-light': 'var(--connect__error-light)',
  'error-pale': 'var(--connect__error-pale)',
  'incorrect-dark': 'var(--connect__incorrect-dark)',
  'incorrect-mid': 'var(--connect__incorrect-mid)',
  'incorrect-light': 'var(--connect__incorrect-light)',
  'incorrect-pale': 'var(--connect__incorrect-pale)',
  'primary-dark': 'var(--connect__primary-dark)',
  'primary-mid': 'var(--connect__primary-mid)',
  'primary-light': 'var(--connect__primary-light)',
  'primary-pale': 'var(--connect__primary-pale)',
  'focus-dark': 'var(--connect__focus-dark)',
  'focus-mid': 'var(--connect__focus-mid)',
  'focus-light': 'var(--connect__focus-light)',
  'focus-pale': 'var(--connect__focus-pale)',
  'hint-dark': 'var(--connect__hint-dark)',
  'hint-mid': 'var(--connect__hint-mid)',
  'hint-light': 'var(--connect__hint-light)',
  'hint-pale': 'var(--connect__hint-pale)',
  'disabled-dark': 'var(--connect__disabled-dark)',
  'disabled-mid': 'var(--connect__disabled-mid)',
  'disabled-light': 'var(--connect__disabled-light)',
  'disabled-pale': 'var(--connect__disabled-pale)',

  // Brand colors
  'cc-purple': 'rgb(113, 47, 253)',
  'brand-magenta': 'rgb(255, 0, 179)',
  'brand-deep-magenta': 'rgb(204, 0, 192)',
  'brand-light-magenta': 'rgb(248, 205, 245)',
  'brand-pale-magenta': 'rgb(255, 238, 254)',

  // Essential Guide colors
  'essential-guide-purple': 'var(--cc-purple)',
  'essential-guide-teal': 'var(--connect__essential-guide-teal)',
  'essential-guide-magenta': 'rgb(198, 22, 141)',
  'essential-guide-blue-light': 'var(--connect__blue-c50)',
  'essential-guide-blue-dark': 'rgb(56, 88, 222)',
  'essential-guide-red': 'var(--connect__red-c50)',
  'essential-guide-green': 'var(--connect__green-c50)',
  'essential-guide-cerise': 'var(--connect__cerise-c50)',

  // Special values
  transparent: 'transparent',
  unset: 'unset',
  white: '#fff',
};

export default Colors;
