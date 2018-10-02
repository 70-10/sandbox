import { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

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
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
    await db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });

    const querySnapshot = await db.collection("users").get();
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  render() {
    return (
      <div>
        <h1>Firestore Sample</h1>
      </div>
    );
  }
}
