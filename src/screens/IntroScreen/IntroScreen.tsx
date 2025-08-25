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
            <Text style={styles.title}>Welcome to UpTodo</Text>
            <Text style={styles.subtitle}>
              Please login to your account or create new account to continue
            </Text>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonSection}>
          <Button variant="contained" onPress={handleLogin}>
            LOGIN
          </Button>

          <Button variant="outlined" onPress={handleCreateAccount}>
            Create account
          </Button>
        </View>

        {/* Bottom Indicator */}
        <View style={styles.bottomIndicatorContainer}>
          <View style={styles.bottomIndicator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
