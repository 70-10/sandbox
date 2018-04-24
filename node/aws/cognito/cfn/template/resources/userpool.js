const config = require("config");

module.exports = {
  UserPool: {
    Type: "AWS::Cognito::UserPool",
    Properties: {
      UserPoolName: `${config.prefix}`,
      Schema: [
        {
          Name: "displayname",
          AttributeDataType: "String",
          Mutable: true,
          StringAttributeConstraints: {
            MaxLength: 256,
            MinLength: 1,
          },
        },
        {
          Name: "messageTemplates",
          AttributeDataType: "String",
          Mutable: true,
          StringAttributeConstraints: {
            MaxLength: 256,
            MinLength: 1,
          },
        },
      ],
    },
  },
  UserPoolClient: {
    Type: "AWS::Cognito::UserPoolClient",
    Properties: {
      ClientName: "lady-app",
      UserPoolId: { Ref: "UserPool" },
      RefreshTokenValidity: 30,
    },
  },
};
