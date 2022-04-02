// Homes.js
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('../assets/fond2.png')}>
        <Text style={styles.textS}>Bienvenue !{"\n"} Que souhaitez-vous faire ?</Text>
        <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Connexion')}>
              <Text style={styles.buttonTitle}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Inscription')}>
              <Text style={styles.buttonTitle}>Inscription</Text>
          </TouchableOpacity>
          <Image
          source={require('../assets/cat.gif')}
          style={styles.img}
          />
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('About')}>
              <Text style={styles.buttonTitle}>A propos</Text>
          </TouchableOpacity>
          </ImageBackground>
      </View>
    )
  }
}

//onPress={() => Alert.alert('Simple Button pressed')}


//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
  textS: {
    paddingTop: 80,
    fontWeight: 'bold',
    textAlign: "center",
    color: 'black',
    fontSize: 25,
    paddingBottom: 30,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#f1948a',
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  img: {
    width: 350,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop : 30
  },
});