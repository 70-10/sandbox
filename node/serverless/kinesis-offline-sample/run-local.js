const PORT = 4567;
process.env.KINESIS_ENDPOINT = `http://localhost:${PORT}/`;
process.env.STREAM_NAME = "sample-stream";

const run = require("@rabblerouser/local-kinesis-lambda-runner");
const kinesalite = require("kinesalite");
const AWS = require("aws-sdk");
const { putRecord } = require("./handler");

const Kinesis = new AWS.Kinesis({
  endpoint: process.env.KINESIS_ENDPOINT,
  region: "ap-northeast-1",
  sslEnabled: false
});

function startKinesalite(port) {
  return new Promise((resolve, reject) => {
    const kinesisServer = kinesalite();
    kinesisServer.listen(port, err => (err ? reject(err) : resolve()));
  });
}

async function main() {
  await startKinesalite(PORT);

  console.log(`Kinesalite start ${process.env.KINESIS_ENDPOINT}`);

  await Kinesis.createStream({
    ShardCount: 1,
    StreamName: process.env.STREAM_NAME
  }).promise();

  run(putRecord);
}

main().catch(console.error);
