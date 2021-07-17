import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBfM4HMCrb4LhLRXgyfB-QMj1GiAaIloB8",
    authDomain: "login-b5dcb.firebaseapp.com",
    projectId: "login-b5dcb",
    storageBucket: "login-b5dcb.appspot.com",
    messagingSenderId: "647325634030",
    appId: "1:647325634030:web:c84809c583e964d918d2ff"
});

export default firebaseConfig;