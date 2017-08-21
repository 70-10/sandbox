"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || "DEV";

const CFNZ = require("cloudformation-z");
const config = require("config");
const template = require("./template");

const program = new CFNZ.EasyCommander(config, template);
program.exec(process.argv);
