require("dotenv").config();
const colour = require("colour");
const express = require("express");
const http = require("http");

const router = express();

colour.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  success: "cyan bold",
  data: "grey",
  help: "cyan",
  warn: ["yellow", "underline"],
  debug: "blue",
  error: "red bold",
});

let app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Roman!\n");
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000".success);

router.get("/", function (req, res) {
  res.send("hello roman");
});
