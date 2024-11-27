export type Color =
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
  | 'transparent'
  | 'unset'
  | 'white'
  | 'cc-purple'
  | 'brand-magenta'
  | 'brand-deep-magenta'
  | 'brand-pale-magenta';

const Colors: Record<Color, string> = {
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
  'transparent': 'transparent',
  'unset': 'unset',
  'white': '#fff',
  'cc-purple': 'rgb(113, 47, 253)',
  'brand-magenta': 'rgb(255, 0, 179)',
  'brand-deep-magenta': 'rgb(204, 0, 192)',
  'brand-pale-magenta': 'rgb(255, 238, 254)',
};

export default Colors;