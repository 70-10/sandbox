import { spawn, Thread, Worker } from "threads";

async function main() {
  const auth = await spawn(new Worker("./workers/auth"));
  const hashed = await auth.hashPassword("Super secret password", "1234");

  console.log("Hashed password:", hashed);

  await Thread.terminate(auth);
}

main().catch(console.error);
