const EventEmitter = require("events");
const debug = require("debug")("sqs:sqs-sender");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const PQueue = require("p-queue");

class SQSSender extends EventEmitter {
  constructor(sqs, concurrency) {
    super();
    this.sqs = sqs;
    this.queueUrl = "";
    this.queue = new PQueue({ concurrency });
  }

  async start(queueName) {
    if (!this.queueUrl) {
      const { QueueUrl } = await this.sqs
        .getQueueUrl({ QueueName: queueName })
        .promise();
      this.queueUrl = QueueUrl;
    }

    await this.sendMessage();
  }

  async sendMessage() {
    const worker = async () => {
      const i = Math.floor(Math.random() * 5) + 1;
      debug("sendMessage: " + i);
      await this.sqs
        .sendMessage({
          QueueUrl: this.queueUrl,
          MessageBody: `Message: ${i}`
        })
        .promise();

      this.emit("send", i);
      await sleep(i * 1000);
    };
    this.queue.add(worker).catch(console.error);

    setImmediate(async () => await this.sendMessage());
  }
}

module.exports = SQSSender;
