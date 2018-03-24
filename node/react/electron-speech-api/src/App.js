import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    /* eslint no-undef: 0 */
    this.recognition = new webkitSpeechRecognition();

    this.recognition.lang = "ja";
    this.recognition.onresult = event => {
      console.log("onresult");
      console.log(event.results[0][0].transcript);
      this.setState({ record: false, message: event.results[0][0].transcript });
    };
    this.state = { record: false, message: "" };
  }

  record() {
    this.setState({ record: true });
    console.log("record");
    this.recognition.start();
  }

  render() {
    return (
      <div className="App">
        <h2>
          {this.state.record ? "録音中" : "Recordボタンをクリックしてください"}
        </h2>
        <button onClick={() => this.record()}>Record</button>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;
