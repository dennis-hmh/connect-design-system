export type ColorBase =
  | 'yellow'
  | 'golden'
  | 'orange'
  | 'red'
  | 'cerise'
  | 'purple'
  | 'blue'
  | 'aqua'
  | 'turquoise'
  | 'green'
  | 'apple'
  | 'gray'
  | 'cool-gray'
  | 'warm-gray';

export type ColorShade = 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70;

export type Color = `${ColorBase}-${'c' | 'm' | 's'}${ColorShade}`
| 'white' | "transparent" |  "unset";