import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  // Base styles usando layout.ts
  baseContainer: {
    ...theme.layout.button.primary,
  },

  baseText: {
    ...theme.layout.button.primaryText,
  },

  // Variant styles - Container
  containedContainer: {
    backgroundColor: theme.layout.colors.primary,
  },

  outlinedContainer: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.layout.colors.primary,
  },

  textContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
  },

  // Variant styles - Text
  containedText: {
    color: theme.layout.colors.white,
  },

  outlinedText: {
    color: theme.layout.colors.white,
  },

  textText: {
    color: theme.layout.colors.primary,
  },

  // Size styles - Container
  smContainer: {
    paddingHorizontal: theme.layout.spacing.inputPadding,
    paddingVertical: theme.layout.spacing.inputPadding,
  },

  mdContainer: {
    paddingHorizontal: theme.layout.spacing.buttonHorizontal,
    paddingVertical: theme.layout.spacing.buttonHorizontal,
  },

  lgContainer: {
    paddingHorizontal: theme.layout.spacing.buttonHorizontal,
    paddingVertical: theme.layout.spacing.buttonVertical,
  },

  // Size styles - Text
  smText: {
    fontSize: 14,
    lineHeight: 16,
  },

  mdText: {
    fontSize: 16,
    lineHeight: 18,
  },

  lgText: {
    fontSize: 20,
    lineHeight: 20,
  },

  // Disabled styles
  disabledContainer: {
    backgroundColor: theme.layout.colors.placeholder,
    borderColor: theme.layout.colors.placeholder,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
  },

  disabledText: {
    color: theme.layout.colors.textSecondary,
  },

  // Disabled text variant - override background for text buttons
  disabledTextContainer: {
    backgroundColor: 'transparent',
  },
});
