var fs = require('fs');
var Stream = require('stream');

var rs = new Stream;
rs.readable = true;

var counter = 0;

//write for infinity to console.
setInterval(function(){
	rs.emit('data', String(counter++));
}, 10);

// emit end event after 5000ms
setTimeout(function() {
	rs.emit('end');
	console.log(' ~~~Time Expired!');
}, 5000);

rs.pipe(process.stdout, {end : false});
