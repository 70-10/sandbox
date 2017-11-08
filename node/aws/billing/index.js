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
  const billings = await getServiceBillings(serviceNames, yesterday);

  output(billings);
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

async function getServiceBillings(serviceNames, day) {
  const startTime = day.startOf("day").toDate();
  const endTime = day.endOf("day").toDate();

  const yesterday = day.subtract(1, "days");
  const startTimeYesterday = yesterday.startOf("day").toDate();
  const endTimeYesterday = yesterday.endOf("day").toDate();

  const billings = await Promise.all(
    serviceNames.map(async serviceName => {
      const billing = await metricStatics(serviceName, startTime, endTime);
      return { service_name: serviceName, billing };
    })
  );
  const billings2 = await Promise.all(
    serviceNames.map(async serviceName => {
      const billing = await metricStatics(
        serviceName,
        startTimeYesterday,
        endTimeYesterday
      );
      return { service_name: serviceName, billing };
    })
  );

  return billings.map(e => {
    const serviceName = e.service_name;
    const a = billings.filter(e => e.service_name === serviceName)[0];
    const b = billings2.filter(e => e.service_name === serviceName)[0];
    const diff = a.billing - b.billing;
    e.diff = diff;
    return e;
  });
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
  if (serviceBillings.length <= 0) {
    console.log("total: $0");
    return;
  }

  const totalBilling = serviceBillings
    .map(a => a.billing)
    .reduce((prev, current) => prev + current);
  const diffTotal = serviceBillings
    .map(a => a.diff)
    .reduce((prev, current) => prev + current);

  console.log(
    `total: ${humanizeDollar(totalBilling)} (+${humanizeDollar(diffTotal)})`
  );
  serviceBillings.forEach(e => {
    console.log(
      `${e.service_name}: ${humanizeDollar(e.billing)} (+${humanizeDollar(
        e.diff
      )})`
    );
  });
}

main().catch(console.error);
