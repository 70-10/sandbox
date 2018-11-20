const dayjs = require("dayjs");
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.addMessage = functions.https.onRequest((req, res) => {
  const original = req.query.text;
  const db = admin.firestore();
  db.collection("messages")
    .doc(dayjs().format("YYYY-MM-DD"))
    .set({ original });
  return res.status(200).json({ status: "ok" });
});
