// Homes.js
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('../assets/fond2.png')}>
        <Text style={styles.textS}>Bienvenue !{"\n"} Que souhaitez-vous faire ?</Text>
          <Button
          title="Connexion"
          color="#4d1a8a"
          onPress={() => this.props.navigation.navigate('Connexion')}/>
                    <Button
          title="Camera"
          color="#4d1a8a"
          onPress={() => this.props.navigation.navigate('Camera')}/>
          <Image
          source={require('../assets/cat.gif')}
          style={{
            width: 350,
            height: 250,
            alignSelf: 'center',
            marginBottom: 20,
            marginTop : 20}}
          />
          <Button
          title="En savoir plus"
          color="#904c8c"
          onPress={() => this.props.navigation.navigate('About')}/>
          </ImageBackground>
      </View>
    )
  }
}



//Styles
          //onPress={() => Alert.alert('Simple Button pressed')}
const styles = StyleSheet.create({
  container: {
    fontSize: 2,
    flex: 1,
    //backgroundColor: '#E7C5E8',
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
  }
});