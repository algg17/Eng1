const { onRequest } = require("firebase-functions");
const logger = require("firebase-functions/logger");

exports.api = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase v1!");
});
