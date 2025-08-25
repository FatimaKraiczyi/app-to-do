import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import { styles } from './RegisterScreen.styles';
import Button from '../../components/Button/Button';
import type { LoginScreenNavigationProp } from '../../types/navigation';

export default function RegisterScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign up:', { username, email, password, confirmPassword });
    // Implementar lógica de registro
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Section - Logo + Textos */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo/logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textSection}>
            <Text style={styles.title}>Nice to meet you</Text>
            <Text style={styles.subtitle}>Before we begin, we need some details.</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Input
              label="Username"
              placeholder="Enter your Username"
              value={username}
              onChangeText={setUsername}
            />
            <Input
              label="Email"
              placeholder="Enter your Email"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Password"
              placeholder="Enter your Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <Button onPress={handleSignUp} variant="contained">
            Sign up
          </Button>
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Button
            variant="text"
            onPress={handleLoginPress}
          >
            Log in
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
