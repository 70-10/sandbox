const path = require("path");
const AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-1";
const CloudFormation = new AWS.CloudFormation();
const chalk = require("chalk");

module.exports = (...args) => {
  deploy(...args).catch(err => {
    console.error(`${chalk.red(err.code)}: ${err.message}`);
  });
};

async function deploy(...args) {
  const [project_path] = args;
  const absolutePath = project_path.startsWith("/") ? project_path : path.join(process.cwd(), project_path || ".");
  const stack = require(absolutePath);

  if (!await existsStack(stack.name)) {
    console.log(chalk.green(`Create Stack: ${stack.name}`));
    // TODO
  } else {
    console.log(chalk.green(`Update Stack: ${stack.name}`));
    // TODO
  }
}

async function existsStack(StackName) {
  const { Stacks } = await CloudFormation.describeStacks({ StackName })
    .promise()
    .catch(err => {
      if (err.code !== "ValidationError") {
        throw err;
      }
      return {};
    });

  return Stacks ? true : false;
}
