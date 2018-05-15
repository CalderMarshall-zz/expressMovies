var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/daffy', function(req, res, next) {
    // res.redirect('/');
    res.send("daffy duck");
});

module.exports = router;
