// App.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ConnexionScreen from './components/ConnexionScreen';
import InscriptionScreen from './components/InscriptionScreen';
import CameraScreen from './components/CameraScreen';
import ProfilScreen from './components/CameraScreen';

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
    screen: AboutScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: '#f1948a' },
      headerTitle: (props) => <LogoTitle {...props} />,
    }),
  },
  Connexion: {
    screen: ConnexionScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: '#f1948a' },
      headerTitle: (props) => <LogoTitle {...props} />,
    }),
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: '#f1948a' },
      headerTitle: (props) => <LogoTitle {...props} />,
    }),
  },
  Inscription: {
    screen: InscriptionScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: '#f1948a' },
      headerTitle: (props) => <LogoTitle {...props} />,
    }),
  },
  Profil: {
    screen: ProfilScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: '#f1948a' },
      headerTitle: (props) => <LogoTitle {...props} />,
    }),
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