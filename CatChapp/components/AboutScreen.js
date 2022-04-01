// Aboutscreen.js
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Alert, Image, ImageBackground, Pressable, onPress } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export default class AboutScreen extends Component {
  
  handleSubmit(){
  alert('Les miaulements ne sont pas innés aux chats, ils les ont développés pour communiquer avec les êtres humains. !');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textP}>Qui sommes-nous ?{"\n"}{"\n"}
        Composée de 4 membres, notre équipe a eu la volonté de concevoir un application
        pour inciter les gens à sortir dehors et quoi de mieux que des chats pour se motiver ?{"\n"}{"\n"}
        CatChapp est là pour tous les fans de chats, sortez et répertoriez-en le plus possible !{"\n"}{"\n"}
        Retrouvez nous sur les réseaux sociaux :
        Instagram, FaceBook et Twitter : @CatChapp
        </Text>
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
    fontSize: 2,
    flex: 1,
    backgroundColor: '#F9CBCB',
  },
  textP: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 120,
    marginBottom: 40,
    paddingLeft: 6,
    paddingRight: 6,
    color: '#370776',
    fontFamily: "Chalkduster",
  },
});