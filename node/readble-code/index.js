const times = require("lodash.times");

const Gender = {
  Male: 0,
  Female: 1,
};
async function main() {
  const execCounts = [10, 100, 1000, 10000, 100000, 1000000, 10000000];

  execCounts.forEach(count => {
    console.log(`==================== count = ${count} ====================`);
    times(10).forEach(i => {
      console.log(`count: ${i}`);
      const users = createDummyUsers(count);

      console.time("separate1");
      const result1 = separate1(users);
      console.timeEnd("separate1");

      // console.log(`males  : ${JSON.stringify(result1.males)}`);
      // console.log(`females: ${JSON.stringify(result1.females)}`);

      console.time("separate2");
      const result2 = separate2(users);
      console.timeEnd("separate2");
      // console.log(`males  : ${JSON.stringify(result2.males)}`);
      // console.log(`females: ${JSON.stringify(result2.females)}`);
    });
  });
}

function createDummyUsers(num) {
  return times(num, i => ({ name: `${i}`, gender: Math.floor(Math.random() * 2) }));
}

function separate1(users) {
  let males = [];
  let females = [];

  users.forEach(i => {
    if (i.gender === Gender.Male) {
      males.push(i);
    } else {
      females.push(i);
    }
  });
  return { males, females };
}

function separate2(users) {
  return {
    males: users.filter(user => user.gender === Gender.Male),
    females: users.filter(user => user.gender === Gender.Female),
  };
}

main().catch(console.error);
