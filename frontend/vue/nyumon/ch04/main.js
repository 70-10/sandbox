// import Vue from "vue";
// import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/top",
      component: {
        template: "<div>トップページです。</div>"
      }
    },
    {
      path: "/users",
      component: {
        template: "<div>ユーザー一覧ページです。</div>"
      }
    }
  ]
});

const app = new Vue({
  el: "#app",
  router
});
