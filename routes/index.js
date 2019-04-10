var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('You are on Simple Star Wars API by giovanigm');
});

module.exports = router;
