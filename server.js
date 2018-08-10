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

require('controllers/cat_album')(app);
require('controllers/shop')(app);
require('controllers/inventory')(app);
require('controllers/user')(app);


// test call
app.get('api/sample', async (req, res) => {
	const data = await Cat.findOne();
	console.log(data);
	res.send(data);
});



// set information about cats from client-side


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
