import DynamoDB from "./dynamodb";

const TableName = "users";

module.exports = {
  findById
};

async function findById(id) {
  const { Item } = await DynamoDB.get({
    TableName,
    Key: { id }
  }).promise();

  return Item;
}
