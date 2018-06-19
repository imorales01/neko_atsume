const express = require("express");
const mongoose = require("mongoose");

const app = express();
//DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
/*
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
*/
