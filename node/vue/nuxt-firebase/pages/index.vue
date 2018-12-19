<template>
  <v-app>
    <v-container>
      <v-text-field 
        v-model.trim="newMessage" 
        label="Tweet" 
        @keyup.native.enter="addTweet"/>

      <v-list two-line>
        <template v-for="tweet in tweets">
          <v-list-tile :key="tweet.id">
            <v-list-tile-content>
              <v-list-tile-title v-html="tweet.message"/>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      newMessage: ""
    };
  },
  computed: mapState(["tweets"]),
  async mounted() {
    await this.$store.dispatch("init");
  },
  methods: {
    addTweet(message) {
      if (this.newMessage) {
        this.$store.dispatch("addTweet", this.newMessage);
        this.newMessage = "";
      }
    }
  }
};
</script>
