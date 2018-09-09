const mongoose = require('mongoose');
const User = mongoose.model('User');
const Cat = mongoose.model('Cat');

// temporary hard coded test data
const userID = '5b2be22e1218433991453955';

module.exports = app => {
  // initial call from login sets user id
  // app.get('api/user/:id'), (req, res) => {
  // 	userID = req.params.id;
  // 	res.send(true);
  // }

  // TODO:
  // login
  // logout
  // return amount of money
  // set amount of money
};
