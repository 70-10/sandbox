new Vue({
  el: "#app",
  data() {
    return {
      animationClass: "bounce",
      isShown: false
    };
  },
  computed: {
    activeClass() {
      return `${this.animationClass} animated`;
    }
  }
});
