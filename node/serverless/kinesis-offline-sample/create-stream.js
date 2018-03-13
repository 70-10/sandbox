const AWS = require("aws-sdk");

const Kinesis = new AWS.Kinesis({
  endpoint: "http://localhost:4568/",
  region: "ap-northeast-1",
  sslEnabled: false
});

async function main() {
  try {
    await Kinesis.createStream({
      ShardCount: 1,
      StreamName: "sample-stream"
    }).promise();
  } catch (err) {
    if (err.code !== "ResourceInUseException") {
      throw err;
    }
    console.error("Kinesis stream already exists");
  }

  const { StreamDescription } = await Kinesis.describeStream({
    StreamName: "sample-stream"
  }).promise();
  console.log(StreamDescription);
  console.log(StreamDescription.StreamARN);
}

main().catch(console.error);
