// Homes.js
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textS}>Bonjour,{"\n"} Que souhaitez-vous faire ?</Text>
          <Button
          title="CONNEXION"
          onPress={() => this.props.navigation.navigate('About')}
/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 2,
    flex: 1,
    //justifyContent: 'space-between',
    backgroundColor: '#F9CBCB',
  },
  textS: {
    paddingTop: 50,
    textAlign: "center",
    color: 'black',
    fontSize: 25,
    paddingBottom: 50,
  },
});

//<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>