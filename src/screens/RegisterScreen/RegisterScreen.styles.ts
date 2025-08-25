import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    ...theme.components.screen,
  },
  
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xxl,
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
  
  formSection: {
    gap: theme.spacing.xl,
    marginVertical: theme.spacing.xxxl,
  },
  
  signUpButton: {
    marginTop: theme.spacing.xs,
  },
  
  footerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
  },
  
  footerText: {
    ...theme.textStyles.bodyText,
  },
  
  loginButton: {
    alignSelf: 'auto',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
});
