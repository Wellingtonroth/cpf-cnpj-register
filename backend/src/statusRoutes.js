// Initialize express router
const express = require('express');
const routes = new express.Router();

// Set default API response
routes.get('/status', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to User-Register!',
    requests: count
  });
});

module.exports = routes;