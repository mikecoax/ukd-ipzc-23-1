var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'road from India',
    price: '1,5$',
    description: 'Indian road',
  });
});

module.exports = router;