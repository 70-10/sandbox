import firebase from "~/plugins/firebase";

function auth() {
  return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
}

export default auth;
