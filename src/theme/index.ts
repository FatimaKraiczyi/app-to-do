import { colors } from './colors';
import { spacing, borderRadius, fontSize, fontWeight, fontFamily, lineHeight } from './spacing';

export const theme = {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,

  // Text Styles (baseado no design)
  textStyles: {
    title: {
      fontSize: fontSize.xxxl, // 32px
      fontWeight: fontWeight.semibold, // 600
      fontFamily: fontFamily.primary, // Inter
      color: colors.text,
      lineHeight: lineHeight.lg, // 38px
      textAlign: 'center' as const,
    },
    subtitle: {
      fontSize: fontSize.lg, // 17px
      fontWeight: fontWeight.normal, // 400
      fontFamily: fontFamily.primary, // Inter
      color: colors.textSecondary,
      lineHeight: lineHeight.md, // 24px
      textAlign: 'center' as const,
    },
    inputLabel: {
      fontSize: fontSize.md, // 16px
      fontWeight: fontWeight.normal, // 400
      fontFamily: fontFamily.secondary, // Lato
      color: colors.textLabel,
      lineHeight: lineHeight.md, // 24px
    },
    inputPlaceholder: {
      fontSize: fontSize.md, // 16px
      fontWeight: fontWeight.normal, // 400
      fontFamily: fontFamily.secondary, // Lato
      color: colors.inputPlaceholder,
      lineHeight: lineHeight.md, // 24px
    },
    buttonText: {
      fontSize: fontSize.xl, // 20px
      fontWeight: fontWeight.semibold, // 600
      fontFamily: fontFamily.primary, // Inter
      color: colors.white,
      lineHeight: fontSize.xl, // 20px
    },
    linkText: {
      fontSize: fontSize.sm, // 14px
      fontWeight: fontWeight.semibold, // 600
      fontFamily: fontFamily.primary, // Inter
      color: colors.primary,
      lineHeight: lineHeight.sm, // 20px
    },
    bodyText: {
      fontSize: fontSize.sm, // 14px
      fontWeight: fontWeight.normal, // 400
      fontFamily: fontFamily.primary, // Inter
      color: colors.textSecondary,
      lineHeight: lineHeight.sm, // 20px
    },
  },

  // Component Styles
  components: {
    input: {
      backgroundColor: colors.inputBackground,
      borderColor: colors.inputBorder,
      borderWidth: 0.8,
      borderRadius: borderRadius.sm, // 4px
      padding: spacing.md, // 12px
      height: 48, // altura padrão dos inputs
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: borderRadius.full, // 100px (totalmente arredondado)
      paddingHorizontal: spacing.lg, // 16px
      paddingVertical: spacing.xl, // 20px
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 30,
      shadowOpacity: 1,
      elevation: 8,
    },
    screen: {
      backgroundColor: colors.background,
      paddingHorizontal: spacing.xxxl, // 32px
      flex: 1,
    },
  },

  // Common shadows
  shadows: {
    sm: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    md: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    lg: {
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 30,
      elevation: 8,
    },
  },
} as const;

export default theme;
