const auth = {
  login(id, pass) {
    window.alert(`userid: ${id}\npassword: ${pass}`);
  }
};
const headerTemplate = `
  <div>
    <slot name="header">No title</slot>
  </div>
`;

const contentTemplate = `
  <div>
    <slot name="content">No contents</slot>
  </div>
`;

Vue.component("page-header", {
  template: headerTemplate
});

Vue.component("page-content", {
  template: contentTemplate
});

Vue.component("user-login", {
  template: "#login-template",
  data() {
    return {
      userid: "",
      password: ""
    };
  },
  methods: {
    login() {
      auth.login(this.userid, this.password);
    }
  }
});
// const counterButton = Vue.extend({
//   template:
//     '<span>{{ counter }}個<button v-on:click="addToCart">追加</button></span>',
//   data() {
//     return { counter: 0 };
//   },
//   methods: {
//     addToCart() {
//       this.counter++;
//       this.$emit("increment");
//     }
//   }
// });

const vm = new Vue({
  el: "#login-example"
  // components: {
  //   "counter-button": counterButton
  // },
  // data: {
  //   total: 0,
  //   fruits: [{ name: "梨" }, { name: "イチゴ" }]
  // },
  // methods: {
  //   incrementCartStatus() {
  //     this.total++;
  //   }
  // }
});
window.vm = vm;
