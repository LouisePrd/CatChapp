import {Keyboard,KeyboardAvoidingView,StyleSheet,Text,TextInput,TouchableOpacity,TouchableWithoutFeedback,View,} from "react-native";
import { Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { useState } from "react";
import { auth } from "../firebase";

const ConnexionScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		const user = userCredential.user;
		console.log(user);
		navigation.navigate("Profil");
	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		Alert.alert('Pas si vite !', 'Les infos ne correspondent pas.');
	  });
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView style={styles.container}>
				<Text style={styles.title}>Connexion</Text>

				<View style={styles.form}>
					<View style={styles.input}>
						<TextInput
							style={{ height: 50 }}
							placeholder="Adresse mail"
							onChangeText={setEmail}
						/>
					</View>

					<View style={styles.input}>
						<TextInput
							style={{ height: 50 }}
							placeholder="Mot de passe"
							secureTextEntry={true}
							onChangeText={setPassword}
						/>
					</View>

					<TouchableOpacity
						onPress={() => {
							login(email, password);
						}}
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Let's go</Text>
						</View>
					</TouchableOpacity>

					<Text
						style={styles.link}
						onPress={() => navigation.navigate("Inscription")}
					>
						Pas encore de compte ?
					</Text>
				</View>

				<StatusBar style="auto" />
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 100,
		backgroundColor: "#F9CBCB",
	},
	link: {
		color: "#788eec",
		marginTop: 20,
		alignSelf: "center",
        fontWeight: "bold",
        fontSize: 16
	},
	button: {
		alignItems: "center",
		paddingTop: 16,
		paddingBottom: 16,
		borderRadius: 8,
		backgroundColor: "#788eec",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
	form: {
		alignSelf: "stretch",
		marginTop: 32,
		marginLeft: 16,
		marginRight: 16,
	},

	input: {
		justifyContent: "center",
		backgroundColor: "#F6F6F6",
		height: 50,
		padding: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: "#FFFFFF",
		borderRadius: 8,
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
	},
});

export default ConnexionScreen;
