var express = require('express'),
	db = require('db'),
	router = express.Router(),
	database = new db();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.param(['id'], function (req, res, next, value) {
  next();
});

router.get('/:id', function(req, res, next) {
  	res.json(database.find(req.params.id, 0));
});

// define the home page route
router.get('/', function(req, res, next) {
  res.json(database.find(null, 1));
});

router.post('/', function (req, res) {
	database.add(req.body);

	res.sendStatus(200);
});

router.delete('/:id', function (req, res) {
	database.delete(req.params.id);

	res.sendStatus(200);
});

router.delete('/', function (req, res) {
	console.log('From delete ROUTER')
	console.log(req.params);
	database.delete(req.body.id);

	res.sendStatus(200);
});

router.put('/', function (req, res) {
	database.add(req.body);

	res.sendStatus(200);
});

module.exports = router;