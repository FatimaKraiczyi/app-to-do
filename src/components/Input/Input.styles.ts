import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'stretch',
    height: 80,
  },

  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    ...theme.textStyles.inputLabel,
  },

  inputContainer: {
    position: 'absolute',
    top: 32,
    left: 0,
    right: 0,
    ...theme.components.input,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    ...theme.textStyles.inputPlaceholder,
    color: theme.colors.text,
    padding: 0, // Remove padding padrão do TextInput
  },

  passwordDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.inputPlaceholder,
  },
});
