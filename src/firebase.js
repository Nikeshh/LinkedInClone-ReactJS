import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDC2HI4-9Rp_tFVF5PY6txymZEFFS6Tijg",
    authDomain: "linkedin-clone-react-6f212.firebaseapp.com",
    projectId: "linkedin-clone-react-6f212",
    storageBucket: "linkedin-clone-react-6f212.appspot.com",
    messagingSenderId: "843619304218",
    appId: "1:843619304218:web:4fb95dc498b7c1107ca2a3",
    measurementId: "G-EJ3N1R7R43"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };