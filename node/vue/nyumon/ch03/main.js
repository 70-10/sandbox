Vue.component("fruits-item-name", {
  props: {
    fruitsItem: {
      type: Object,
      required: true
    }
  },
  template: "<li>{{ fruitsItem.name }}</li>"
});

const vm = new Vue({
  el: "#fruits-component",
  data: {
    fruitsItems: [{ name: "梨" }, { name: "イチゴ" }]
  }
});
window.vm = vm;
