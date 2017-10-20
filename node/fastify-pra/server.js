const fastify = require("fastify")();

const healthcheck = {
  method: "GET",
  url: "/hc",
  schema: {
    response: {
      200: {
        type: "object",
        properties: { status: { type: "string" } }
      }
    }
  },
  handler: (req, reply) => {
    reply.send({
      status: "ok",
      ignore: "this key-value is ignored response body."
    });
  }
};

const schema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" }
        }
      }
    }
  }
};

fastify.get("/", schema, async (request, reply) => {
  reply.type("application/json").code(200);
  return { hello: "world" };
});

fastify.route(healthcheck);

fastify.listen(3000, err => {
  if (err) {
    throw err;
  }
  console.log(`server listening on ${fastify.server.address().port}`);
});
