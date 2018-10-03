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
    this.state = { text: "", messages: [] };
    this.changeMessage = this.changeMessage.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  async componentDidMount() {
    firebase.initializeApp(config);
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    const querySnapshot = await db
      .collection("romms")
      .doc("roomA")
      .collection("messages")
      .get();

    const messages = [];
    querySnapshot.forEach(doc => messages.push(doc.data()));
    this.setState({ messages });
    console.log(this.state.messages);
  }

  changeMessage(e) {
    this.setState({ text: e.target.value });
  }

  async postMessage() {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
    await db
      .collection("romms")
      .doc("roomA")
      .collection("messages")
      .add({
        message: this.state.text,
        date: new Date()
      });

    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <h1>Firestore Sample</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeMessage}
        />
        <button onClick={this.postMessage}>追加</button>

        <ul>
          {this.state.messages.map(m => (
            <li>{m.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}
