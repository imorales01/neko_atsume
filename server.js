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
require('./models/items');

const User = mongoose.model('User');
const Cat = mongoose.model('Cat');
const Item = mongoose.model('Item');

//test data
const userID = '5b2be22e1218433991453955';

// initial call from login sets user id
// app.get('api/user/:id'), (req, res) => {
// 	userID = req.params.id;
// 	res.send(true);
// }


// handle requests from client-side

// test call
app.get('api/sample', async (req, res) => {
	const data = await Cat.findOne();
	console.log(data);
	res.send(data);
});

// do we need this?
// send cats to fill cat album and shop
// app.get('/api/cat/:id', async (req, res) => {
// 	const data = await Cat.find();
// 	res.send(data);
// });

// send number of cats in database
app.get('/api/cat/count', async (req, res) => {
	const count = await Cat.find().count()
	res.send(count);
});


// send the specified cat information and date collected if user has collected selected cat
app.get('/api/cat/:id', async (req, res) => {
	const data = await Cat.find({ catID: req.params.id });
	let date = null;
	const userData = await User.find({ userID });
	for (user in userData) {
		if (req.params.id === user.catCollection[i].catID) {
			date = user.catCollection[i].dateCollected;
		}
	}
	const obj = { data, date };
	res.send(obj);
});

app.get('/api/cat/shop/:id', async (req, res) => {
	const data = await Cat.find({ catID: req.params.id });
	let flag = false;
	const userData = await User.find({ userID });
	for (user in userData) {
		if (req.params.id === user.catCollection[i].catID) {
			flag = true;
		}
	}
	// set flag for testing purposes
	//	flag = true;
	const obj = { data, flag };
	res.send(obj);
});


// send boolean if cat specified has been collected or not
app.get('/api/cat/collected/:id', async (req, res) => {
	let flag = false;
	const userData = await User.find({ userID });
	for (user in userData) {
		if (req.params.id === user.catCollection[i].catID) {
			flag = true;
		}
	}
	res.send(flag);
});

// set information about cats from client-side

// set that a cat has been bought
// TODO: test
app.get('/api/cat/buy/:id', async (req, res) => {
	const userData = await User.findById(userID);

	const now = new Date();
	const month = (now.getMonth() + 1).toString();
	const day = now.getDate().toString();
	const year = now.getFullYear().toString();

	const date = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${ year }`

	userData.catCollection.push({ catID: req.params.id, date: date })
	userData.save();
	res.send(true);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
