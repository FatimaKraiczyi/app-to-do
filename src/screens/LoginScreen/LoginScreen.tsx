import * as React from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoginScreen.styles';
import Input from '../../components/Input';
import type { RegisterScreenNavigationProp } from '../../types/navigation';
import Button from '../../components/Button/Button';

export default function LoginScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log('Login attempt:', { username, password });
    // Implementar lógica de autenticação
  };

  const handleSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
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
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Welcome back! Please enter your details.</Text>
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
              label="Password"
              placeholder="Enter your Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button onPress={handleLogin} variant="contained">
            Login
          </Button>
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Don't have an account yet?</Text>

          <Button
            variant="text"
            onPress={handleSignUpPress}
          >
            Sign up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
