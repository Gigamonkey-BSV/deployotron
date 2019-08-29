var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Payload");
});

router.post('/testDeploy', function(req, res, next) {
    console.log(req.body)
});

module.exports = router;
