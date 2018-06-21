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


// handle requests from client-side

// test call
app.get("/api/test", (req, res) => {
    console.log("hello!");
    res.send("Hello!");
});

// send 4 seen cats to fill a page of the cat album
app.get("/api/cat-album/:page", (req, res) => {
    res.send("Dummy");
});

// send the selected cat information
app.get("/api/cat-album/:id", (req, res) => {
    res.send("Dummy");
});

// send 4 cats to fill a page of the cat shop
app.get("/api/cat-shop/:page", (req, res) => {
    res.send("Dummy");
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
