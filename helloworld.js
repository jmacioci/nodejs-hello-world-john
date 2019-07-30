var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello John, this is your first github trigger');
});
server.listen(8080);
