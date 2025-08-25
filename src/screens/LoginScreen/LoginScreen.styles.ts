import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  input: { 
    marginBottom: theme.spacing.md,
  },
  button: { 
    marginTop: theme.spacing.sm,
  },
});
