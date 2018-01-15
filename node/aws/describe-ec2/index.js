const flatten = require("lodash.flatten");
const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-northeast-1",
});

const EC2 = new AWS.EC2();

async function main() {
  const { Reservations } = await EC2.describeInstances().promise();
  const instances = flatten(Reservations.map(r => r.Instances)).map(replaceTags);

  instances.forEach(i => {
    console.log(`${i.Tags.Name}: ${i.PublicIpAddress}`);
  });
}

function replaceTags(instance) {
  const tags = instance.Tags;
  let hoge = {};

  tags.forEach(tag => {
    hoge[tag.Key] = tag.Value;
  });

  instance.Tags = hoge;
  return instance;
}

main().catch(console.error);
