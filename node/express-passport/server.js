const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { Strategy } = require("passport-twitter");
const config = require("config");

const app = express();
app.use(
  session({
    secret: "hoge",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(
  new Strategy(config.strategy.twitter, (token, tokenSecret, profile, done) => {
    console.log(profile);
    return done(null, profile);
  })
);

app.get("/", isAuthenticated, (req, res) => {
  res.send({ hello: "world" });
});

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    failureRedirect: "/"
  }),
  (req, res) => res.redirect("/")
);

app.listen(3000, () => {
  console.log("Start: http://localhost:3000/");
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/twitter");
  }
}
