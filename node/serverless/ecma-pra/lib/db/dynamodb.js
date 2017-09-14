import AWS from "../aws";

const isOffline = () => process.env.IS_OFFLINE;

module.exports = isOffline()
  ? new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000"
    })
  : new AWS.DynamoDB.DocumentClient();
