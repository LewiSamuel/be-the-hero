const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');


routes.get('/', function (req, res) {
    res.send('Hello Wold');
});


routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);


module.exports = routes;