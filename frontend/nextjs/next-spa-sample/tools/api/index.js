const express = require("express");
const cors = require("cors");

const posts = [
  {
    id: 1,
    title: "Test post 1",
  },
  {
    id: 2,
    title: "Test post 2",
  },
  {
    id: 3,
    title: "Test post 3",
  },
  {
    id: 4,
    title: "Test post 4",
  },
];

async function main() {
  const app = express();

  app.use(cors());

  app.get("/posts", (req, res) => {
    return res.json(posts);
  });

  app.get("/posts/:id", (req, res) => {
    return res.json(posts.find((p) => p.id === Number(req.params.id)));
  });

  app.listen(3001, () => {
    console.log("Listen on port 3001");
  });
}

main().catch(console.error);
