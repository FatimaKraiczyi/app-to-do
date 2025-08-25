import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    ...theme.components.screen,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxxl,
  },
  logoMainImage: {
    width: 96,
    height: 82,
    marginBottom: theme.spacing.md,
  },
  input: {
    marginBottom: theme.spacing.md,
  },
  button: {
    marginTop: theme.spacing.sm,
  },
  content: {
    flexGrow: 1,
  },
  logoSection: {
    alignItems: 'center',
    gap: theme.spacing.xxxl,
  },

  logoPlaceholder: {
    width: 113,
    height: 113,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
  },

  titleSection: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  title: {
    ...theme.textStyles.title,
  },

  subtitle: {
    ...theme.textStyles.subtitle,
  },

});
