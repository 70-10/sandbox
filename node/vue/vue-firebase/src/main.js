import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";
import store from './store'

Vue.config.productionTip = false;

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
