// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhLZnZ5g53UnoRG8VghqvBZbnMpQkIYw8",
  authDomain: "projetappmob-9593b.firebaseapp.com",
  projectId: "projetappmob-9593b",
  storageBucket: "projetappmob-9593b.appspot.com",
  messagingSenderId: "889898311104",
  appId: "1:889898311104:web:6a8730b7d0c0a597823c25",
  measurementId: "G-ED6B99F032"
};

let app;
if (firebase.apps. length === 0) {
  app = firebase. initializeApp(firebaseConfig);
 } else {
  app = firebase.app()
}
        
const auth = firebase.auth()
export { auth };