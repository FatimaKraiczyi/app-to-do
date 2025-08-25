import * as React from 'react';
import { TextInput } from 'react-native-paper';

type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: any;
};

export default function Input({ label, value, onChangeText, secureTextEntry = false, style }: InputProps) {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={style}
      mode="outlined"
    />
  );
}
