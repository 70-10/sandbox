const EventEmitter = require("events");
const debug = require("debug")("sqs:sqs-receiver");

class SQSReceiver extends EventEmitter {
  constructor(sqs) {
    super();
    this.sqs = sqs;
    this.queueUrl = "";
    this.receiveCount = 10;
  }

  async start(queueName) {
    if (!this.queueUrl) {
      const { QueueUrl } = await this.sqs
        .getQueueUrl({
          QueueName: queueName
        })
        .promise();
      this.queueUrl = QueueUrl;
    }

    await this.receiveMessages();
  }

  async receiveMessages() {
    const { Messages } = await this.sqs
      .receiveMessage({
        QueueUrl: this.queueUrl,
        MaxNumberOfMessages: this.receiveCount
      })
      .promise();

    if (Messages) {
      Messages.forEach(async msg => {
        this.emit("receive", msg);
        await this.sqs
          .deleteMessage({
            QueueUrl: this.queueUrl,
            ReceiptHandle: msg.ReceiptHandle
          })
          .promise();
      });
    } else {
      debug("Message is nothing.");
    }

    setImmediate(async () => await this.receiveMessages());
  }
}

module.exports = SQSReceiver;
