var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/HomePage', function(req, res, next) {
  res.render('Homepage', { title: 'Express' });
});

router.get('/OurServices', function(req, res, next) {
  res.render('ourSer');
});
router.get('/ContactUs', function(req, res, next) {
  res.render('Contactus');
});

router.get('/dynamic_view', function(req, res){
  res.render('dynamic_view', {
     name: "Gomycode",url:"http://www.tutorialspoint.com"});
});


module.exports = router;
