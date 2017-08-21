module.exports = {
  TestRepository: {
    Type: "AWS::CodeCommit::Repository",
    Properties: {
      RepositoryName: "test-repository",
      RepositoryDescription: "Test Repository",
    },
  },
};
