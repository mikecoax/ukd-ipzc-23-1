var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    name: 'Gummy',
    from: 'Italy',
    rate: 'the best',
  });
});

module.exports = router;
