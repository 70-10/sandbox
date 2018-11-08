import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "牛乳を買う",
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: "Vue.jsの本を買う",
        labelIds: [1, 3],
        done: true
      }
    ],
    labels: [
      { id: 1, text: "買い物" },
      { id: 2, text: "食料" },
      { id: 3, text: "本" }
    ],
    nextTaskID: 3,
    nextLabelID: 4,
    filter: null
  },
  getters: {
    filteredTasks(state) {
      if (!state.filter) {
        return state.tasks;
      }

      return state.tasks.filter(
        task => task.labelIds.indexOf(state.filter) >= 0
      );
    }
  },
  mutations: {
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskID,
        name,
        labelIds,
        done: false
      });

      state.nextTaskID++;
    },
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(s => s.id === id).forEach(task => {
        task.done = !task.done;
      });
    },
    addLabel(state, { text }) {
      state.labels.push({ id: state.nextLabelID, text });
      state.nextLabelID++;
    },
    changeFilter(state, { filter }) {
      state.filter = filter;
    },
    restore(state, { tasks, labels, nextTaskID, nextLabelID }) {
      state.tasks = tasks;
      state.labels = labels;
      state.nextTaskID = nextTaskID;
      state.nextLabelID = nextLabelID;
    }
  },
  actions: {
    save({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskID: state.nextTaskID,
        nextLabelID: state.nextLabelID
      };

      localStorage.setItem("task-app-data", JSON.stringify(data));
    },
    restore({ commit }) {
      const data = localStorage.getItem("task-app-data");
      if (data) {
        commit("restore", JSON.parse(data));
      }
    }
  }
});
