var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Dzmitry' });
});

router.get('/data', function(req, res, next) {
  const user = {
    userName : 'Robert',
    job : 'Developer'
  }
  res.json(user)
});


module.exports = router;
