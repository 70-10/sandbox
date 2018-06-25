async function main() {
  const user1 = {
    name: "Taro",
    age: 22,
    address: {
      prefecture: "Tokyo"
    }
  };

  const user2 = user1;
  const user3 = { ...user1 };
  const user4 = { ...user1, ...{ address: { prefecture: "Osaka" } } };

  console.log(user1 === user2);
  console.log(user1.address === user2.address);
  console.log(user1 == user3);
  console.log(user1.address === user3.address);

  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);
}

main().catch(console.error);
