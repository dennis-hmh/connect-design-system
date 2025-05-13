export type Color =

  // Surface colors
  | 'surface-0'
  | 'surface-50'
  | 'surface-100'
  | 'surface-200'
  | 'surface-300'
  | 'surface-400'
  | 'surface-500'
  | 'surface-600'
  | 'surface-700'
  | 'surface-800'
  | 'surface-900'
  | 'surface-1000'
  | 'surface-null'

  // Content color packs (new 100-500 scale)
  | 'content-orange-100'
  | 'content-orange-200'
  | 'content-orange-300'
  | 'content-orange-400'
  | 'content-orange-500'
  | 'content-yellow-100'
  | 'content-yellow-200'
  | 'content-yellow-300'
  | 'content-yellow-400'
  | 'content-yellow-500'
  | 'content-green-100'
  | 'content-green-200'
  | 'content-green-300'
  | 'content-green-400'
  | 'content-green-500'
  | 'content-aqua-100'
  | 'content-aqua-200'
  | 'content-aqua-300'
  | 'content-aqua-400'
  | 'content-aqua-500'
  | 'content-blue-100'
  | 'content-blue-200'
  | 'content-blue-300'
  | 'content-blue-400'
  | 'content-blue-500'
  | 'content-violet-100'
  | 'content-violet-200'
  | 'content-violet-300'
  | 'content-violet-400'
  | 'content-violet-500'
  | 'content-purple-100'
  | 'content-purple-200'
  | 'content-purple-300'
  | 'content-purple-400'
  | 'content-purple-500'

  // Brand colors
  | 'brand-gold-100'
  | 'brand-gold-200'
  | 'brand-gold-300'
  | 'brand-gold-400'
  | 'brand-gold-500'
  | 'brand-orange-100'
  | 'brand-orange-200'
  | 'brand-orange-300'
  | 'brand-orange-400'
  | 'brand-orange-500'
  | 'brand-magenta-100'
  | 'brand-magenta-200'
  | 'brand-magenta-300'
  | 'brand-magenta-400'
  | 'brand-magenta-500'
  | 'brand-deep-magenta-100'
  | 'brand-deep-magenta-200'
  | 'brand-deep-magenta-300'
  | 'brand-deep-magenta-400'
  | 'brand-deep-magenta-500'

  // Legacy colors (deprecated but still supported)
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
  | 'white'
  | 'black'
  | 'unset'
  | 'transparent'


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
  | 'green-c25'

  // Neutral Colors
  | 'neutral-light-01'
  | 'neutral-light-02'
  | 'neutral-light-03'
  | 'neutral-light-04'
  | 'neutral-light-05'
  | 'neutral-light-06'
  | 'neutral-light-07'
  | 'neutral-light-08'
  | 'neutral-dark-01'
  | 'neutral-dark-02'
  | 'neutral-dark-03'
  | 'neutral-dark-04'
  | 'neutral-dark-05'
  | 'neutral-dark-06'
  | 'neutral-dark-07'
  | 'neutral-dark-08';

const Colors: Record<Color, string> = {
  // Special values
  'white': 'rgb(255, 255, 255)',
  'black': 'rgb(30, 30, 30)',
  'unset': 'unset',
  'transparent': 'transparent',

  // Surface colors
  'surface-0': 'var(--connect__white)',
  'surface-50': 'var(--connect__stone-s5)',
  'surface-100': 'var(--connect__stone-s10)',
  'surface-200': 'var(--connect__stone-s15)',
  'surface-300': 'var(--connect__stone-s20)',
  'surface-400': 'var(--connect__stone-s30)',
  'surface-500': 'var(--connect__stone-s40)',
  'surface-600': 'var(--connect__stone-s50)',
  'surface-700': 'var(--connect__stone-s55)',
  'surface-800': 'var(--connect__stone-s60)',
  'surface-900': 'var(--connect__stone-s70)',
  'surface-1000': 'var(--connect__black)',
  'surface-null': 'rgba(255, 255, 255, 0)',

  // Content color packs (new 100-500 scale)
  'content-orange-100': 'var(--connect__sunflower-s15)',
  'content-orange-200': 'var(--connect__papaya-s25)',
  'content-orange-300': 'var(--connect__orange-s35)',
  'content-orange-400': 'var(--connect__poppy-s45)',
  'content-orange-500': 'var(--connect__poppy-s55)',
  'content-yellow-100': 'var(--connect__yellow-s15)',
  'content-yellow-200': 'var(--connect__sunflower-s20)',
  'content-yellow-300': 'var(--connect__papaya-s30)',
  'content-yellow-400': 'var(--connect__orange-s40)',
  'content-yellow-500': 'var(--connect__poppy-s50)',
  'content-green-100': 'var(--connect__apple-s15)',
  'content-green-200': 'var(--connect__lime-s25)',
  'content-green-300': 'var(--connect__green-s35)',
  'content-green-400': 'var(--connect__green-s45)',
  'content-green-500': 'var(--connect__green-s55)',
  'content-aqua-100': 'var(--connect__turquoise-s15)',
  'content-aqua-200': 'var(--connect__turquoise-s25)',
  'content-aqua-300': 'var(--connect__turquoise-s35)',
  'content-aqua-400': 'var(--connect__turquoise-s45)',
  'content-aqua-500': 'var(--connect__turquoise-s55)',
  'content-blue-100': 'var(--connect__teal-s15)',
  'content-blue-200': 'var(--connect__teal-s25)',
  'content-blue-300': 'var(--connect__marine-s35)',
  'content-blue-400': 'var(--connect__marine-s50)',
  'content-blue-500': 'var(--connect__marine-s60)',
  'content-violet-100': 'var(--connect__blue-s15)',
  'content-violet-200': 'var(--connect__periwinkle-s25)',
  'content-violet-300': 'var(--connect__periwinkle-s40)',
  'content-violet-400': 'var(--connect__periwinkle-s55)',
  'content-violet-500': 'var(--connect__periwinkle-s60)',
  'content-purple-100': 'var(--connect__violet-s15)',
  'content-purple-200': 'var(--connect__purple-s25)',
  'content-purple-300': 'var(--connect__purple-s40)',
  'content-purple-400': 'var(--connect__grape-s55)',
  'content-purple-500': 'var(--connect__grape-s60)',

  // Brand colors
  'brand-gold-100': '#fff9d1',
  'brand-gold-200': '#ffeb99',
  'brand-gold-300': '#fdb913',
  'brand-gold-400': '#e59900',
  'brand-gold-500': '#d97e00',
  'brand-orange-100': '#fff0ec',
  'brand-orange-200': '#ffd4c7',
  'brand-orange-300': '#ff5e24',
  'brand-orange-400': '#d64000',
  'brand-orange-500': '#b03800',
  'brand-magenta-100': '#ffeef7',
  'brand-magenta-200': '#ffd9ec',
  'brand-magenta-300': '#ff00b3',
  'brand-magenta-400': '#d90098',
  'brand-magenta-500': '#bf0086',
  'brand-deep-magenta-100': '#ffeefe',
  'brand-deep-magenta-200': '#ffd6fc',
  'brand-deep-magenta-300': '#cc00c0',
  'brand-deep-magenta-400': '#b200a7',
  'brand-deep-magenta-500': '#9e0094',

  // Legacy colors (deprecated but still supported)
  // Surface colors
  'surface-dark': 'var(--connect__surface-dark)',
  'surface-mid': 'var(--connect__surface-mid)',
  'surface-light': 'var(--connect__surface-light)',
  'surface-pale': 'var(--connect__surface-pale)',
  'surface-white': 'var(--connect__surface-white)',
  'surface-black': 'var(--connect__surface-black)',

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

  // Neutral Colors
  'neutral-light-01': 'var(--connect__neutral-light-01)',
  'neutral-light-02': 'var(--connect__neutral-light-02)',
  'neutral-light-03': 'var(--connect__neutral-light-03)',
  'neutral-light-04': 'var(--connect__neutral-light-04)',
  'neutral-light-05': 'var(--connect__neutral-light-05)',
  'neutral-light-06': 'var(--connect__neutral-light-06)',
  'neutral-light-07': 'var(--connect__neutral-light-07)',
  'neutral-light-08': 'var(--connect__neutral-light-08)',
  'neutral-dark-01': 'var(--connect__neutral-dark-01)',
  'neutral-dark-02': 'var(--connect__neutral-dark-02)',
  'neutral-dark-03': 'var(--connect__neutral-dark-03)',
  'neutral-dark-04': 'var(--connect__neutral-dark-04)',
  'neutral-dark-05': 'var(--connect__neutral-dark-05)',
  'neutral-dark-06': 'var(--connect__neutral-dark-06)',
  'neutral-dark-07': 'var(--connect__neutral-dark-07)',
  'neutral-dark-08': 'var(--connect__neutral-dark-08)',
};

export default Colors;
