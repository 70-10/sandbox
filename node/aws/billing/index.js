const moment = require("moment");
moment.locale("ja");
const AWS = require("aws-sdk");
AWS.config.setPromisesDependency(Promise);
const numeral = require("numeral");
const CloudWatch = new AWS.CloudWatch({
  region: "us-east-1",
  endpoint: "https://monitoring.us-east-1.amazonaws.com"
});

async function main() {
  const serviceNames = await getServiceNames();
  const yesterday = moment().subtract(1, "days");
  const startTime = yesterday.startOf("day").toDate();
  const endTime = yesterday.endOf("day").toDate();

  const serviceBillings = await Promise.all(
    serviceNames.map(async serviceName => {
      const billing = await metricStatics(serviceName, startTime, endTime);
      return { service_name: serviceName, billing };
    })
  );

  output(serviceBillings);
}

function flatten(ary) {
  return ary.reduce(
    (p, c) => (Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c)),
    []
  );
}

function humanizeDollar(num) {
  return numeral(num).format("$0,0.00");
}

async function getServiceNames() {
  const { Metrics } = await CloudWatch.listMetrics({
    MetricName: "EstimatedCharges",
    Namespace: "AWS/Billing"
  }).promise();

  return flatten(Metrics.map(m => m.Dimensions))
    .filter(m => m.Name === "ServiceName")
    .map(m => m.Value);
}

async function metricStatics(serviceName, startTime, endTime) {
  const { Datapoints } = await CloudWatch.getMetricStatistics({
    MetricName: "EstimatedCharges",
    Namespace: "AWS/Billing",
    Period: 86400,
    StartTime: startTime,
    EndTime: endTime,
    Statistics: ["Average"],
    Dimensions: [
      { Name: "Currency", Value: "USD" },
      { Name: "ServiceName", Value: serviceName }
    ]
  }).promise();
  if (!Datapoints || Datapoints.length <= 0) {
    return 0;
  }
  return Datapoints[0].Average;
}

function output(serviceBillings) {
  const totalBilling = serviceBillings
    .map(a => a.billing)
    .reduce((prev, current) => prev + current);

  console.log(`total: ${humanizeDollar(totalBilling)}`);
  serviceBillings.forEach(e => {
    console.log(`${e.service_name}: ${humanizeDollar(e.billing)}`);
  });
}

main().catch(console.error);
