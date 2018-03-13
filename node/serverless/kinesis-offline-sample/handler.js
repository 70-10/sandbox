module.exports.hello = (event, context, callback) => {
  const { Records } = event;

  const records = Records.map(r => ({
    data: Buffer.from(r.kinesis.data, "base64").toString("ascii")
  }));

  if (Records.length > 0) {
    console.log(JSON.stringify(Records));
  }

  callback(null, records);
};
