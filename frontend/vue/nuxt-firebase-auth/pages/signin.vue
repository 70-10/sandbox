<template>
  <div>
    <template v-if="isLoading">
      <h1>Loading</h1>
    </template>
    <div v-else>
      <h1>Signin</h1>
      <button @click="signin">signin</button>
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
import auth from "@/plugins/auth";
import { mapActions, mapGetters } from "vuex";

export default {
  beforeMount() {
    this.startLoading();
  },
  async mounted() {
    const user = await auth();
    this.setUser(user);
    if (user) {
      this.$router.push("/");
      return;
    }
    this.stopLoading();
  },
  computed: { ...mapGetters(["isLoading"]) },
  methods: {
    async signin() {
      await this.signinWithGoogle();
    },
    ...mapActions([
      "signinWithGoogle",
      "setUser",
      "startLoading",
      "stopLoading"
    ])
  }
};
</script>
