import handler from "../handler";
import Users from "../../lib/db/users";

export const get = handler(async (event, context) => {
  return {
    statusCode: 200,
    body: { method: "GET", path: "/users" }
  };
});

export const findById = handler(async (event, context) => {
  const id = Number(event.pathParameters.id);
  const user = await Users.findById(id);
  if (!user) {
    return { statusCode: 404 };
  }
  return {
    statusCode: 200,
    body: user
  };
});

export const post = handler(async (event, context) => {
  return {
    statusCode: 200,
    body: { method: "POST", path: "/users" }
  };
});
