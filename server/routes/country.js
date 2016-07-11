var express = require('express'),
	router = express.Router(),
	Datastore = require('nedb'),
	db = new Datastore({ filename: './db/countries.db', autoload: true });

// // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.param(['id'], function (req, res, next, value) {
  next();
});

// define the home page route
router.get('/', function(req, res, next) {
	db.find({}, function (err, docs) {
  		res.json(docs);
	});
});

router.put('/:id', function (req, res) {
	db.update({ _id: req.params.id }, req.body, {}, function (err, numReplaced) {
		if (!err) {
			res.sendStatus(200);
		} else {
			console.log(err);
		}
	});

});

router.post('/', function (req, res) {
	db.insert(req.body, function (err, newDoc) {   // Callback is optional
		if (!err) {
			res.sendStatus(200);
		} else {
			console.log(err);
		}
	});
});

router.delete('/:id', function (req, res) {
	db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
		if (!err) {
			res.sendStatus(200);
		} else {
			console.log(err);
		}
	});
});

module.exports = router;