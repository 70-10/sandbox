const vm = new Vue({
  el: "#app",
  data() {
    return {
      count: 0,
      timerId: null
    };
  },
  created() {
    console.log("created");
    const that = this;
    console.log(this.count);
    console.log(this.$el);
    this.timerId = setInterval(() => that.count++, 1000);
  },
  mounted() {
    console.log("mounted");
    console.log(this.$el);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(this.timerId);
  }
});

window.vm = vm;
