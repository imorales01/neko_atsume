'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./config');
const createCats = require('./createcats')
require('../models/user');
require('../models/cat');

const app = express();
mongoose.connect(connection.url);

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