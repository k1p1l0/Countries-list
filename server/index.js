var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers'),
	handle = {};

// Request for pages
handle['/'] = '/index.html';

// Request for data (array, time) API

handle['/show'] = requestHandlers.show;
handle['/upload'] = requestHandlers.upload;

handle['/get'] = requestHandlers.getCountries;

// for requests static files
handle['getFile'] = requestHandlers.getFile;

server.start(router.route, handle);