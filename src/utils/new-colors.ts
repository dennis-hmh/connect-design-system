// Color intensity levels
export enum ColorIntensity {
  I100 = '100',
  I200 = '200',
  I300 = '300',
  I400 = '400',
  I500 = '500',
}

// Color categories
export enum ColorCategory {
  Primary = 'primary',
  Secondary = 'secondary',
  Neutral = 'neutral',
  Assistive = 'assistive',
  Caution = 'caution',
  Negative = 'negative',
  Constructive = 'constructive',
  Positive = 'positive',
  Focus = 'focus',
}

// Helper type for semantic color tokens
export type SemanticColorToken =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'assistive'
  | 'caution'
  | 'negative'
  | 'constructive'
  | 'positive'
  | 'focus';

// Helper type for color combinations
export type ColorToken = `${SemanticColorToken}-${ColorIntensity}`;

// Updated color mapping object with new scale
export const Colors: Partial<Record<ColorToken, string>> = {
  // Primary colors
  'primary-100': '#E8F1FF', // Lightest blue
  'primary-200': '#D1E4FF', // Light blue
  'primary-300': '#719EFF', // Medium blue
  'primary-400': '#004AFF', // Dark blue
  'primary-500': '#002B90', // Darkest blue

  // Secondary colors
  'secondary-100': '#F3CCFF', // Lightest purple
  'secondary-200': '#E8B6FF', // Light purple
  'secondary-300': '#DB95FF', // Medium purple
  'secondary-400': '#AF46FF', // Dark purple
  'secondary-500': '#7F42FF', // Darkest purple

  // Neutral colors
  'neutral-100': '#EBEBEB', // Lightest gray
  'neutral-200': '#CDCDCD', // Light gray
  'neutral-300': '#898D8D', // Medium gray
  'neutral-400': '#6A6D6D', // Dark gray
  'neutral-500': '#505757', // Darkest gray

  // Assistive colors
  'assistive-100': '#B3F2FF', // Lightest aqua
  'assistive-200': '#A1F2F3', // Light aqua
  'assistive-300': '#00C4C3', // Medium aqua
  'assistive-400': '#009FB8', // Dark aqua
  'assistive-500': '#00728F', // Darkest aqua

  // Caution colors
  'caution-100': '#FFE9D5', // Lightest orange
  'caution-200': '#FFA145', // Light orange
  'caution-300': '#FF7A08', // Medium orange
  'caution-400': '#FF5C00', // Dark orange
  'caution-500': '#C54500', // Darkest orange

  // Negative colors
  'negative-100': '#FFCCCC', // Lightest red
  'negative-200': '#FF9090', // Light red
  'negative-300': '#FF5858', // Medium red
  'negative-400': '#FF0600', // Dark red
  'negative-500': '#BF1313', // Darkest red

  // Constructive colors
  'constructive-100': '#D1E4FF', // Lightest blue
  'constructive-200': '#A0C4FF', // Light blue
  'constructive-300': '#6EA4FF', // Medium blue
  'constructive-400': '#3B82FF', // Dark blue
  'constructive-500': '#2F73FF', // Darkest blue

  // Positive colors
  'positive-100': '#E2F7B5', // Lightest green
  'positive-200': '#C5E45B', // Light green
  'positive-300': '#00CC23', // Medium green
  'positive-400': '#00AD00', // Dark green
  'positive-500': '#197811', // Darkest green

  // Focus colors
  'focus-100': '#FFE9D5', // Lightest cerise
  'focus-200': '#FFA145', // Light cerise
  'focus-300': '#FF7A08', // Medium cerise
  'focus-400': '#FF5C00', // Dark cerise
  'focus-500': '#CE4500', // Darkest cerise
};

// Helper function to get a color with specific intensity
export const getColor = (category: ColorCategory, intensity: ColorIntensity): string => {
  const token: ColorToken = `${category}-${intensity}`;
  return Colors[token] || '';
};

// Get semantic color with default intensity
export const getSemanticColor = (token: SemanticColorToken): string => {
  const defaultIntensities: Record<SemanticColorToken, ColorIntensity> = {
    primary: ColorIntensity.I400,
    secondary: ColorIntensity.I400,
    neutral: ColorIntensity.I300,
    assistive: ColorIntensity.I300,
    caution: ColorIntensity.I400,
    negative: ColorIntensity.I400,
    constructive: ColorIntensity.I400,
    positive: ColorIntensity.I400,
    focus: ColorIntensity.I500,
  };

  return getColor(token as ColorCategory, defaultIntensities[token]);
};

// Helper function to get CSS variable name for a color token
export const getColorVariable = (token: ColorToken | SemanticColorToken): string => {
  if (token.includes('-')) {
    return `var(--connect__color-${token})`;
  }
  return `var(--connect__color-${token}-${getDefaultIntensity(token as SemanticColorToken)})`;
};

// Helper function to get default intensity for a semantic color
const getDefaultIntensity = (token: SemanticColorToken): ColorIntensity => {
  const defaultIntensities: Record<SemanticColorToken, ColorIntensity> = {
    primary: ColorIntensity.I400,
    secondary: ColorIntensity.I400,
    neutral: ColorIntensity.I400,
    assistive: ColorIntensity.I400,
    caution: ColorIntensity.I400,
    negative: ColorIntensity.I400,
    constructive: ColorIntensity.I400,
    positive: ColorIntensity.I400,
    focus: ColorIntensity.I500,
  };
  return defaultIntensities[token];
};
