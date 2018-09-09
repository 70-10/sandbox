import Vue from "vue";
import Hello from "./components/Hello.vue";
import "./styles/main.scss";

const app = new Vue(Hello);
app.$mount("#app");
