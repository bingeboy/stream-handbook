var fs = require('fs');
var Stream = require('stream');

var ts = new Stream;
ts.readable = true;
ts.writeable = true;

ts.write = function(buffer){
	ts.emit('data', buffer.toString().toUpperCase());
}

ts.end = function(buffer){
	if(arguments.length) ts.write(buffer);
	ts.emit('end');	
}

process.stdin.pipe(ts).pipe(process.stdout);
