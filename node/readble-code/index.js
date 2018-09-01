async function main() {
  const users = [
    { name: "James", gender: "male" },
    { name: "Mary", gender: "female" },
    { name: "John", gender: "male" },
    { name: "Patricia", gender: "female" },
    { name: "Linda", gender: "female" },
    { name: "Robert", gender: "male" },
  ];

  const result1 = separate1(users);

  console.log(`males  : ${JSON.stringify(result1.males)}`);
  console.log(`females: ${JSON.stringify(result1.females)}`);

  const result2 = separate2(users);
  console.log(`males  : ${JSON.stringify(result2.males)}`);
  console.log(`females: ${JSON.stringify(result2.females)}`);
}

function separate1(users) {
  let males = [];
  let females = [];

  users.forEach(i => {
    if (i.gender === "male") {
      males.push(i);
    } else {
      females.push(i);
    }
  });
  return { males, females };
}

function separate2(users) {
  return {
    males: users.filter(user => user.gender === "male"),
    females: users.filter(user => user.gender === "female"),
  };
}

main().catch(console.error);
