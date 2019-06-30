var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home',menuId:'home' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home',menuId:'home' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About',menuId:'About' });
});


module.exports = router;
