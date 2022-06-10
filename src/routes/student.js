const express = require('express');
const route = express.Router();

const studentControllers = require('../app/controllers/StudentController');


route.get('/delete/:slug', studentControllers.delete);
route.get('/edit/:slug', studentControllers.edit);
route.post('/:slug/update', studentControllers.update);
route.get('/add', studentControllers.add);
route.post('/save', studentControllers.save);

route.get('/list',studentControllers.list);

module.exports = route;