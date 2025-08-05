const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.api = onRequest((req, res) => {
  logger.info("Incoming request", { method: req.method, path: req.path });

  if (req.path === "/" || req.path === "/home") {
    res.send("<h1>Hello from Firebase Functions!</h1>");
  } else if (req.path === "/ping") {
    res.json({ pong: true });
  } else {
    res.status(404).send("Not found");
  }
});
