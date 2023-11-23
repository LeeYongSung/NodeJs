var express = require('express');
var router = express.Router();

/* GET test page. */
// /test
// /test라고 작성하면 /test/test
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Test' });
});

module.exports = router;
