import firebase from "firebase";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  actions: {
    checkAuth({ commit }) {
      firebase.auth().onAuthStateChanged(user => {
        commit("setUser", user || {});
      });
    },
    async loginWithGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const user = await firebase.auth().signInWithPopup(provider);
      commit("setUser", user);
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", {});
    }
  }
});
