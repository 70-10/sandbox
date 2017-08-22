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
  const { QueueUrl } = await createQueue(SQS, QUEUE_NAME);
  sendMessages(SQS, QueueUrl).catch(console.error);
  receiveAndDelete(SQS, QueueUrl, 3).catch(console.error);
}

main().catch(console.error);

async function receiveAndDelete(sqs, queueUrl, receiveCount) {
  const { Messages } = await sqs
    .receiveMessage({
      QueueUrl: queueUrl,
      MaxNumberOfMessages: receiveCount
    })
    .promise();
  if (Messages) {
    Messages.forEach(async msg => {
      console.log(msg.Body);
      await sqs
        .deleteMessage({
          QueueUrl: queueUrl,
          ReceiptHandle: msg.ReceiptHandle
        })
        .promise();
    });
  } else {
    console.log("Message is nothing.");
  }
  await sleep(2000);

  setImmediate(async () => {
    await receiveAndDelete(sqs, queueUrl, receiveCount);
  });
}

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
