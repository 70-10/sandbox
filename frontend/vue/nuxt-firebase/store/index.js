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
      tweets: [],
      loading: true
    },
    mutations: {
      setUserInfo(state, userInfo) {
        state.user = userInfo;
      },
      setLoading(state, status) {
        state.loading = status;
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
        commit("setLoading", true);
        commit("setUserInfo", await auth());
        commit("setLoading", false);
      },
      logout({ commit }) {
        commit("setLoading", true);
        firebase.auth().signOut();
        commit("setUserInfo", null);
        commit("setLoading", false);
      }
    }
  });
}

export default createStore;
