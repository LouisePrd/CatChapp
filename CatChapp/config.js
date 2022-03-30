import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhLZnZ5g53UnoRG8VghqvBZbnMpQkIYw8',
  authDomain: 'projetappmob-9593b.firebaseapp.com',
  databaseURL: 'https://appMob1.firebaseio.com',
  projectId: 'projetappmob-9593b',
  storageBucket: 'projetappmob-9593.appspot.com',
  messagingSenderId: '963',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };