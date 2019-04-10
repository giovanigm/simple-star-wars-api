var express = require('express');
var router = express.Router();
var charactersList = require('../data/characters');

router.get('/', function(req, res, next) {
  res.send({ characters: charactersList });
});

router.get('/:id', function(req, res, next) {
  const character = charactersList.filter(item => item.id === parseInt(req.params.id))[0];
  if(character) {
    res.json(character);
  } else {
    return res.status(403).send({
      message: 'Character not found' 
    });
  }
});

module.exports = router;
