export type Color =
  // Surface colors
  | 'surface-dark'
  | 'surface-mid'
  | 'surface-light'
  | 'surface-pale'
  | 'surface-white'
  | 'surface-black'
  | 'surface-null'

  // Feedback colors
  | 'correct-dark'
  | 'correct-mid'
  | 'correct-light'
  | 'correct-pale'
  | 'incorrect-dark'
  | 'incorrect-mid'
  | 'incorrect-light'
  | 'incorrect-pale'
  | 'shown-dark'
  | 'shown-mid'
  | 'shown-light'
  | 'shown-pale'

  // State colors
  | 'success-dark'
  | 'success-mid'
  | 'success-light'
  | 'success-pale'
  | 'error-dark'
  | 'error-mid'
  | 'error-light'
  | 'error-pale'

  // Primary colors
  | 'primary-dark'
  | 'primary-mid'
  | 'primary-light'
  | 'primary-pale'

  // Hint colors
  | 'hint-dark'
  | 'hint-mid'
  | 'hint-light'
  | 'hint-pale'

  // Focus colors
  | 'focus-dark'
  | 'focus-mid'
  | 'focus-light'
  | 'focus-pale'

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

  // Reading palette
  | 'periwinkle-s10'
  | 'periwinkle-s25'

  // Special values
  | 'transparent'
  | 'unset'
  | 'white'

  | 'gray-c70'
  | 'gray-c55'
  | 'gray-c40'
  | 'gray-c35'
  | 'gray-c10'
  | 'gray-c5'
  | 'red-c55'
  | 'red-s15'
  | 'red-s25'
  | 'red-s45'
  | 'cerise-s10'
  | 'cerise-s25'
  | 'cerise-s40'
  | 'cerise-s50'
  | 'purple-c10'
  | 'purple-c25'
  | 'purple-c50'
  | 'purple-c65'
  | 'purple-s50'
  | 'blue-c60'
  | 'blue-s15'
  | 'blue-s50'
  | 'aqua-s15'
  | 'apple-c10'
  | 'green-s40'
  | 'green-c55'
  | 'green-c25';

const Colors: Record<Color, string> = {
  // Surface colors
  'surface-dark': 'var(--connect__surface-dark)',
  'surface-mid': 'var(--connect__surface-mid)',
  'surface-light': 'var(--connect__surface-light)',
  'surface-pale': 'var(--connect__surface-pale)',
  'surface-white': 'var(--connect__surface-white)',
  'surface-black': 'var(--connect__surface-black)',
  'surface-null': 'var(--connect__surface-null)',

  // Feedback colors
  'correct-dark': 'var(--connect__correct-dark)',
  'correct-mid': 'var(--connect__correct-mid)',
  'correct-light': 'var(--connect__correct-light)',
  'correct-pale': 'var(--connect__correct-pale)',
  'incorrect-dark': 'var(--connect__incorrect-dark)',
  'incorrect-mid': 'var(--connect__incorrect-mid)',
  'incorrect-light': 'var(--connect__incorrect-light)',
  'incorrect-pale': 'var(--connect__incorrect-pale)',
  'shown-dark': 'var(--connect__shown-dark)',
  'shown-mid': 'var(--connect__shown-mid)',
  'shown-light': 'var(--connect__shown-light)',
  'shown-pale': 'var(--connect__shown-pale)',

  // State colors
  'success-dark': 'var(--connect__success-dark)',
  'success-mid': 'var(--connect__success-mid)',
  'success-light': 'var(--connect__success-light)',
  'success-pale': 'var(--connect__success-pale)',
  'error-dark': 'var(--connect__error-dark)',
  'error-mid': 'var(--connect__error-mid)',
  'error-light': 'var(--connect__error-light)',
  'error-pale': 'var(--connect__error-pale)',

  // Primary colors
  'primary-dark': 'var(--connect__primary-dark)',
  'primary-mid': 'var(--connect__primary-mid)',
  'primary-light': 'var(--connect__primary-light)',
  'primary-pale': 'var(--connect__primary-pale)',

  // Hint colors
  'hint-dark': 'var(--connect__hint-dark)',
  'hint-mid': 'var(--connect__hint-mid)',
  'hint-light': 'var(--connect__hint-light)',
  'hint-pale': 'var(--connect__hint-pale)',

  // Focus colors
  'focus-dark': 'var(--connect__focus-dark)',
  'focus-mid': 'var(--connect__focus-mid)',
  'focus-light': 'var(--connect__focus-light)',
  'focus-pale': 'var(--connect__focus-pale)',

  // Brand colors
  'cc-purple': 'rgb(113, 47, 253)',
  'brand-magenta': 'rgb(255, 0, 179)',
  'brand-deep-magenta': 'rgb(204, 0, 192)',
  'brand-light-magenta': 'rgb(248, 205, 245)',
  'brand-pale-magenta': 'rgb(255, 238, 254)',

  // Essential Guides colors
  'essential-guide-purple': 'var(--cc-purple)',
  'essential-guide-teal': 'var(--connect__essential-guide-teal)',
  'essential-guide-magenta': 'rgb(198, 22, 141)',
  'essential-guide-blue-light': 'var(--connect__blue-c50)',
  'essential-guide-blue-dark': 'rgb(56, 88, 222)',
  'essential-guide-red': 'var(--connect__red-c50)',
  'essential-guide-green': 'var(--connect__green-c50)',
  'essential-guide-cerise': 'var(--connect__cerise-c50)',

  'periwinkle-s10': 'var(--connect__periwinkle-s10)',
  'periwinkle-s25': 'var(--connect__periwinkle-s25)',


  // Special values
  transparent: 'transparent',
  unset: 'unset',
  white: '#fff',

  // Deprecated 
  'gray-c70': 'rgb(45, 45, 45)',
  'gray-c55': 'rgb(93, 95, 95)',
  'gray-c40': 'rgb(137, 141, 141)',
  'gray-c35': 'rgb(160, 162, 162)',
  'gray-c10': 'rgb(237, 237, 237)',
  'gray-c5': 'rgb(247, 247, 248)',
  'red-c55': 'rgb(191, 19, 19)',
  'red-s15': 'rgb(255, 204, 204)',
  'red-s25': 'rgb(255, 144, 144)',
  'red-s45': 'rgb(248, 8, 0)',
  'cerise-s10': 'rgb(255, 230, 245)',
  'cerise-s25': 'rgb(255, 146, 211)',
  'cerise-s40': 'rgb(255, 46, 171)',
  'cerise-s50': 'rgb(224, 0, 151)',
  'purple-c10': 'rgb(233, 220, 252)',
  'purple-c25': 'rgb(188, 151, 240)',
  'purple-c50': 'rgb(141, 76, 199)',
  'purple-c65': 'rgb(86, 40, 122)',
  'purple-s50': 'rgb(167, 51, 255)',
  'blue-c60': 'rgb(0, 79, 168)',
  'blue-s15': 'rgb(209, 228, 255)',
  'blue-s50': 'rgb(0, 106, 255)',
  'aqua-s15': 'rgb(179, 242, 255)',
  'apple-c10': 'rgb(230, 245, 181)',
  'green-s40': 'rgb(0, 173, 0)',
  'green-c55': 'rgb(25, 120, 17)',
  'green-c25': 'rgb(145, 219, 105)',
};

export default Colors;
