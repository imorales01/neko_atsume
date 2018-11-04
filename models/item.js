const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  itemID: Number,
  name: String,
  category: String,
  action_category: String,
  description: String,
  price: Number,
  premium: Boolean,
  size: ['small', 'large'],
});

mongoose.model('Item', itemSchema);
