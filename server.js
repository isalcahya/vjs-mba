const express = require('express')
const path = require('path');
const http = require('http');

var app = express();

app.use(express.static(path.join(__dirname, 'public/dist')));

var port = 3030;

app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});

