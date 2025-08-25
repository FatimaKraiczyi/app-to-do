import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  style?: ViewStyle;
  size?: 'sm' | 'md' | 'lg';
  textStyle?: TextStyle;
}

export default function Button({
  children,
  onPress,
  variant = 'contained',
  disabled = false,
  size = 'sm',
  style,
  textStyle,
}: ButtonProps) {
  const containerStyle = [
    styles.baseContainer,
    styles[`${variant}Container`],
    styles[`${size}Container`],
    disabled && styles.disabledContainer,
    disabled && variant === 'text' && styles.disabledTextContainer,
    style,
  ];

  const textStyles = [
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={textStyles}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
