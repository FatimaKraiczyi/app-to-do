import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.layout.colors.background,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.layout.spacing.screenHorizontal,
    paddingVertical: theme.layout.spacing.input,
    justifyContent: 'center',
    gap: theme.layout.spacing.section,
    minHeight: '100%',
  },

  // Header Section - Logo + Textos
  headerSection: {
    ...theme.layout.content.headerSection,
  },

  logoContainer: {
    alignItems: 'center',
  },

  logoImage: {
    width: 113,
    height: 113,
  },

  textSection: {
    ...theme.layout.content.textSection,
  },

  title: {
    ...theme.layout.typography.title,
  },

  subtitle: {
    ...theme.layout.typography.subtitle,
  },

  // Form Section
  formSection: {
    ...theme.layout.content.formSection,
  },

  inputContainer: {
    ...theme.layout.content.inputContainer,
  },

  // Footer Section
  footerSection: {
    ...theme.layout.content.footerSection,
  },

  footerText: {
    ...theme.layout.typography.body,
  },

  linkText: {
    ...theme.layout.button.linkText,
  },
});
