var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status:res.status, success:true, error:false, messageType:"text", message:"Hello!"});
});

router.use('/api', require('./api'))

/* POST home page. */
router.post('/', function(req, res, next) {
  res.send({status:res.status, success:true, error:false, messageType:"text", message:"Hello!"});
});

module.exports = router;
