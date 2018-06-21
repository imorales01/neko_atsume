const mongoose = require('mongoose');
const { Schema } = mongoose;

// define schema for cats
const catSchema = new Schema({
  catID: Number,
  name: String,
  description: {
    appearance: String,
    powerLevel: String,
    personality: String,
  },
  special: Boolean
});

// create model
mongoose.model('Cat', catSchema);