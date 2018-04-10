const AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-1";
const CloudFormation = new AWS.CloudFormation();
const chalk = require("chalk");

module.exports = async templateJSON => {
  const res = await CloudFormation.validateTemplate({
    TemplateBody: JSON.stringify(templateJSON),
  }).promise();
  console.log(chalk.green("Template is Valid"));
  console.log("--------------------");
  console.log(JSON.stringify(templateJSON, null, 2));
  return res;
};
