import firebase from 'firebase/app'
import 'firebase/messaging'

var firebaseConfig = {
    apiKey: "AIzaSyAkNmn6ymoTDuUVz4WU07gAm60Me5wLcSQ",
    authDomain: "olx-website-react.firebaseapp.com",
    databaseURL: "https://olx-website-react.firebaseio.com",
    projectId: "olx-website-react",
    storageBucket: "olx-website-react.appspot.com",
    messagingSenderId: "534798375900",
    appId: "1:534798375900:web:2d4f51a626467045fd4d19",
    measurementId: "G-DPC3X8HGFQ"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;