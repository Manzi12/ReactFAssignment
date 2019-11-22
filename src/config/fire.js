import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAbB_TCSwPidH-fWauleqhW89TjmnpptE0",
    authDomain: "reactassignment-38e3c.firebaseapp.com",
    databaseURL: "https://reactassignment-38e3c.firebaseio.com",
    projectId: "reactassignment-38e3c",
    storageBucket: "reactassignment-38e3c.appspot.com",
    messagingSenderId: "822427040757",
    appId: "1:822427040757:web:ce7a1d494fbf800d07febc",
    measurementId: "G-5S2EQBJMG7"
  };

  const fire = firebase.initializeApp(config);
  export default fire;