var express = require('express');
var router = express.Router();
var hero = require('../models/hero');

router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201); // CREATED
  });
});

router.get('/', function (req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(books);
  });
});

module.exports = router;
