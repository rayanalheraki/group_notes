import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCpDPnKA_9R7BwNE7RfEnIWeoK51vpejVs",
    authDomain: "notlarim-7f1a1.firebaseapp.com",
    databaseURL: "https://notlarim-7f1a1.firebaseio.com",
    projectId: "notlarim-7f1a1",
    storageBucket: "notlarim-7f1a1.appspot.com",
    messagingSenderId: "901497386408",
    appId: "1:901497386408:web:be57bed39eea83f36a599d",
    measurementId: "G-6NJ48HLWV9"
  };
  
  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  
  