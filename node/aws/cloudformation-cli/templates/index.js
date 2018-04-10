module.exports = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: "Sample Description",
  Resources: {
    SampleCluster: {
      Type: "AWS::ECS::Cluster",
      Properties: {
        ClusterName: "SampleCluster",
      },
    },
  },
  Outputs: {},
};
