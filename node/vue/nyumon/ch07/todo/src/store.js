import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "牛乳を買う",
        done: false
      },
      {
        id: 2,
        name: "Vue.jsの本を買う",
        done: true
      }
    ],
    nextTaskID: 3
  },
  mutations: {
    addTask(state, { name }) {
      state.tasks.push({
        id: state.nextTaskID,
        name,
        done: false
      });

      state.nextTaskID++;
    },
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(s => s.id === id).forEach(task => {
        task.done = !task.done;
      });
    }
  },
  actions: {}
});
