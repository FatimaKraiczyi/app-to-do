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
  logoPlaceholder: {
    width: 96,
    height: 82,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  logoText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: theme.fontWeight.bold,
  },
  titleText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xxxl,
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl + theme.spacing.md,
  },
  subtitleText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl + theme.spacing.lg,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  loginButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.medium,
  },
  createAccountButton: {
    alignItems: 'center',
    borderColor: theme.colors.primaryLight,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 2,
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.xxxl,
  },
  createAccountButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.medium,
  },
  bottomIndicatorContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  bottomIndicator: {
    width: 134,
    height: 5,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.full,
  },
});
