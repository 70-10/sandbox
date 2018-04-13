import React, { Component } from "react";

import firebase from "firebase";

function auth() {
  return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    });
    this.database = this.app.database();
    this.state = {
      uid: "",
      name: "",
      mail: "",
      photoURL: "",
      albums: {},
      input_vlaue: ""
    };
  }

  async componentWillMount() {
    const user = await auth().catch(console.error);
    console.log(user);
    if (user) {
      this.setState({
        uid: user.uid,
        name: user.displayName,
        mail: user.email,
        photoURL: user.photoURL
      });
    }

    this.database
      .ref(`users/${this.state.uid}/albums`)
      .on("value", snapshot => {
        console.log(snapshot.val());
        this.setState({ albums: snapshot.val() });
      });
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
      this.setState({ uid: "", name: "", mail: "", photoURL: "" });
    } catch (e) {
      console.error(e);
    }
  }

  changeInputValue(event) {
    this.setState({ input_value: event.target.value });
  }

  addData() {
    console.log(this.state.input_value);
    this.database
      .ref(`users/${this.state.uid}/albums/${this.state.input_value}`)
      .set({ name: this.state.input_value });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={this.state.photoURL} alt="" />
                      </figure>
                    </div>

                    <div className="media-content">
                      <p className="title is-4">{this.state.name}</p>
                      <p className="subtitle is-6">{this.state.mail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info" onClick={() => this.signIn()}>
                    Sign In
                  </a>
                </p>
                <p className="control">
                  <a href="" className="button" onClick={() => this.signOut()}>
                    Sign Out
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="colmun">
              <h1 className="title">Database: {this.state.uid}</h1>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={this.state.input_value}
                    onChange={event => this.changeInputValue(event)}
                  />
                </div>
              </div>
              <a className="button" onClick={() => this.addData()}>
                Add
              </a>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              {JSON.stringify(this.state.albums, null, 2)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
