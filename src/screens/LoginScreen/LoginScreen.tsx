import * as React from 'react';
import { View } from 'react-native';
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
    <View style={styles.container}>
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
    </View>
  );
}
