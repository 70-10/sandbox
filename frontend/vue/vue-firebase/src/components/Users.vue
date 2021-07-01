<template>
  <div>
    <div v-for="user in users" :key="user.name">{{ user.name }} ({{ user.age }})</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["users"]),
  async mounted() {
    await this.$store.dispatch("init");
  }
};
</script>
