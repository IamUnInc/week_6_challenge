var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

var index = require('./routes/index');
var heros = require('./routes/heros');

app.use('/heros', heros);
app.use('/', index);


var databaseUri = 'mongodb://localhost:27017/omicron';

mongoose.connect(databaseUri);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error: ', err);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});
