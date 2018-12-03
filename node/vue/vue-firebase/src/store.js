import firebase from "firebase";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
    checkAuth({ commit }) {
      commit("startLoading");
      firebase.auth().onAuthStateChanged(user => {
        commit("setUser", user || {});
        commit("stopLoading");
      });
    },
    async loginWithGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await firebase.auth().signInWithPopup(provider);
      commit("setUser", user);
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", {});
    }
  }
});
