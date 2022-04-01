import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDLwpOLaHx4Une0AD4BqNaoaN0lUwqFpHo",
  authDomain: "catchapp-fd5bc.firebaseapp.com",
  projectId: "catchapp-fd5bc",
  storageBucket: "catchapp-fd5bc.appspot.com",
  messagingSenderId: "873243235593",
  appId: "1:873243235593:web:44e7cc974c54891fdf2fd8",
  measurementId: "G-4CZSF5YPFJ"
};

firebase.initializeApp(firebaseConfig);


export default firebase;