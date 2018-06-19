'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./config');
const createCats = require('./createcats')

const app = express();
mongoose.connect(connection.url);

// define schema
const userSchema = new Schema({
  userID: String,
  username: String,
  catCollection: [String]
});

const catSchema = new Schema({
  catID: String,
  name: String,
  description: {
    appearance: String,
    powerLevel: String,
    personality: String,
  },
});

// create models from schema
const User = mongoose.model('User', userSchema);
const Cat = mongoose.model('Cat', catSchema);

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