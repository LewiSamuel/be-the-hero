const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/', function (req, res) {
    res.send('Hello Wold');
});


routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.post('/incident', incidentController.create);
routes.get('/incident', incidentController.index);
routes.delete('/incident/:id', incidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;