// Aboutscreen.js
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ImageBackground, Pressable, onPress } from 'react-native';
import { auth } from "../firebase";

export default class ProfilScreen extends Component {
  
  handleSubmit(){
  alert('Vous êtes connecté !');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textP}>Bonjour ! {"\n"}{"\n"}
        Vous êtes bien connecté.e avec l'adresse suivante :{"\n"}
        {auth.currentUser?.email}</Text>
        <Button
          title="FunFact :)"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F9CBCB',
  },
  textP: {
    paddingTop: 80,
    fontWeight: 'bold',
    textAlign: "center",
    color: 'black',
    fontSize: 20,
    paddingBottom: 30,
    marginLeft: 70,
    marginRight: 70,
  },
});