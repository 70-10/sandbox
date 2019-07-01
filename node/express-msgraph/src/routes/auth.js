const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/signin",
  (req, res, next) => {
    passport.authenticate("azuread-openidconnect", {
      response: res,
      prompt: "login",
      failureRedirect: "/",
      failureFlash: true
    })(req, res, next);
  },
  (req, res) => res.redirect("/")
);

router.post(
  "/callback",
  (req, res, next) => {
    passport.authenticate("azuread-openidconnect", {
      response: res,
      failureRedirect: "/",
      failureFlash: true
    })(req, res, next);
  },
  (req, res) => {
    return res.redirect("/");
  }
);

module.exports = router;
