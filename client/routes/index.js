var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ff', function(req, res) {
  res.redirect('/../src/components/yard.js');
});

module.exports = router;