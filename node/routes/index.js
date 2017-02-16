var express = require('express');
var router = express.Router();
var user=require('../controllers/user.js');


/* GET home page. */
//дrouter������������µķ�������
router.get('/login',user.login);
router.post('/login',user.dologin);
router.post('/xxlogin',user.xxlogin);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
