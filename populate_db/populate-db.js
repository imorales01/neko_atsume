const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

mongoose
  .connect(mongoURI)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

require('../models/cat');
require('../models/items');

const Cat = mongoose.model('Cat');
const Item = mongoose.model('Cat');
// if flag cat then load cats
require('./load-from-json')(Cat)

// if flag item then load items
require('./load-from-json')(Item)