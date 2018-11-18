<template>
  <div id="app">
    <div v-if="user.uid" key="login">
      <p>{{ user.displayName }}</p>
      <button type="button" @click="logout">ログアウト</button>
    </div>

    <div v-else key="logout">
      <button type="button" @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    user() {
        return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch("checkAuth");
  },
  methods: {
    login() {
      this.$store.dispatch("loginWithGoogle");
    },
    logout() {
      this.$store.dispatch("logout");
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
