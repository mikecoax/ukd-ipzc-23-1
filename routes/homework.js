var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'Kviatkovskyi',
    Point: '5',
    description: 'Point for homework',
  });
});

module.exports = router;