const express = require('express');
const route = express.Router();

const studentControllers = require('../app/controllers/AuthController');

route.post('/save', studentControllers.save);
route.post('/home',studentControllers.authenticate)
route.get('/login', studentControllers.login);
route.get('/register',studentControllers.register);

module.exports = route;