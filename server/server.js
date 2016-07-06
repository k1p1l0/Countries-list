var http = require('http'),
	url = require('url');

function start (route, handle) {
  function onRequest (request, response) {
  	var pathname = url.parse(request.url).pathname,
  		  postData = '';

  	request.setEncoding("utf8");

  	request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;

      console.log("Received POST'"+
      postData + "'.");
    });

    request.addListener("end", function() {
  		route(pathname, handle, response, postData);
    });
  }

  http.createServer(onRequest).listen(3000);
  console.log('Server has started by you :)');
}

exports.start = start;