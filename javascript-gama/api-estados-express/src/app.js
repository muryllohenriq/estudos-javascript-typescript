const express = require("express");
const listStates = require("../src/database/estados.json");
const server = express();

server.get("/", (req, res) => {
  res.json(listStates);
});

server.listen(8000, console.log("server running"));
