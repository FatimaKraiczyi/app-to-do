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
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xxxl,
  },

  // Header Section - Logo + Textos
  headerSection: {
    ...theme.layout.content.headerSection,
    flex: 1,
    justifyContent: 'center',
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

  // Buttons Section
  buttonSection: {
    gap: theme.layout.spacing.input,
  },

  // Bottom Indicator
  bottomIndicatorContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.xl,
  },

  bottomIndicator: {
    width: 134,
    height: 5,
    backgroundColor: theme.layout.colors.white,
    borderRadius: theme.borderRadius.full,
  },
});
