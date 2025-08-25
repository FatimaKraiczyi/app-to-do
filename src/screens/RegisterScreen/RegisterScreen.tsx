import React, { useState } from 'react';
import { View, Text, ScrollView , Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input';
import { styles } from './RegisterScreen.styles';
import Button from '../../components/Button/Button';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign up:', { username, email, password, confirmPassword });
    // Implementar lógica de registro
  };

  const handleLoginPress = () => {
    console.log('Navigate to login');
    // Navegar para tela de login
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Image
            source={require('../../assets/logo/logo.png')}
            resizeMode="contain"
          />

          <View style={styles.titleSection}>
            <Text style={styles.title}>Nice to meet you</Text>
            <Text style={styles.subtitle}>Before we begin, we need some details.</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <Input
            label="Username"
            value={username}
            onChangeText={setUsername}
          />

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Input
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />

          <Button
            variant="contained"
            onPress={handleSignUp}
            style={styles.signUpButton}
          >
            Sign up
          </Button>
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Button
            variant="text"
            onPress={handleLoginPress}
            style={styles.loginButton}
          >
            Log in
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
