import * as React from 'react';
import { SafeAreaView, View, Image, Text, ScrollView } from 'react-native';
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
    console.log('Tentativa de login:', { username, password });
    // Implementar lógica de autenticação
  };

  const handleSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Seção do Cabeçalho - Logo + Textos */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo/logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textSection}>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.subtitle}>Insira seus dados.</Text>
          </View>
        </View>

        {/* Seção do Formulário */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={username}
              onChangeText={setUsername}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button onPress={handleLogin} variant="contained">
            Entrar
          </Button>
        </View>

        {/* Seção do Rodapé */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Ainda não tem uma conta?</Text>

          <Button
            variant="text"
            onPress={handleSignUpPress}
          >
            Cadastre-se
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
