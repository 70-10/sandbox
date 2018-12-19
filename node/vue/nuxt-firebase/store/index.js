import Vuex from "vuex";
import firebase from "~/plugins/firebase";
import { firebaseMutations, firebaseAction } from "vuexfire";
import uuid from "uuid";

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const tweets = db.collection("tweets");

function createStore() {
  return new Vuex.Store({
    state: {
      tweets: []
    },
    mutations: {
      ...firebaseMutations
    },
    actions: {
      init: firebaseAction(async ({ bindFirebaseRef }) => {
        await bindFirebaseRef("tweets", tweets);
      }),
      addTweet({ commit }, message) {
        tweets.add({
          id: uuid.v4(),
          message,
          timestamp: new Date()
        });
      }
    }
  });
}

export default createStore;
