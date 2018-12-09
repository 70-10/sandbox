import firebase from "firebase";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const authenticate = () =>
  new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));

export default new Vuex.Store({
  state: {
    user: {},
    isLoading: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  actions: {
    async checkAuth({ commit }) {
      commit("startLoading");
      const user = await authenticate();
      commit("setUser", user || {});
      commit("stopLoading");
    },
    async loginWithGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      commit("startLoading");
      const { user } = await firebase.auth().signInWithPopup(provider);
      commit("setUser", user);
      commit("stopLoading");
    },
    logout({ commit }) {
      commit("startLoading");
      firebase.auth().signOut();
      commit("setUser", {});
      commit("stopLoading");
    }
  }
});
