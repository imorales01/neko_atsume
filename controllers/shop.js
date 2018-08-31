const mongoose = require('mongoose');

module.exports = app => {
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
}