const express = require('express');
const mongoose = require('mongoose');

const app = express();

const { mongoURI } = require('./config/keys');
mongoose
  .connect(mongoURI)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

require('./models/user');
require('./models/cat');

const User = mongoose.model('User');
const Cat = mongoose.model('Cat');

require('./controllers/cat_album')(app);
require('./controllers/shop')(app);
require('./controllers/items')(app);
require('./controllers/user')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
