const config = require("config");

module.exports = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: `${config.prefix}-Cognito`,
  Resources: Object.assign(require("./resources/userpool"), require("./resources/federated-identities")),
  Outputs: {
    UserPool: { Value: { Ref: "UserPool" } },
    UserPoolClient: { Value: { Ref: "UserPoolClient" } },
    IdentityPool: { Value: { Ref: "IdentityPool" } },
  },
};
