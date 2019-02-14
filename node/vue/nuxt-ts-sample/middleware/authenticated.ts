import { Context } from "@nuxt/vue-app";
import * as auth from "../store/modules/auth";

export default function({ store, route, redirect }: Context) {
  if (!store.getters[`${auth.name}/isAuth`] && route.name !== "login") {
    return redirect("/login");
  }

  if (store.getters[`${auth.name}/isAuth`] && route.name === "login") {
    return redirect("/");
  }
}
