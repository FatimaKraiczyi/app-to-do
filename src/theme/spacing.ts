export const spacing = {
  xs: 4,
  sm: 8,
  md: 12, // padding dos inputs
  lg: 16,
  xl: 20, // padding vertical dos botões
  xxl: 24,
  xxxl: 32, // padding horizontal das telas
  xxxxl: 48,
} as const;

export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4, // border radius dos inputs
  md: 8,
  lg: 12, // border radius das seções
  xl: 16,
  full: 100, // border radius dos botões (arredondado)
} as const;

export const fontSize = {
  xs: 12,
  sm: 14, // texto de links e informações
  md: 16, // texto de inputs e labels
  lg: 17, // subtítulos
  xl: 20, // texto dos botões
  xxl: 24,
  xxxl: 32, // títulos principais
  display: 40,
} as const;

export const fontWeight = {
  light: '300',
  normal: '400', // texto normal
  medium: '500',
  semibold: '600', // títulos e botões
  bold: '700',
  extrabold: '800',
} as const;

export const fontFamily = {
  primary: 'Inter', // fonte principal (títulos, botões)
  secondary: 'Lato', // fonte secundária (inputs, labels)
  system: 'Roboto', // fonte do sistema (status bar)
} as const;

export const lineHeight = {
  xs: 16,
  sm: 20, // line height padrão para textos pequenos
  md: 24, // line height para inputs (24.08px)
  lg: 38, // line height para títulos (38px)
} as const;

export type SpacingKeys = keyof typeof spacing;
export type BorderRadiusKeys = keyof typeof borderRadius;
export type FontSizeKeys = keyof typeof fontSize;
export type FontWeightKeys = keyof typeof fontWeight;
export type FontFamilyKeys = keyof typeof fontFamily;
export type LineHeightKeys = keyof typeof lineHeight;
