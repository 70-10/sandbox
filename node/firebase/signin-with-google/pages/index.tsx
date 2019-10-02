import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { NextComponentType } from "next";

const Top: NextComponentType = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      const user = await auth();
      if (user) {
        setName(user.displayName);
        setEmail(user.email);
      }
    })();
  });

  const signIn = async () => {
    const user = await auth();
    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      return;
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      const user = await auth();
      if (user) {
        console.error("not signout");
        return;
      }
      setName("");
      setEmail("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2 className="subtitle">Name : {name}</h2>
      <h2 className="subtitle">Email: {email}</h2>
      <button className="button" onClick={() => signIn()}>
        sign in
      </button>
      <button className="button" onClick={() => signOut()}>
        sign out
      </button>
    </div>
  );
};

function auth(): Promise<firebase.User> {
  return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
}

export default Top;
