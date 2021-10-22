import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBKmCkld5GXhDdAQ9qlYtqQzKrgyTkloAk",
  authDomain: "wily-75252.firebaseapp.com",
  databaseURL: "https://wily-75252-default-rtdb.firebaseio.com",
  projectId: "wily-75252",
  storageBucket: "wily-75252.appspot.com",
  messagingSenderId: "798000539519",
  appId: "1:798000539519:web:78e151be4132f02d569c4a"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
