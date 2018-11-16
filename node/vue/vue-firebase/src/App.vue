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
import firebase from "firebase";

export default {
  name: "app",
  data() {
    return {
      user: {}
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {};
    });
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout() {
      firebase.auth().signOut();
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
