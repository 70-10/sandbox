const debug = require("debug")("kinesis-offline-sample:handler");

module.exports.putRecord = (event, context, callback) => {
  const { Records } = event;

  const records = Records.map(r => ({
    data: Buffer.from(r.kinesis.data, "base64").toString("ascii")
  }));
  debug(records);

  callback(null, records);
};
