var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
    {
      name: 'T-shirt',
      price: '$20',
      description: 'Casual cotton t-shirt',
    },
    {
      name: 'Jeans',
      price: '$40',
      description: 'Blue denim jeans',
    },
    {
      name: 'Dress',
      price: '$50',
      description: 'Elegant evening dress',
    }
  ]);
});

module.exports = router;
