import firebase from "firebase/app";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
