// App.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ConnexionScreen from './components/ConnexionScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: '#f1948a' },
      headerTitle: (props) => <LogoTitle {...props} />,
    }),
  },
  About: {
    screen: AboutScreen
  },
  Connexion: {
    screen: ConnexionScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

//retourne le logo du header
function LogoTitle() {
  return (
    <Image
      style={{ width: 70, height: 90, marginTop:40 }}
      source={require('./assets/logo.png')}
    />
  );
}