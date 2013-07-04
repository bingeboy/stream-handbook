var fs = require('fs');
var ws = fs.createWriteStream('./data/outputFromWS.txt');

ws.write('bingeboy');
ws.write('was\n');
ws.write('here!');
ws.end();

