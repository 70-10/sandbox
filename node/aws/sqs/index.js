const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-northeast-1"
});
AWS.config.setPromisesDependency(Promise);

async function run() {
  const SQS = new AWS.SQS({
    endpoint: "http://localhost:4576",
    region: "ap-northeast-1"
  });

  const result = await SQS.getQueueUrl({
    QueueName: "test-queue"
  }).promise()
  console.log(result);
}

run().catch(console.error)
