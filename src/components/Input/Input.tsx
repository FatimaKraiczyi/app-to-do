import React, { useState } from 'react';
import { View, Text, TextInput, ViewStyle, KeyboardTypeOptions } from 'react-native';
import { styles } from './Input.styles';
import theme from '../../theme';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardTypeOptions;
}

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
  autoCapitalize = 'none',
  keyboardType = 'default',
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const renderPasswordDots = () => {
    if (!secureTextEntry || !value) return null;

    const dotsCount = Math.min(value.length, 12); // Máximo 12 dots como no design
    const dots = Array.from({ length: dotsCount }, (_, index) => (
      <View key={index} style={styles.dot} />
    ));

    return <View style={styles.passwordDots}>{dots}</View>;
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>

      <View style={[
        styles.inputContainer,
        isFocused && { borderColor: theme.layout.colors.primary },
      ]}>
        {secureTextEntry && value ? (
          renderPasswordDots()
        ) : (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder || `Enter your ${label}`}
            placeholderTextColor={theme.layout.colors.placeholder}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
      </View>
    </View>
  );
}
