var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.json([
    {
      name: 'Salami',
      price: '$10',
      description: 'Pizza with salami, cheese and mushroom',
    },
    {
      name: 'Pepperoni',
      price: '$12',
      description: 'Hot pizza',
    },
    {
      name: 'Vegetarian',
      price: '$11',
      description: 'Pizza without meat',
    }
  ]);
});

module.exports = router;
