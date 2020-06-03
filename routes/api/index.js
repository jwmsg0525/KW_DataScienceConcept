var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/subInfo', require('./subway_info'))


/* POST home page. */


module.exports = router;
