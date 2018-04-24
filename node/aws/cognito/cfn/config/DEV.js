const C = require("./const");

module.exports = {
  stackName: `${C.SYSTEM}-Cognito-${C.STAGE}`,
  timeoutInMinutes: 30,
  tags: {
    System: C.SYSTEM,
    Stage: C.STAGE,
  },
  prefix: `${C.SYSTEM}-${C.STAGE}`,
};
