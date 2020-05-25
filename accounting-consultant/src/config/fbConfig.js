import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

  var firebaseConfig = {
    apiKey: "AIzaSyD945kUX-stJHgW74oHaCAacXuFkCr6p70",
    authDomain: "accounting-consultant.firebaseapp.com",
    databaseURL: "https://accounting-consultant.firebaseio.com",
    projectId: "accounting-consultant",
    storageBucket: "accounting-consultant.appspot.com",
    messagingSenderId: "771768998732",
    appId: "1:771768998732:web:5e98df9ccae19d9cf78de9",
    measurementId: "G-1M5GC5M1ML"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase
