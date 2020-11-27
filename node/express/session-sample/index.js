const express = require("express");
const session = require("express-session");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);

async function main() {
  const app = express();
  const redisClient = redis.createClient(6379, "localhost");

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: "keyboard cat",
      resave: false,
    })
  );

  app.get("/", (req, res) => {
    const begginer =
      req.session.value && req.session.value.begginer
        ? req.session.value.begginer
        : Math.random();
    req.session.value = { begginer, name: "test" };
    return res.json(req.session.value);
  });

  app.get("/session-delete", function (req, res) {
    delete req.session.value;
    res.send("session variable deleted");
  });

  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
}

main().catch(console.error);
