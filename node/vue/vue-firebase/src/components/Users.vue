<template>
  <div>
    <div v-for="user in users" :key="user.name">{{ user.name }}</div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  async created() {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    const querySnapshot = await db.collection("users").get();
    const arr = [];
    querySnapshot.forEach(doc => arr.push(doc.data()));
    this.$store.dispatch("setUsers", arr);
  }
};
</script>
