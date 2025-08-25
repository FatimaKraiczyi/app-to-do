export const colors = {
  // Primary colors
  primary: '#8874FF',
  primaryLight: '#8E7CFF',
  primaryDark: '#7C6AEE',
  
  // Background colors
  background: '#121212',
  surface: '#1E1E1E',
  card: '#2A2A2A',
  
  // Text colors
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textMuted: '#808080',
  
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
  border: '#333333',
  borderLight: '#555555',
} as const;

export type ColorKeys = keyof typeof colors;
