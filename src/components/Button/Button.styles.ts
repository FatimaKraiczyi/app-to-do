import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  // Base styles
  baseContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.components.button,
  },

  baseText: {
    ...theme.textStyles.buttonText,
  },

  // Variant styles - Container
  containedContainer: {
    backgroundColor: theme.colors.primary,
  },

  outlinedContainer: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },

  textContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  // Variant styles - Text
  containedText: {
    color: theme.colors.white,
  },

  outlinedText: {
    color: theme.colors.white,
  },

  textText: {
    color: theme.colors.primary,
  },

  // Size styles - Container
  smContainer: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },

  mdContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },

  lgContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl,
  },

  // Size styles - Text
  smText: {
    fontSize: theme.fontSize.sm,
    lineHeight: 16,
  },

  mdText: {
    fontSize: theme.fontSize.md,
    lineHeight: 18,
  },

  lgText: {
    fontSize: theme.fontSize.xl,
    lineHeight: theme.lineHeight.sm,
  },

  // Disabled styles
  disabledContainer: {
    backgroundColor: theme.colors.textMuted,
    borderColor: theme.colors.textMuted,
    shadowOpacity: 0,
    elevation: 0,
  },

  disabledText: {
    color: theme.colors.textSecondary,
  },

  // Disabled text variant - override background for text buttons
  disabledTextContainer: {
    backgroundColor: 'transparent',
  },
});
