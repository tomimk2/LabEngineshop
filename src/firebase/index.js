import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDYK_q2eVriTS-8BWDPYKqWirDOPhn0gVQ",
    authDomain: "labengineshop.firebaseapp.com",
    projectId: "labengineshop",
    storageBucket: "labengineshop.appspot.com",
    messagingSenderId: "613401312365",
    appId: "1:613401312365:web:d329a0c86ecf77a60bd364"
  };


  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;
  export const getFirestore = () => firebase.firestore(app);