process.env.NODE_ENV = process.env.NODE_ENV || "DEV";

const CFNZ = require("cloudformation-z");
const config = require("config");
const template = require("./template/index.js");

const commander = new CFNZ.EasyCommander(config, template);
commander.exec(process.argv);
