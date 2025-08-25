export const colors = {
  // Primary colors (baseado no design)
  primary: '#9E56FF', // rgba(158, 86, 255, 1) - cor principal dos botões
  primaryLight: '#A664FF', // rgba(166, 100, 255, 1) - cor do ícone/logo
  primaryDark: '#8845E8',

  // Background colors (baseado no design escuro)
  background: '#080808', // rgba(8, 8, 8, 1) - fundo principal das telas
  surface: '#1D1D1D', // rgba(29, 29, 29, 1) - fundo dos inputs
  card: '#2A2A2A',

  // Text colors (baseado nos textos do design)
  text: '#FFFFFF', // rgba(255, 255, 255, 1) - texto principal
  textSecondary: '#E6E6E6', // rgba(230, 230, 230, 1) - subtítulos
  textMuted: '#535353', // rgba(83, 83, 83, 1) - placeholder
  textLabel: 'rgba(255, 255, 255, 0.87)', // labels dos inputs

  // Input colors
  inputBackground: '#1D1D1D', // rgba(29, 29, 29, 1)
  inputBorder: '#979797', // rgba(151, 151, 151, 1)
  inputPlaceholder: '#535353', // rgba(83, 83, 83, 1)

  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',

  // Other colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Border colors
  border: '#979797', // rgba(151, 151, 151, 1)
  borderLight: '#555555',

  // Shadow colors
  shadowColor: 'rgba(45, 37, 55, 0.14)', // cor das sombras dos botões

  // Status bar colors
  statusBar: '#888888', // rgba(136, 136, 136, 1)
} as const;

export type ColorKeys = keyof typeof colors;
