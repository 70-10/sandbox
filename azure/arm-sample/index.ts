import { interactiveLogin } from "@azure/ms-rest-nodeauth";
import { ResourceManagementClient } from "@azure/arm-resources";
const subscriptionId = "";

async function main() {
  const creds = await interactiveLogin();
  const client = new ResourceManagementClient(creds, subscriptionId);
  const result = await client.resources.list();

  console.log(result);
}

main().catch(console.error);
