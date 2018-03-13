const run = require("@rabblerouser/local-kinesis-lambda-runner");

const lambda = require("./handler").hello;

run(lambda);
