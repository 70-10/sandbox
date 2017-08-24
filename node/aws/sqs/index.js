const SQSReceiver = require("./sqs-receiver");
const PQueue = require("p-queue");

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
  receiver.on("receive", msg => {
    console.log(`Receive: ${msg.Body}`);

    const worker = async () => {
      const time = Math.floor(Math.random() * 6) * 1000;
      await sleep(time);
      console.log(`${msg.Body}: ${time}, queue.size = ${queue.size}`);
      return Promise.resolve();
    };

    queue.add(worker).catch(console.error);
  });
  await receiver.start(QUEUE_NAME);

  const { QueueUrl } = await createQueue(SQS, QUEUE_NAME);
  sendMessages(SQS, QueueUrl).catch(console.error);
}

main().catch(console.error);

async function sendMessages(sqs, queueUrl) {
  let i = 0;
  while (true) {
    console.log(`Send Message: ${i}`);
    await sqs
      .sendMessage({
        QueueUrl: queueUrl,
        MessageBody: `Message: ${i}`
      })
      .promise();
    await sleep(500);
    i++;
  }
}

async function createQueue(sqs, queueName) {
  return await sqs.createQueue({ QueueName: queueName }).promise();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
