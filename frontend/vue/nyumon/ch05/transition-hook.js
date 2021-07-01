new Vue({
  el: "#app",
  data() {
    return {
      isShown: false
    };
  },
  methods: {
    beforeEnter() {
      console.log("before-enter");
    },
    enter() {
      console.log("enter");
    },
    afterEnter() {
      console.log("after-enter");
    },
    enterCancelled() {
      console.log("enter-cancelled");
    },
    beforeLeave() {
      console.log("before-leave");
    },
    leave() {
      console.log("leave");
    },
    afterLeave() {
      console.log("after-leave");
    },
    leaveCancelled() {
      console.log("leave-cancelled");
    }
  }
});
