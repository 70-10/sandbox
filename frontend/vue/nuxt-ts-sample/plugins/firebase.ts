import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.app.length) {
  firebase.initializeApp({});
}

export default firebase;
