import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
