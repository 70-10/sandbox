import Dexie from "dexie";

export function createDatabase() {
  const db = new Dexie("MyDatabase");

  db.version(1).stores({
    users: "++id,firstName,lastName,age",
  });

  return {
    users: db.table("users"),
  };
}
