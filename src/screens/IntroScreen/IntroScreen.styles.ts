import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.layout.colors.background,
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: theme.layout.spacing.screenHorizontal,
    justifyContent: 'center',
    gap: theme.layout.spacing.section,
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

  // Buttons Section - usando padrão do layout
  buttonSection: {
    ...theme.layout.content.formSection,
  },

  // Bottom Indicator - usando padrão do layout
  bottomIndicatorContainer: {
    alignItems: 'center',
  },

  bottomIndicator: {
    width: 134,
    height: 5,
    backgroundColor: theme.layout.colors.white,
    borderRadius: 100,
  },
});
