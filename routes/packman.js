var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'Packman',
    price: '20079$',
    description: 'aliveball',
    year: 1980,
    color: 'Yellow'
  });
});

module.exports = router;