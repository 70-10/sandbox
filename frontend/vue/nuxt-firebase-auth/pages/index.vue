<template>
  <div>
    <h1>Home</h1>
    <button @click="doSignout">Signout</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["signout"]),
    async doSignout() {
      await this.signout();
      this.$router.push("/signin");
    }
  }
};
</script>
