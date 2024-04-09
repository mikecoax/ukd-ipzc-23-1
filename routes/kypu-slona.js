var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'Slon',
    price: '5000$',
    description: 'China Elephant',
  });
});

module.exports = router;
