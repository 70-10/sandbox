import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";

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
  render: h => h(App)
}).$mount("#app");
