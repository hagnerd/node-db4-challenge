const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (_req, res) => {
  res.json({ message: 'Hello, world' })
})

module.exports = server;
