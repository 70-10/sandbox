const AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-1";
const Lambda = new AWS.Lambda();

async function main() {
  const result = await Lambda.invoke({
    FunctionName: "error-test-dev-hello"
  }).promise();

  console.log(result);
}

main().catch(console.error);
