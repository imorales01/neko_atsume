'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const createCats = require('./createcats')

//DB config
const db = require('./config').url;

// // Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const User = mongoose.model('User');
const Cat = mongoose.model('Cat');

// create a test user
User.create({ username: 'TestUser', catCollection: [] }, function (err) {
  if (err) {
    console.log('Error creating user');
  }
  else {
    console.log('.');
  }
});

// populate DB with cats
createCats(Cat);