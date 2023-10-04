import express from "express";
import cors from "cors";
import { IncomingForm } from "formidable";

const app = express();

app.use(cors());
app.post("/upload", async (req, res, next) => {
  const form = new IncomingForm();
  const formData = await form.parse(req);

  console.log({ formData });

  return res.status(200).end();
});

app.listen(4000, () => {
  console.log("API listening on port 4000");
});
