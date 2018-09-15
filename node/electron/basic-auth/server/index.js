const express = require("express");
const auth = require("basic-auth");

const admins = { username: "user", password: "password" };

function basicAuth(req, res, next) {
  const user = auth(req);
  console.log(user);
  if (!user || admins.username !== user.name || admins.password !== user.pass) {
    res.set("WWW-Authenticate", "Basic realm='example'");
    return res.status(401).end();
  }
  return next();
}

async function main() {
  const app = express();

  app.use(basicAuth);
  app.set("view engine", "pug");

  app.get("/", (req, res) => {
    return res.render("index");
  });

  app.listen(3000);
}

main().catch(console.error);
