const mongoose = require('mongoose');
const User = mongoose.model('cats');

module.exports = app => {
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


  // do we need this?
  // send cats to fill cat album and shop
  // app.get('/api/cat/:id', async (req, res) => {
  // 	const data = await Cat.find();
  // 	res.send(data);
  // });


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

};