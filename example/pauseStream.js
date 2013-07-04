var http = require('http');
var fs = require('fs');

/* this example has a race condition... see pause-stream if you need to wait on a callback. */

var server = http.createServer( function(req, res) {
	var id = Math.random().toString(16).slice(2);
	var dir = __dirname + '/tmp/' +id;

	fs.mkdir(dir, function(err){
		console.log(err);
		var ws = fs.createWriteStream(dir + '/output.txt');
		req.pipe(ws); //use ps.pip(ws)

		req.on('end', function () {
			res.end(id + '\n');
		});
		 //resume the stream here with: ps.resume();
	});	
});
server.listen(8080);

