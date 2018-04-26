const AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-1";
const SSM = new AWS.SSM();

async function main() {
  const data = await SSM.putParameter({
    Name: "test",
    Type: "SecureString",
    Value: "test-value",
    KeyId: "alias/custom_key", // default: alias/aws/ssm
    Overwrite: false
  }).promise();
  console.log(data);
}

main().catch(console.error);
