import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginEmailScreen from '../screens/LoginEmailScreen';
import FeatureScreen from '../screens/FeatureScreen';

const LoginStack = createStackNavigator({
  Login: FeatureScreen,
  LoginEmail: LoginEmailScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Featured',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-star${focused ? '' : '-outline'}`
          : 'md-settings'
      }
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: FeatureScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CartStack = createStackNavigator({
  Cart: CartScreen,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-cart`
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  LoginStack,
  HomeStack,
  CartStack,
  LinksStack,
  SettingsStack,
},
{
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    lazyLoad: true,
    // activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      // backgroundColor: '#222222',
      // backgroundColor: '#f5f5f5',
      backgroundColor: 'rgba(255,255,255,0)',
      borderTopWidth: 0,
      // position: 'absolute',
      // left: 0,
      // right: 0,
      // bottom: 0,
      // height: 50
      paddingTop: 5
    },
    labelStyle: {
      fontFamily: 'montserrat-regular'
    }
  }
}
);
