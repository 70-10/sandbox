"use strict";

const C = require("./const");

module.exports = {
  stackName: `${C.SYSTEM}-${C.STAGE}-CI`,
  description: "CI Stacks",
  timeoutInMinutes: 10,
  tags: {
    System: C.SYSTEM,
    Stage: C.STAGE,
  },
  //custom settings
  prefix: `${C.SYSTEM}-${C.STAGE}`,
};
