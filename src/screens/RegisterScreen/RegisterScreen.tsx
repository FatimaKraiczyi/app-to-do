import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
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
    console.log('Cadastro:', { username, email, password, confirmPassword });
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
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.subtitle}>Antes de começarmos, precisamos de alguns detalhes.</Text>
          </View>
        </View>

        {/* Seção do Formulário */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Input
              label="Nome de usuário"
              placeholder="Digite seu nome de usuário"
              value={username}
              onChangeText={setUsername}
            />
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Input
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <Button onPress={handleSignUp} variant="contained">
            Cadastrar
          </Button>
        </View>

        {/* Seção do Rodapé */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Já tem uma conta?</Text>
          <Button
            variant="text"
            onPress={handleLoginPress}
          >
            Entrar
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
