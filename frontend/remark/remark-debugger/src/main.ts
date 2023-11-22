import { remark } from "remark";

const sourceMarkdown = `
# heading

[Google](https://www.google.com/)

https://www.google.com/

* list
* item

\`\`\`js
function () {}
\`\`\`
`;

document.getElementById("source").textContent = sourceMarkdown;

async function main() {
  const file = await remark()
    // .use()
    .process(sourceMarkdown)
  document.getElementById("result").textContent = String(file)
}

main().catch(err => {
  document.getElementById("error").textContent = err
})

