var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Step 1 - Create the Schema
var heroSchema = new Schema({
  alias: String,
  firstName: String,
  lastName: String,
  city: String,
  powerName: String,
});

// Step 2 - Create the model
var Hero = mongoose.model('Hero', heroSchema);

// Step 3 - Export our model so we can use it in other parts of our app
module.exports = Hero;
