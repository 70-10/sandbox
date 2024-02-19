import { Hono } from "hono";
import { DependencyTypes, diContainer } from "./di-config";
import { DIContainer } from "./di-container";

const app = new Hono<{
  Variables: {
    diContainer: DIContainer<DependencyTypes>;
  };
}>();

app.use("*", (c, next) => {
  c.set("diContainer", diContainer);
  return next();
});

app.get("/users/:id", (c) => {
  const di = c.get("diContainer");
  const id = parseInt(c.req.param("id"));

  const userService = di.get("UserService");
  const user = userService.getUser(id);

  return c.json(user);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
