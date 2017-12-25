var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const User = mongoose.model('user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('respond with a resource');
});

router.get('/getOne', function(req, res, next) {
	User.find({
		email: req.query.email,
		password: req.query.password
	}).exec((err, result) => {
		if(err) {
  			res.send('some erro');
		}
		else if(result) { 
			res.json(result);
		}
		else {
			res.send('NR')
		}
	});
});


router.post('/new', (req, res, next) => {
	console.log(req.body)
	const user = new User(req.body);
	user.save((err, result) => {
		res.send(result);
	});
});

module.exports = router;