const AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-1";
const CloudFormation = new AWS.CloudFormation();
const chalk = require("chalk");
const path = require("path");

module.exports = (...args) => {
  validate(...args).catch(err => {
    console.error(`${chalk.red(err.code)}: ${err.message}`);
  });
};

async function validate(...args) {
  const [fileName] = args;
  const template = require(path.join(process.cwd(), fileName));

  await CloudFormation.validateTemplate({ TemplateBody: JSON.stringify(template) }).promise();
  console.log(chalk.green("Template is valid."));
  console.log("--------------------");
  console.log(JSON.stringify(template, null, 2));
}
