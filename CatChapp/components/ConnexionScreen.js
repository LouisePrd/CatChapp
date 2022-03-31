import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,TextInput  } from 'react-native';


export default class ConnexionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            pass: '',
            showText:false
        }
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUser(evt){
        this.setState({
            user:evt.target.value
        }) 
    }
    handleChangePass(evt){
        this.setState({
            pass:evt.target.value
        }) 
    }

    handleSubmit(){
        console.log(this.state.user)
        alert(this.state.user)
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textS}>Connexion</Text>
        <TextInput
            style={styles.input}
            onChange={this.handleChangeUser}
            value={this.state.user}
        />
        <TextInput
            style={styles.input}
            onChange={this.handleChangePass}
            value={this.state.pass}
            secureTextEntry={true}
        />
          <Button
          title="CONNEXION"
          onPress={this.handleSubmit}
        />
        {this.state.showText === true &&
        <View>
            <Text>{this.state.user}</Text>
            <Text>{this.state.pass}</Text>
        </View>
        }
        
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });