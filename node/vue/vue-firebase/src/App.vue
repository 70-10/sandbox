<template>
  <div id="app">
    <Loading v-if="isLoading"/>
    <div v-else>
      <div v-if="user.uid" key="login">
        <p>{{ user.displayName }}</p>
        <button type="button" @click="logout">ログアウト</button>
        <h2>Users</h2>
        <Users/>
      </div>

      <div v-else key="logout">
        <button type="button" @click="login">ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./components/Loading";
import Users from "./components/Users";

export default {
  name: "app",
  components: {
    Loading,
    Users
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isLoading() {
      return this.$store.state.isLoading;
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
