import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './IntroScreen.styles';
import Button from '../../components/Button';
import { IntroScreenNavigationProp } from '../../types/navigation';
import { theme } from '../../theme';

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
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo/logo.png')}
            style={styles.logoMainImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.titleText}>Welcome to UpTodo</Text>

        <Text style={styles.subtitleText}>
          Please login to your account or create new account to continue
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <Button
          variant="contained"
          onPress={handleLogin}
          style={{ marginBottom: theme.spacing.lg }}
        >
          LOGIN
        </Button>

        <Button
          variant="outlined"
          onPress={handleCreateAccount}
          style={{ marginBottom: theme.spacing.xxxl }}
        >
          Create account
        </Button>

        <View style={styles.bottomIndicatorContainer}>
          <View style={styles.bottomIndicator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
