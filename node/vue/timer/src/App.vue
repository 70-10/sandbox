<template>
  <div id="app">
    <p>{{ formatCount }}</p>
    <p>Timer</p>
    <input type="text" :value="settings.timer" @input="updateTimer">
    <button @click="setCount">設定</button>
    <p>Interval</p>
    <input type="text" :value="settings.interval">
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  name: "app",
  computed: {
    count() {
      return this.$store.getters.count;
    },
    formatCount() {
      return numeral(this.$store.getters.count).format("00:00:00");
    },
    settings() {
      return this.$store.getters.settings;
    }
  },
  created() {
    this.$store.dispatch("init");
  },
  methods: {
    updateTimer(e) {
      this.$store.commit("updateTimer", e.target.value);
    },
    setCount() {
      this.$store.dispatch("init");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
