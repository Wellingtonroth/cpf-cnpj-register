const express = require('express');
const UserController = require('./controllers/userController');

const routes = new express.Router();

routes.get('/users', UserController.index);

routes.post('/users', UserController.create);

routes.put("/users/:id", UserController.update);

routes.delete("/users/:id", UserController.delete);

module.exports = routes;