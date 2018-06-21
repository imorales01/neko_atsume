const mongoose = require('mongoose');
const { Schema } = mongoose;

// define user schema
const userSchema = new Schema({
  userID: String,
  username: String,
  catCollection: [ { catID: Number, dateCollected: String } ]
});

// create model from schema
mongoose.model('User', userSchema);
