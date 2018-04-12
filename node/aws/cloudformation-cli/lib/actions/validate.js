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
  const [project_path] = args;
  const absolutePath = project_path.startsWith("/") ? project_path : path.join(process.cwd(), project_path || ".");
  const stack = require(absolutePath);

  await CloudFormation.validateTemplate({ TemplateBody: JSON.stringify(stack.template) }).promise();
  console.log(chalk.green("Template is valid."));
  console.log("--------------------");
  console.log(JSON.stringify(stack.template, null, 2));
}
