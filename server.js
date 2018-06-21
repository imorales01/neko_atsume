const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

// // Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

require('./models/user');
require('./models/cat');

const User = mongoose.model('User');
const Cat = mongoose.model('Cat');

const userID = null;

// initial call from login sets user id
app.get('api/user/:id'), (req, res) => {
	userID = req.params.id;
	res.send(true);
}

// handle requests from client-side

// test call
app.get('/api/sample', async (req, res) => {
	const data = await Cat.findOne();
	console.log(data);
	res.send(data);
});

// send cats to fill cat album and shop
app.get('/api/cat/', async (req, res) => {
	const data = await Cat.find();
	res.send(data);
});

// do we need this?
// // send the selected cat information
// app.get('/api/cat/:id', async (req, res) => {
//     const data = await Cat.find({ catID: req.params.id });
//     res.send(data);
//     res.send('Dummy');
// });


// todo : test
// send boolean if cat specified has been collected or not
app.get('/api/cat/:id', async (req, res) => {
	const flag = false;
	const userData = await User.findById(userID);
	for (user in userData) {
		if (req.params.id === user.catCollection[i].catID) {
			flag = true;
		}
	}
	res.send(flag);
});

// set information about cats from client-side

// set that a cat has been bought
// todo : set an actual date
// todo: test
app.get('/api/cat/buy/:id', async (req, res) => {
	const userData = await User.findById(userID);
	const date = '01/01/2018';
	userData.catCollection.push({ catID: req.params.id, date: date })
	userData.save();
	res.send(true);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
