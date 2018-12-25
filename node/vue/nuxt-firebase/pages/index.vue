<template>
  <v-content>
    <v-container v-if="!user">
      <p>Unauthroized</p>
      <button @click="callAuth">Login</button>
    </v-container>

    <v-container v-else>
      <button @click="logout">Logout</button>
      <v-layout 
        row 
        wrap>
        <v-flex>
          <v-text-field
            v-meta-ctrl-enter="addTweet"
            v-model.trim="newMessage"
            outline
            label="Cmd + Enter"
            single-line
          />
        </v-flex>

        <v-btn 
          round 
          color="info" 
          @click="addTweet">Tweet</v-btn>
      </v-layout>
      <v-list two-line>
        <template v-for="tweet in tweets">
          <v-list-tile :key="tweet.id">
            <v-list-tile-content>
              <v-list-tile-title v-html="tweet.message"/>
              <v-list-tile-sub-title v-html="dateFormat(tweet.timestamp.toDate())"/>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-container>
  </v-content>
</template>

<script>
import auth from "~/plugins/auth";
import { mapState, mapActions } from "vuex";
import { format } from "date-fns";

export default {
  data() {
    return {
      newMessage: ""
    };
  },
  computed: mapState(["user", "tweets"]),
  async mounted() {
    this.$store.dispatch("checkAuth");
    if (this.user) {
      await this.$store.dispatch("init");
    }
  },
  methods: {
    addTweet(message) {
      if (this.newMessage) {
        this.$store.dispatch("addTweet", this.newMessage);
        this.newMessage = "";
      }
    },
    dateFormat(date) {
      return format(date, "YYYY/MM/DD HH:mm");
    },
    ...mapActions(["callAuth", "logout"])
  }
};
</script>
