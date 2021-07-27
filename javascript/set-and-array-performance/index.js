async function main() {
  const hitIds = [0, 1000, 100000, 100000000];
  performanceCheck(hitIds, 100);
  performanceCheck(hitIds, 1000);
  performanceCheck(hitIds, 10000);
  performanceCheck(hitIds, 100000);
  performanceCheck(hitIds, 1000000);
  performanceCheck(hitIds, 10000000);
}

main().catch(console.error);

function performanceCheck(hitIds, count) {
  console.log(`===== count is ${count} =====`);
  const users = [...Array(count)].map((_, i) => ({
    id: i,
    name: `user-${i}`,
  }));

  console.time("Array.includes");
  const userIds = users.map((i) => i.id);
  const result1 = hitIds.filter((i) => userIds.includes(i));
  //   console.log(result1);
  console.timeEnd("Array.includes");

  console.time("Set.has");
  const userIdSet = new Set(users.map((i) => i.id));
  const result2 = hitIds.filter((i) => userIdSet.has(i));
  //   console.log(result2);
  console.timeEnd("Set.has");
  console.log();
}
