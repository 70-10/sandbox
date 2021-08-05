import { createDatabase } from "./db";
import { expect } from "@esm-bundle/chai";
import { User } from "./user";

it("db", async () => {
  const { users } = createDatabase();

  const beforeActual = await users.toArray();
  expect(beforeActual).to.deep.equal([]);

  await users.bulkAdd([
    {
      firstName: "Taro",
      lastName: "Yamada",
      age: 20,
    },
    new User("Hanako", "Tanaka", 10),
  ]);

  const actual = await users.toArray();
  expect(actual).to.deep.equal([
    {
      id: 1,
      firstName: "Taro",
      lastName: "Yamada",
      age: 20,
    },
    {
      id: 2,
      firstName: "Hanako",
      lastName: "Tanaka",
      age: 10,
    },
  ]);
});
