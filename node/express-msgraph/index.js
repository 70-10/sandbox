const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { OIDCStrategy } = require("passport-azure-ad");
const config = require("config");
const logger = require("morgan");

const oauth2 = require("simple-oauth2").create({
  client: {
    id: config.app_id,
    secret: config.app_password
  },
  auth: {
    tokenHost: "https://login.microsoftonline.com/common",
    authorizePath: "/oauth2/v2.0/authorize",
    tokenPath: "/oauth2/v2.0/token"
  }
});

const app = express();

app.use(
  session({
    secret: "your_secret_value_here",
    resave: false,
    saveUninitialized: false,
    unset: "destroy"
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

passport.use(
  new OIDCStrategy(
    {
      identityMetadata: `https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`,
      clientID: config.app_id,
      responseType: "code id_token",
      responseMode: "form_post",
      redirectUrl: config.redirect_uri,
      allowHttpForRedirectUrl: true,
      clientSecret: config.app_password,
      validateIssuer: false,
      passReqToCallback: false,
      scope: config.scopes
    },
    (iss, sub, profile, accessToken, refreshToken, params, done) => {
      if (!profile.oid) {
        return done(new Error("No OID found in user profile."), null);
      }
      const oauthToken = oauth2.accessToken.create(params);
      done(null, { profile, oauthToken });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.use("/auth", require("./src/routes/auth"));

app.get("/", isAuthenticated, (req, res) => {
  return res.json({ status: "ok", user: req.user });
});

function isAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/auth/signin");
  }
  return next();
}

app.listen(3000, () => {
  console.log("Start: http://localhost:3000/");
});
