import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    settings: {
      timer: 60,
      interval: 10
    }
  },
  getters: {
    count(state) {
      return state.count;
    },
    settings(state) {
      return state.settings;
    }
  },
  mutations: {
    reset(state, value) {
      state.count = value;
    },
    updateTimer(state, value) {
      console.log("mutation: updateTimer");
      state.settings.timer = Number(value);
    }
  },
  actions: {
    init({ commit, state }) {
      commit("reset", state.settings.timer);
    }
  }
});
