import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './IntroScreen.styles';
import Button from '../../components/Button';
import type { IntroScreenNavigationProp } from '../../types/navigation';

const IntroScreen: React.FC = () => {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
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
            <Text style={styles.title}>Bem-vindo ao UpTodo</Text>
            <Text style={styles.subtitle}>
              Faça login na sua conta ou crie uma nova conta para continuar
            </Text>
          </View>
        </View>

        {/* Seção dos Botões */}
        <View style={styles.buttonSection}>
          <Button variant="contained" onPress={handleLogin}>
            ENTRAR
          </Button>

          <Button variant="outlined" onPress={handleCreateAccount}>
            Criar conta
          </Button>
        </View>

        {/* Indicador Inferior */}
        <View style={styles.bottomIndicatorContainer}>
          <View style={styles.bottomIndicator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
