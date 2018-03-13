const AWS = require("aws-sdk");
const uuid = require("uuid");

const Kinesis = new AWS.Kinesis({
  endpoint: "http://localhost:4568/",
  region: "ap-northeast-1",
  sslEnabled: false
});

async function main() {
  const res = await Kinesis.putRecord({
    Data: JSON.stringify({ hello: "world" }),
    PartitionKey: uuid.v1(),
    StreamName: "sample-stream"
  }).promise();
  console.log(res);
}

main().catch(console.error);
