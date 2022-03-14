// Import
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Constantes
const Stack = createNativeStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});


//Gestion globale de l'appli
function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} //gestion du haut de page
      >

      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Authentification" component={AuthScreen} />
      <Stack.Screen
      name="Profil"
      component={Profil}
      options={{ cardStyleInterpolator: forFade }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Fonctions des pages

function HomeScreen({ navigation } ) {
  return (
    
    <View style={styles.container}>
      <Text style={{fontSize: 28, textAlign: 'center', marginTop: 80, marginBottom: 40, fontFamily: 'American Typewriter'}}>
      Bonjour et bienvenue sur mon appli !
      </Text>
      <Button
        title="S'authentifier"
        onPress={() => navigation.navigate('Authentification')}
      />
      <Button
        title="Profil"
        onPress={() => navigation.navigate('Profil')}
      />
    </View>
  );
}

function AuthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Profil({ navigation }) {
  return (
    <View style={styles.container}>
       <Text style={styles.textProfil}>
       Un profil utilisateur ou modèle d'utilisateur est un ensemble de données et métadonnées fonction d'un ou plusieurs utilisateurs qui influence le comportement d'un dispositif informatique.
        </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


//Style

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecc4eb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 540,
  },
  textProfil: {
    paddingTop: 50,
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize : 18,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default App;