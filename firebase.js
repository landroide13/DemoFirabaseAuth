// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtf34O6iM37KRHwoAPX621CTZbFe7dYeg",
  authDomain: "fir-auth-f43c1.firebaseapp.com",
  projectId: "fir-auth-f43c1",
  storageBucket: "fir-auth-f43c1.appspot.com",
  messagingSenderId: "485629921058",
  appId: "1:485629921058:web:9be94682ef58916d14c77b"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth();
//const auth = getAuth(app);

export { auth }
