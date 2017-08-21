"use strict";

const config = require("config");

module.exports = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: config.description,
  Resources: Object.assign(require("./resources/code-commit")),
};
