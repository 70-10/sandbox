import firebase from "firebase";

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
});

export const auth = firebase.auth();
export const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

export default firebase;
