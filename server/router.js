var fileExists = require('file-exists'),
	static = require('./libs/static');

function route (pathname, handle, response, postData) {
  	console.log("Request for " + pathname);

		// handle[pathname](response, pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, pathname, postData);
	} else if (typeof handle[pathname] === 'string') {
		handle['getFile'](response, handle[pathname], postData);
	} else if (fileExists(static.path + pathname)) {
		handle['getFile'](response, pathname, postData);
	} else {
		response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;