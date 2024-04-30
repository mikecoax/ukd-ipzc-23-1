var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'gitara',
    type: 'acoustic',
    strings: 6,
    manufacturer: 'Fender',
    price: 500
  });
});


module.exports = router;
