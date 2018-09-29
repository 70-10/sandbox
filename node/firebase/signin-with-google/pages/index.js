import { Component } from "react";
import firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", mail: "" };
  }

  async componentDidMount() {
    firebase.initializeApp(config);
    const user = await auth().catch(console.error);
    if (user) {
      this.setState({ name: user.displayName, mail: user.email });
    }
  }

  async signIn() {
    const user = await auth().catch(console.error);
    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      return;
    }
  }

  async signOut() {
    try {
      await firebase.auth().signOut();
      const user = await auth().catch(console.error);
      if (user) {
        console.error("not signout");
        return;
      }
      this.setState({ name: "", mail: "" });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h2 className="subtitle">Name : {this.state.name}</h2>
        <h2 className="subtitle">Email: {this.state.mail}</h2>
        <button className="button" onClick={() => this.signIn()}>
          sign in
        </button>
        <button className="button" onClick={() => this.signOut()}>
          sign out
        </button>
      </div>
    );
  }
}

function auth() {
  return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
}
