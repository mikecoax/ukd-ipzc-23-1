var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'AT-TA',
    price: '10000000000$',
    color: 'White'
  });
});

module.exports = router;