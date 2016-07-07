var express = require('express'),
	router = express.Router(),
	Datastore = require('nedb'),
	db = new Datastore({ filename: './db/countries.db', autoload: true });

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

router.param(['id'], function (req, res, next, value) {
  next();
});

// define the home page route
router.get('/', function(req, res, next) {
	db.find({}, function (err, docs) {
  		res.json(docs);
	});
});

router.put('/', function (req, res) {
	db.insert(req.body, function (err, newDoc) {   // Callback is optional
		if (!err) {
			console.log(newDoc);
			res.sendStatus(200);
		}
	});
});

router.post('/', function (req, res) {
	db.insert(req.body, function (err, newDoc) {   // Callback is optional
		if (!err) {
			console.log(newDoc);
			res.sendStatus(200);
		}
	});
});

router.delete('/:id', function (req, res) {
	db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
		if (!err) {
			res.sendStatus(200);
		}
	});

});

module.exports = router;