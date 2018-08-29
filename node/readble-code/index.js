async function main() {
  const state = [
    { name: "James", gender: "male" },
    { name: "Mary", gender: "female" },
    { name: "John", gender: "male" },
    { name: "Patricia", gender: "female" },
    { name: "Linda", gender: "female" },
    { name: "Robert", gender: "male" },
  ];

  let males = [];
  let females = [];

  state.forEach(i => {
    if (i.gender === "male") {
      males.push(i);
    } else {
      females.push(i);
    }
  });

  console.log(`males: ${JSON.stringify(males)}`);
  console.log(`females: ${JSON.stringify(females)}`);
}

main().catch(console.error);
