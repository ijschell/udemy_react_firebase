import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCNcf1XHA67AjvasbvoIUXwxrdvOmbknGc",
    authDomain: "instacool-c392d.firebaseapp.com",
    databaseURL: "https://instacool-c392d.firebaseio.com",
    projectId: "instacool-c392d",
    storageBucket: "instacool-c392d.appspot.com",
    messagingSenderId: "273990050811",
    appId: "1:273990050811:web:e38b30df8202b8c636a15e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const storage = firebase.storage()