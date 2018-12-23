import Vuex from "vuex";
import firebase from "~/plugins/firebase";
import { firebaseMutations, firebaseAction } from "vuexfire";
import uuid from "uuid";
import auth from "~/plugins/auth";

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const tweets = db.collection("tweets");

function createStore() {
  return new Vuex.Store({
    state: {
      user: null,
      tweets: []
    },
    mutations: {
      setUserInfo(state, userInfo) {
        state.user = userInfo;
      },
      ...firebaseMutations
    },
    actions: {
      init: firebaseAction(async ({ bindFirebaseRef }) => {
        await bindFirebaseRef("tweets", tweets.orderBy("timestamp", "desc"));
      }),
      addTweet({ commit }, message) {
        tweets.add({
          id: uuid.v4(),
          message,
          timestamp: new Date()
        });
      },
      callAuth() {
        firebase.auth().signInWithRedirect(provider);
      },
      async checkAuth({ commit }) {
        commit("setUserInfo", await auth());
      },
      logout({ commit }) {
        firebase.auth().signOut();
        commit("setUserInfo", null);
      }
    }
  });
}

export default createStore;
