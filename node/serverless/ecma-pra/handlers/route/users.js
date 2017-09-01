import handler from "../handler";

export const get = handler(async (event, context) => {
  return {
    statusCode: 200,
    body: { method: "GET", path: "/users" }
  };
});

export const post = handler(async (event, context) => {
  return {
    statusCode: 200,
    body: { method: "POST", path: "/users" }
  };
});
