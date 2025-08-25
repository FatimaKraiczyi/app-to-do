import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    ...theme.layout.input.fieldContainer,
  },

  label: {
    ...theme.layout.input.label,
  },

  inputContainer: {
    ...theme.layout.input.field,
  },

  input: {
    flex: 1,
    ...theme.layout.input.placeholder,
    color: theme.layout.colors.white,
    padding: 0, // Remove padding padrão do TextInput
  },

  passwordDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.layout.spacing.inputField,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.layout.colors.placeholder,
  },
});
