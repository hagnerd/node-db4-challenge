const express = require("express");
const server = express();
const recipes = require("./routes/recipes");
const ingredients = require("./routes/ingredients");

server.use(express.json());
server.use("/api/recipes", recipes);
server.use("/api/ingredients", ingredients);

server.get("/", (_req, res) => {
  res.json({ message: "Hello, world" });
});

module.exports = server;
