import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import MainTabNavigator from './MainTabNavigator';
import AuthInitScreen from '../screens/auth/AuthInitScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignInEmailScreen from '../screens/auth/SignInEmailScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = MainTabNavigator;
const AuthStack = createStackNavigator({ 
  AuthInit: AuthInitScreen, 
  SignUp: SignUpScreen, 
  SignInEmail: SignInEmailScreen,
  ForgotPassword: ForgotPasswordScreen,
  },
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
);