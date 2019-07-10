const config = require("config");

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

async function getAccessTokenAsync(req) {
  if (!req.user) {
    return;
  }

  if (!req.user.oauthToken) {
    return;
  }

  const storedToken = oauth2.accessToken.create(req.user.oauthToken);

  if (!storedToken) {
    return;
  }

  if (storedToken.expired()) {
    const newToken = await storedToken.refresh();

    req.user.oauthToken = newToken;
    return newToken.token.access_token;
  }

  return storedToken.token.access_token;
}

module.exports = { getAccessTokenAsync };
