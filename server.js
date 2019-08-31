const express = require('express');
const server = express();
const recipes = require('./routes/recipes');

server.use(express.json());
server.use('/api/recipes', recipes);

server.get('/', (_req, res) => {
  res.json({ message: 'Hello, world' })
})

module.exports = server;
