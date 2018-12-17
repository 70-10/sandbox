<template>
  <div>
    <div v-for="user in users" :key="user.name">{{ user.name }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["users"]),
  async mounted() {
    this.$store.dispatch("init");
  }
};
</script>
