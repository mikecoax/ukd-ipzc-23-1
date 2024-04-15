var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'Car',
    price: '150000$',
    description: 'BMW M8',
    year: 2019,
    mileage: 10000,
    color: 'Black'
  });
});

module.exports = router;