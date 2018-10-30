const MyButton = {
  template: `
    <button>
        <slot>OK</slot>
    </button>
    `
};

new Vue({
  el: "#app",
  components: {
    MyButton
  }
});
