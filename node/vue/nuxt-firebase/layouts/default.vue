<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Nuxt Firebase</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn 
          v-if="user" 
          flat 
          @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["user"]),
  methods: {
    ...mapActions(["logout"])
  }
};
</script>
