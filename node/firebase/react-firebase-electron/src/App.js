import React, { Component } from "react";
import firebase from "./firebase";
import "firebase/firestore";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "https://www.github.com/", text: "", messages: [] };
    this.changeMessage = this.changeMessage.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  async componentDidMount() {
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
        <nav className="navbar is-fixed-top">
          <div className="navbar-item">
            <div className="container">
              <input
                className="input is-rounded"
                type="text"
                value={this.state.url}
              />
            </div>
          </div>
        </nav>
        <div className="columns is-mobile">
          <div className="column is-9">
            <webview id="browse" src={this.state.url} />
          </div>
          <div className="column">
            {this.state.messages.map((m, i) => (
              <article className="media" key={i}>
                <div className="media-content">
                  <div className="content">
                    <p>{m.message}</p>
                  </div>
                </div>
              </article>
            ))}
            <input
              type="text"
              value={this.state.text}
              onChange={this.changeMessage}
            />
            <button onClick={this.postMessage}>追加</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
