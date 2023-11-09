const express = require('express');
const router = express.Router();
const State = require('../models/state');
const City = require('../models/city');
const country = require('../models/country');

router.get('/api/paises', (rep, res) => {
    const countries = [
        new country(1, 'Estados Unidos', 1000),
        new country(2, 'México', 2331),
        new country(3, 'Cánada', 4000)
    ];
    res.json(countries);
});

router.get('/api/estados/:countryId', (req, res) => {
    const countryId = parseInt(req.params.countryId, 10);
    const states = [
      new State(1, 'Texas', 500000),
      new State(2, 'Merida', 700000),
      new State(3, 'Manitoba', 700000),

    ];
  
    const filteredStates = states.filter((state) => state.countryId === countryId);
  
    res.json(filteredStates);
});

router.get('/api/ciudades/:stateId', (req, res) => {
    const stateId = parseInt(req.params.stateId, 10);

    const cities = [
      new City(1, 'Houston', 100000),
      new City(2, 'Yucatan', 150000),
      new City(3, 'Brandon', 150000),

    ];
  

    const filteredCities = cities.filter((city) => city.stateId === stateId);
  
    res.json(filteredCities);
  });
  
  module.exports = router;

