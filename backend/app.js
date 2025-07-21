const express = require('express');
const { sampleEvents } = require('./events');
const app = express();

app.get('/events', (req, res) => {
  res.json(sampleEvents);
});

module.exports = app;

