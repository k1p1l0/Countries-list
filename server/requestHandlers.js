var fs = require('fs'),
    static = require('./libs/static'),
    db = require('./libs/db');

function getFile (response, uri) {
    fs.readFile(static.path + uri, function (err, data) {
        if (uri.slice(-3) === 'css') {
            response.writeHead(200, {"Content-Type": "text/css"});
        } else if (uri.slice(-2) === 'js') {
            response.writeHead(200, {"Content-Type": "text/javascript"});
        } else if (uri.slice(-4) === 'html') {
            response.writeHead(200, {"Content-Type": "text/html"});
        }
        response.write(data);
        response.end();
    });
}

function getCountries (response, uri) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(db.data));
    response.end();
}

function upload (response, uri, postData) {
    var data = JSON.parse(postData);

    if (typeof data === 'array') {
        for(var key in data) {        
            db.data.push(data[key]);
        }
    } else {
        db.data.push(data);
    }

    console.log(db.data);

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("200");
  response.end();
}

exports.getCountries = getCountries;

exports.getFile = getFile;

exports.upload = upload;