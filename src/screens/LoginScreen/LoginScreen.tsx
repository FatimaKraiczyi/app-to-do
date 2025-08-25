import * as React from 'react';
import { SafeAreaView, View, Image, ScrollView, Text } from 'react-native';
import { styles } from './LoginScreen.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = () => {
    console.log('Login attempt:', { email, senha });
    // Implementar lógica de autenticação
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo/logo.png')}
            style={styles.logoMainImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Welcome back! Please enter your details.</Text>
      </View>

      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>
    </SafeAreaView>
  );
}
