require("es6-promise").polyfill();
require("isomorphic-fetch");
const Amplify = require("aws-amplify").default;
const { Auth, API } = Amplify;

Amplify.configure({
  Auth: {
    identityPoolId: "ap-northeast-1:********-****-****-****-************",
    region: "ap-northeast-1",
    userPoolId: "ap-northeast-1_*********",
    userPoolWebClientId: "**************************"
  },
  API: {
    region: "ap-northeast-1",
    endpoints: [
      {
        name: "API",
        endpoint: "https://custom.domain.com",
        service: "execute-api",
        region: "ap-northeast-1"
      }
    ]
  }
});

async function main() {
  await Auth.signIn("username", "password");
  const res = await API.get("API", "/path");
  console.log(res);
}

main().catch(console.error);
