import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function App() {
  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("L'accès à la caméra n'est pas permis !");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Selectionne une image" />
        <Button onPress={openCamera} title="Ouvre la caméra" />
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9CBCB',
  },
  buttonContainer: {
    width: 400,
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});