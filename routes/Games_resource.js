var express = require('express');
var router = express.Router();


var games = [
  {
    id: 1,
    name: 'FIFA 23',
    price: '$10',
    description: 'Football game',
  },
  {
    id: 2,
    name: 'Need for Speed',
    price: '$12',
    description: 'This is racing',
  },
  {
    id: 3,
    name: 'Mortal Kombat',
    price: '$11',
    description: 'This is fighting',
  }
];


router.get('/', function(req, res, next) {
  res.json(games);
});


router.post('/', function(req, res, next) {
  var newGame = req.body;
  
  newGame.id = games.length + 1;

  games.push(newGame);
  res.json(newGame);
});


router.delete('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);

  var index = games.findIndex(game => game.id === id);
  if (index !== -1) {
   
    games.splice(index, 1);
    res.send(`Game with id ${id} has been deleted.`);
  } else {
    res.status(404).send('Game not found.');
  }
});

module.exports = router;

