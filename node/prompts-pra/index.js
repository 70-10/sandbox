const prompts = require("prompts");

async function main() {
  const questions = [
    {
      type: "text",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "number",
      name: "age",
      message: "How old are you?"
    },
    {
      type: "text",
      name: "about",
      message: "Tell something about yourself",
      initial: "Why should I?"
    },
    {
      type: "text",
      name: "dish",
      message: "Do you like pizza?"
    },
    {
      type: prev => (prev == "pizza" ? "text" : null),
      name: "topping",
      message: "Name a topping"
    }
  ];
  const response = await prompts(questions);

  console.log(response);
}

main().catch(console.error);
