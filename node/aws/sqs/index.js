const SQSReceiver = require("./sqs-receiver");
const SQSSender = require("./sqs-sender");
const PQueue = require("p-queue");

const debug = require("debug")("sqs:index");

const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-northeast-1"
});
AWS.config.setPromisesDependency(Promise);

const QUEUE_NAME = "test-queue";

const SQS = new AWS.SQS({
  endpoint: "http://localhost:4576",
  region: "ap-northeast-1"
});

async function main() {
  const queue = new PQueue({ concurrency: 5 });
  const receiver = new SQSReceiver(SQS);
  const sender = new SQSSender(SQS, 10);

  sender.on("send", msg => debug(`Send Message: ${msg}`));

  receiver.on("receive", msg => {
    queue
      .add(worker(msg))
      .then(body => console.log(`Message: ${body}, queue size = ${queue.size}`))
      .catch(console.error);
  });

  const { QueueUrl } = await createQueue(SQS, QUEUE_NAME);
  await sender.start(QUEUE_NAME);
  await receiver.start(QUEUE_NAME);
}

main().catch(console.error);

function worker(msg) {
  const time = Math.floor(Math.random() * 6) * 1000;
  return async () => {
    await sleep(time);
    return msg.Body;
  };
}

async function createQueue(sqs, queueName) {
  return await sqs.createQueue({ QueueName: queueName }).promise();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
