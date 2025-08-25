import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';

type ButtonProps = {
  mode?: 'text' | 'outlined' | 'contained';
  onPress: () => void;
  children: React.ReactNode;
  style?: any;
};

export default function Button({ mode = 'contained', onPress, children, style }: ButtonProps) {
  return (
    <PaperButton mode={mode} onPress={onPress} style={style}>
      {children}
    </PaperButton>
  );
}
