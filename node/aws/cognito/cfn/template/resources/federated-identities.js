const config = require("config");

module.exports = {
  IdentityPool: {
    Type: "AWS::Cognito::IdentityPool",
    Properties: {
      IdentityPoolName: `${config.tags.System}_${config.tags.Stage}`,
      AllowUnauthenticatedIdentities: false,
      CognitoIdentityProviders: [
        {
          ClientId: { Ref: "UserPoolClient" },
          ProviderName: {
            "Fn::Join": ["", ["cognito-idp.", { Ref: "AWS::Region" }, ".amazonaws.com/", { Ref: "UserPool" }]],
          },
        },
      ],
    },
  },
  AuthenticatedPolicy: {
    Type: "AWS::IAM::ManagedPolicy",
    Properties: {
      ManagedPolicyName: `${config.prefix}-Authenticated`,
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: ["mobileanalytics:PutEvents", "cognito-sync:*", "cognito-identity:*"],
            Resource: ["*"],
          },
        ],
      },
    },
  },
  UnAuthenticatedPolicy: {
    Type: "AWS::IAM::ManagedPolicy",
    Properties: {
      ManagedPolicyName: `${config.prefix}-UnAuthenticated`,
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: ["mobileanalytics:PutEvents", "cognito-sync:*"],
            Resource: ["*"],
          },
        ],
      },
    },
  },
  AuthenticatedRole: {
    Type: "AWS::IAM::Role",
    Properties: {
      RoleName: `${config.prefix}-Authenticated`,
      ManagedPolicyArns: [{ Ref: "AuthenticatedPolicy" }],
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: "sts:AssumeRoleWithWebIdentity",
            Principal: { Federated: "cognito-identity.amazonaws.com" },
            Condition: {
              StringEquals: { "cognito-identity.amazonaws.com:aud": { Ref: "IdentityPool" } },
              "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "authenticated" },
            },
          },
        ],
      },
    },
  },
  UnAuthenticatedRole: {
    Type: "AWS::IAM::Role",
    Properties: {
      RoleName: `${config.prefix}-UnAuthenticated`,
      ManagedPolicyArns: [{ Ref: "UnAuthenticatedPolicy" }],
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: "sts:AssumeRoleWithWebIdentity",
            Principal: { Federated: "cognito-identity.amazonaws.com" },
            Condition: {
              StringEquals: { "cognito-identity.amazonaws.com:aud": { Ref: "IdentityPool" } },
              "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "authenticated" },
            },
          },
        ],
      },
    },
  },
  RoleAttachment: {
    Type: "AWS::Cognito::IdentityPoolRoleAttachment",
    Properties: {
      IdentityPoolId: { Ref: "IdentityPool" },
      Roles: {
        authenticated: { "Fn::GetAtt": ["AuthenticatedRole", "Arn"] },
        unauthenticated: { "Fn::GetAtt": ["UnAuthenticatedRole", "Arn"] },
      },
    },
  },
};
