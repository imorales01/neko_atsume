const mongoose = require('mongoose');
const { Schema } = mongoose;

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

mongoose.model('Cat', catSchema);
