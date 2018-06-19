'use strict';

const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./config');
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
    icon: String,
    hotspotImg: [ String ]
});

// create models from schema
const User = mongoose.model('User', userSchema);
const Cat = mongoose.model('Cat', catSchema);

User.create({ username: "TestUser", catCollection: [] }, function(err){
    console.log("user");
});

let hotspotImg = [];
for (let i = 1; i < 6; i++) { 
    hotspotImg.push(i.toString() + ".png");
}
const icon = "/icon.png";

Cat.create({ name: "Peaches", description: { appearance: "Tan & Orange", powerLevel: "45", personality: "Capricious" }, icon, hotspotImg}, function(err){
    console.log("cat");
});

