const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: String,
  username: String,
  catCollection: [{ catID: Number, dateCollected: String }]
});

mongoose.model('User', userSchema);
