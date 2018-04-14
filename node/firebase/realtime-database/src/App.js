import React, { Component } from "react";

import firebase from "firebase";
import moment from "moment";

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
      input_artist: "",
      input_album: ""
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

  changeInputAlbum(event) {
    this.setState({ input_album: event.target.value });
  }

  changeInputArtist(event) {
    this.setState({ input_artist: event.target.value });
  }

  addData() {
    const timestamp = Date.now();
    this.database.ref(`users/${this.state.uid}/albums/${timestamp}`).set({
      artist: this.state.input_artist,
      album: this.state.input_album,
      timestamp
    });
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
            <div className="column">
              <div className="field">
                <label className="label">Artist</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={this.state.input_aritst}
                    onChange={event => this.changeInputArtist(event)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Album</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={this.state.input_album}
                    onChange={event => this.changeInputAlbum(event)}
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
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Artist</th>
                    <th>Album</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.state.albums)
                    .reverse()
                    .map(id => {
                      const album = this.state.albums[id];
                      return (
                        <tr>
                          <td>
                            {moment(album.timestamp).format(
                              "YYYY/MM/DD HH:mm:ss"
                            )}
                          </td>
                          <td>{album.artist}</td>
                          <td>{album.album}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
