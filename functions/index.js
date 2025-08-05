const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

exports.api = functions.https.onRequest((req, res) => {
  logger.info("Request received");
  res.send("Hello from Firebase v1!");
});

