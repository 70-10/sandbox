import { domainToIPAddress } from "./dns-resolver";

async function main() {
    const domain = "example.com"
    const result = await domainToIPAddress(domain);
    console.log(`${domain} = ${result}`);
}

main().catch(console.error);