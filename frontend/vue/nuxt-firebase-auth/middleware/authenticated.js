export default function({ store, route, redirect }) {
  if (!store.getters.isAuth && route.name !== "signin") {
    redirect("/signin");
  }

  if (store.getters.isAuth && route.name === "signin") {
    redirect("/");
  }
}
