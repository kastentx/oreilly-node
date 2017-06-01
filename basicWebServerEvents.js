var http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
  console.log('request event');

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.on('connection', () => {
  console.log('connection event');
});

server.listen(8124, () => {
  console.log('listening event');
});

console.log('Server running on port 8124');
