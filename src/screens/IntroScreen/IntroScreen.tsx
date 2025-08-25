import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableRipple, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './IntroScreen.styles';
import theme from '../../theme';
import Button from '../../components/Button';

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
  }
};

const IntroScreen: React.FC = () => {
  const handleLogin = () => {
    console.log('Login Pressed');
    // Navegação para tela de login
  };

  const handleCreateAccount = () => {
    console.log('Create Account Pressed');
    // Navegação para tela de criação de conta
  };

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <Image
              source={{ 
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Qv3rQhlSe2/4zxmoles_expires_30_days.png" 
              }}
              resizeMode="stretch"
              style={styles.logoMainImage}
            />
          </View>

          <Text style={styles.titleText}>Bem vindo ao UpTodo</Text>

          <Text style={styles.subtitleText}>
            Por favor, faça login na sua conta ou crie uma nova conta para continuar
          </Text>
        </View>

        <View style={styles.bottomSection}>
          <Button
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </Button>

          <Button
            onPress={handleCreateAccount}
            style={styles.createAccountButton}
          >
            <Text style={styles.createAccountButtonText}>Criar conta</Text>
          </Button>

          <View style={styles.bottomIndicatorContainer}>
            <View style={styles.bottomIndicator} />
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default IntroScreen;
