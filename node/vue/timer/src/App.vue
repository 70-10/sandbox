<template>
  <div id="app">
    <p>{{ count }}</p>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  name: "app",
  computed: {
    count() {
      return numeral(this.$store.getters.count).format("00:00:00");
    }
  },
  created() {
    this.$store.dispatch("init");
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
