import Vuex from "vuex";
import firebase from "@/plugins/firebase";

export default () =>
  new Vuex.Store({
    state: () => ({ user: null, loading: false }),
    getters: {
      isAuth({ user }) {
        return !!user;
      },
      isLoading({ loading }) {
        return loading;
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
      startLoading(state) {
        state.loading = true;
      },
      stopLoading(state) {
        state.loading = false;
      }
    },
    actions: {
      async signinWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithRedirect(provider);
      },
      async signout({ commit }) {
        await firebase.auth().signOut();
        commit("setUser", null);
      },
      setUser({ commit }, payload) {
        commit("setUser", payload);
      },
      startLoading({ commit }) {
        commit("startLoading");
      },
      stopLoading({ commit }) {
        commit("stopLoading");
      }
    }
  });
