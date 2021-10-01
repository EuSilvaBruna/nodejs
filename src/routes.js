const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')


routes.get('/users', UserController.list);
routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.show)


module.exports = routes;