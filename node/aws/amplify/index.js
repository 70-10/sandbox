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
    endpoints: [
      {
        name: "API",
        endpoint: "https://**********.execute-api.ap-northeast-1.amazonaws.com"
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
